/**
 * Audit mobile temporaneo — Rio Storto
 * Uso:
 *   node scripts/mobile-audit.mjs
 *   AUDIT_URL=http://localhost:8086/storia/ AUDIT_OUT=reference/visual-review/storia node scripts/mobile-audit.mjs
 *   AUDIT_URL=http://localhost:8086/azienda/agricoltura/ AUDIT_OUT=reference/visual-review/azienda-pages/agricoltura node scripts/mobile-audit.mjs
 * Dipendenza: playwright (non permanente nel progetto)
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(ROOT, process.env.AUDIT_OUT || "reference/visual-review/mobile-audit");
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
  { name: "1024x768", width: 1024, height: 768 },
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

async function auditViewport(browser, vp) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err)));

  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  });
  await page.waitForTimeout(300);

  const metrics = await page.evaluate(() => {
    const doc = document.documentElement;
    const vw = window.innerWidth;
    const overflowing = [];
    const absoluteSpill = [];

    document.querySelectorAll("body *").forEach((el) => {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;
      if (r.right > vw + 1 || r.left < -1) {
        const className = (el.className && String(el.className).slice(0, 80)) || "";
        if (className.includes("skip-link")) return;
        overflowing.push({
          tag: el.tagName.toLowerCase(),
          className,
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
            const className = (el.className && String(el.className).slice(0, 80)) || "";
            if (className.includes("skip-link")) return;
            absoluteSpill.push({
              tag: el.tagName.toLowerCase(),
              className,
              parent: (parent.className && String(parent.className).slice(0, 60)) || parent.tagName,
            });
          }
        }
      }
    });

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
      scrollHeight: doc.scrollHeight,
      overflowX: doc.scrollWidth > doc.clientWidth + 1,
      overflowing: overflowing.slice(0, 25),
      absoluteSpill: absoluteSpill.slice(0, 25),
      images,
      h1Count: document.querySelectorAll("h1").length,
      consoleErrors: [],
    };
  });

  metrics.consoleErrors = consoleErrors;

  const fullPath = path.join(OUT, `full-${vp.name}.png`);
  await page.screenshot({ path: fullPath, fullPage: true });

  if (vp.name === "390x844" || vp.name === "1440x900") {
    await page.screenshot({ path: path.join(OUT, `top-${vp.name}.png`) });
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
    scrollHeight: result.scrollHeight,
    overflowX: result.overflowX,
    overflowingCount: result.overflowing.length,
    overflowing: result.overflowing,
    absoluteSpillCount: result.absoluteSpill.length,
    absoluteSpill: result.absoluteSpill,
    distortedImages: result.images.filter((i) => i.distorted),
    h1Count: result.h1Count,
    consoleErrors: result.consoleErrors,
    screenshot: path.relative(ROOT, result.screenshot),
  });
}

await browser.close();

const reportPath = path.join(OUT, "audit-report.json");
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
process.stdout.write(`\nReport: ${reportPath}\n`);

const issues = report.viewports.filter(
  (v) => v.overflowX || v.consoleErrors.length || v.overflowingCount || v.h1Count !== 1
);
process.stdout.write(`Viewports with issues: ${issues.length}/${report.viewports.length}\n`);
