/**
 * Audit mobile temporaneo — Rio Storto homepage
 * Uso: node scripts/mobile-audit.mjs
 * Dipendenza: npx playwright (non permanente nel progetto)
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reference/visual-review/mobile-audit");
const BASE = process.env.AUDIT_URL || "http://localhost:8086/";

const VIEWPORTS = [
  { name: "320x568", width: 320, height: 568 },
  { name: "360x800", width: 360, height: 800 },
  { name: "375x667", width: 375, height: 667 },
  { name: "375x812", width: 375, height: 812 },
  { name: "390x844", width: 390, height: 844 },
  { name: "393x852", width: 393, height: 852 },
  { name: "412x915", width: 412, height: 915 },
  { name: "430x932", width: 430, height: 932 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "1440x900", width: 1440, height: 900 },
];

const ASSETS = [
  "/assets/css/main.css",
  "/assets/js/main.js",
  "/assets/img/logo-rio-storto-96.png",
  "/assets/img/home/hero-rio-storto.webp",
  "/assets/img/home/agricoltura-rio-storto.webp",
  "/assets/img/home/allevamento-rio-storto.webp",
  "/assets/img/home/prodotti-rio-storto.webp",
  "/assets/img/home/agriturismo-rio-storto.webp",
  "/assets/img/home/fattoria-didattica-rio-storto.webp",
];

fs.mkdirSync(OUT, { recursive: true });

function round(n) {
  return Math.round(n * 100) / 100;
}

async function auditViewport(browser, vp) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(400);

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const vw = window.innerWidth;
    const overflowing = [];
    const absoluteSpill = [];
    const overlaps = [];

    document.querySelectorAll("body *").forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      if (r.right > vw + 1 || r.left < -1) {
        overflowing.push({
          tag: el.tagName.toLowerCase(),
          className: (el.className && String(el.className).slice(0, 80)) || "",
          left: r.left,
          right: r.right,
          width: r.width,
        });
      }
      if (style.position === "absolute" || style.position === "fixed") {
        const parent = el.offsetParent || el.parentElement;
        if (parent) {
          const pr = parent.getBoundingClientRect();
          if (r.bottom > pr.bottom + 2 || r.top < pr.top - 2 || r.right > pr.right + 2 || r.left < pr.left - 2) {
            absoluteSpill.push({
              tag: el.tagName.toLowerCase(),
              className: (el.className && String(el.className).slice(0, 80)) || "",
              parent: (parent.className && String(parent.className).slice(0, 60)) || parent.tagName,
            });
          }
        }
      }
    });

    const intro = document.querySelector(".intro");
    const filiera = document.querySelector(".filiera");
    if (intro && filiera) {
      const a = intro.getBoundingClientRect();
      const b = filiera.getBoundingClientRect();
      // Check intro path markers vs filiera title
      const markers = [...document.querySelectorAll(".intro__path li")].map((li) => {
        const before = window.getComputedStyle(li, "::before");
        const r = li.getBoundingClientRect();
        return {
          text: li.textContent.trim(),
          position: before.position,
          left: before.left,
          top: r.top,
          bottom: r.bottom,
          right: r.right,
        };
      });
      overlaps.push({
        introBottom: a.bottom + window.scrollY,
        filieraTop: b.top + window.scrollY,
        gap: b.top - a.bottom,
        markers,
      });
    }

    const images = [...document.images].map((img) => {
      const nw = img.naturalWidth;
      const nh = img.naturalHeight;
      const rw = img.clientWidth;
      const rh = img.clientHeight;
      let distorted = false;
      if (nw && nh && rw && rh) {
        const nat = nw / nh;
        const ren = rw / rh;
        distorted = Math.abs(nat - ren) > 0.35 && getComputedStyle(img).objectFit === "fill";
      }
      return { src: img.currentSrc || img.src, distorted, rw, rh, nw, nh };
    });

    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      bodyScrollWidth: body.scrollWidth,
      overflowX: doc.scrollWidth > doc.clientWidth + 1,
      overflowing: overflowing.slice(0, 25),
      absoluteSpill: absoluteSpill.slice(0, 25),
      overlaps,
      images,
      consoleErrors: [],
    };
  });

  metrics.consoleErrors = consoleErrors;

  const fullPath = path.join(OUT, `full-${vp.name}.png`);
  await page.screenshot({ path: fullPath, fullPage: true });

  // Close-up: intro → filiera transition
  const intro = page.locator(".intro");
  if (await intro.count()) {
    await intro.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.screenshot({
      path: path.join(OUT, `detail-intro-filiera-${vp.name}.png`),
      clip: {
        x: 0,
        y: Math.max(0, (await intro.boundingBox()).y - 20),
        width: vp.width,
        height: Math.min(vp.height, 700),
      },
    });
  }

  await page.close();
  return { viewport: vp.name, ...metrics, screenshot: fullPath };
}

async function checkAssets(browser) {
  const page = await browser.newPage();
  const results = [];
  for (const asset of ASSETS) {
    const res = await page.goto(new URL(asset, BASE).toString(), { waitUntil: "load" });
    results.push({ asset, status: res ? res.status() : 0 });
  }
  await page.close();
  return results;
}

const browser = await chromium.launch({ headless: true });
const report = {
  url: BASE,
  generatedAt: new Date().toISOString(),
  assets: await checkAssets(browser),
  viewports: [],
};

for (const vp of VIEWPORTS) {
  process.stdout.write(`Auditing ${vp.name}...\n`);
  const result = await auditViewport(browser, vp);
  report.viewports.push({
    viewport: result.viewport,
    scrollWidth: result.scrollWidth,
    clientWidth: result.clientWidth,
    overflowX: result.overflowX,
    overflowingCount: result.overflowing.length,
    overflowing: result.overflowing,
    absoluteSpillCount: result.absoluteSpill.length,
    absoluteSpill: result.absoluteSpill,
    introFiliera: result.overlaps[0] || null,
    distortedImages: result.images.filter((i) => i.distorted),
    consoleErrors: result.consoleErrors,
    screenshot: path.relative(ROOT, result.screenshot),
  });
}

await browser.close();

const reportPath = path.join(OUT, "audit-report.json");
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
process.stdout.write(`\nReport: ${reportPath}\n`);

const issues = report.viewports.filter((v) => v.overflowX || v.consoleErrors.length || v.overflowingCount);
process.stdout.write(`Viewports with issues: ${issues.length}/${report.viewports.length}\n`);
