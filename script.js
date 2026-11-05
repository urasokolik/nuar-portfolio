/**
 * nuar.dev — Portfolio Client Script
 * Lightweight, zero dependencies, high performance.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Apple-style Segmented Control Filter for Projects
  const filterButtons = document.querySelectorAll(".segment-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = (card.getAttribute("data-category") || "").split(" ");
        const shouldShow = filterValue === "all" || categories.includes(filterValue);

        if (shouldShow) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // 2. Mobile Navigation Toggle
  const burgerBtn = document.getElementById("burger-btn");
  const navMenu = document.getElementById("nav-menu");

  if (burgerBtn && navMenu) {
    const toggleMenu = () => {
      const isOpen = navMenu.classList.toggle("is-active");
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    };

    burgerBtn.addEventListener("click", toggleMenu);

    // Close on navigation link click
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-active");
        burgerBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("is-active") &&
        !navMenu.contains(e.target) &&
        !burgerBtn.contains(e.target)
      ) {
        navMenu.classList.remove("is-active");
        burgerBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("is-active")) {
        navMenu.classList.remove("is-active");
        burgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 3. Dynamic header hairline on scroll
  const header = document.querySelector(".header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        header.style.borderBottomColor = "rgba(255, 255, 255, 0.14)";
        header.style.background = "rgba(9, 9, 11, 0.88)";
      } else {
        header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
        header.style.background = "rgba(9, 9, 11, 0.75)";
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
