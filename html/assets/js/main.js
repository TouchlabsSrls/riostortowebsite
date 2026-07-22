/**
 * Rio Storto — site interactions
 * Vanilla JS only: header scroll state, accessible nav, shared reveal/draw motion.
 * Pagine interne: header con data-header-solid resta sempre in stato solido.
 */
(function () {
  "use strict";

  document.body.classList.add("js-ready");

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMobile = document.querySelector("[data-nav-mobile]");
  const dropdown = document.querySelector("[data-dropdown]");
  const yearEl = document.querySelector("[data-year]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const solidHeader = header && header.hasAttribute("data-header-solid");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---- Header scroll state ---- */
  function updateHeader() {
    if (!header) return;
    if (solidHeader) {
      header.classList.add("is-scrolled");
      return;
    }
    const scrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", scrolled);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---- Desktop dropdown ---- */
  if (dropdown) {
    const trigger = dropdown.querySelector(".nav-desktop__trigger");

    function closeDropdown() {
      dropdown.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    }

    function openDropdown() {
      dropdown.classList.add("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
    }

    if (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const isOpen = dropdown.classList.contains("is-open");
        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });

      trigger.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeDropdown();
          trigger.focus();
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          openDropdown();
          const firstLink = dropdown.querySelector(".nav-dropdown a");
          if (firstLink) firstLink.focus();
        }
      });
    }

    dropdown.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdown();
        if (trigger) trigger.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target)) {
        closeDropdown();
      }
    });
  }

  /* ---- Mobile navigation ---- */
  function setMobileNav(open) {
    if (!navToggle || !navMobile) return;

    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    document.body.classList.toggle("is-nav-open", open);
    if (header) header.classList.toggle("is-nav-open", open);

    if (open) {
      navMobile.hidden = false;
      const firstFocusable = navMobile.querySelector("a, button");
      if (firstFocusable) firstFocusable.focus();
    } else {
      navMobile.hidden = true;
      navToggle.focus();
    }
  }

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") !== "true";
      setMobileNav(open);
    });

    navMobile.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMobileNav(false);
      }
    });

    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMobileNav(false);
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1100 && navToggle.getAttribute("aria-expanded") === "true") {
        setMobileNav(false);
      }
    });
  }

  /* ---- Mobile submenu ---- */
  document.querySelectorAll("[data-mobile-subtrigger]").forEach(function (button) {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    button.addEventListener("click", function () {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.hidden = expanded;
    });
  });

  /* ---- Shared motion: reveal + draw-line (single IntersectionObserver) ---- */
  document.querySelectorAll("[data-reveal-delay]").forEach(function (el) {
    const delay = el.getAttribute("data-reveal-delay");
    if (delay !== null && delay !== "") {
      el.style.setProperty("--reveal-delay", /ms$|s$/.test(delay) ? delay : delay + "ms");
    }
  });

  function activateMotion(el) {
    el.classList.add("is-visible");
    if (el.hasAttribute("data-draw-line") || el.classList.contains("discovery-river")) {
      el.classList.add("is-drawn");
    }
  }

  const motionEls = document.querySelectorAll(".reveal, [data-draw-line], .discovery-river");

  if (motionEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      motionEls.forEach(activateMotion);
    } else {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              activateMotion(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      motionEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }
})();
