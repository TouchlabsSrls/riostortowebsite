/**
 * Rio Storto — site interactions
 * Vanilla JS only: header scroll state, accessible nav, reveal on scroll.
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

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );

      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  /* ---- Fattoria didattica: linea Rio Storto (una sola volta) ---- */
  const river = document.querySelector(".page-fattoria-didattica .discovery-river");

  if (river) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      river.classList.add("is-drawn");
    } else {
      const riverObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              river.classList.add("is-drawn");
              riverObserver.unobserve(river);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
      );

      riverObserver.observe(river);
    }
  }
})();
