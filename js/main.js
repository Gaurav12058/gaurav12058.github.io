(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const resumeLink = document.querySelector(".resume-button");
    resumeLink?.addEventListener("click", () => {
      // Open the preview during the user gesture; the link still downloads normally.
      window.open(resumeLink.href, "_blank", "noopener,noreferrer");
    });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const sections = [...document.querySelectorAll("[data-reveal]")];
    let observer;
    const reveal = (section) => {
      section.classList.remove("reveal-pending");
      observer?.unobserve(section);
    };
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target);
        });
      }, { threshold: 0 });

      sections.forEach((section) => {
        // Above-the-fold content is immediately visible, including restored scroll positions.
        if (section.getBoundingClientRect().top < window.innerHeight) return;
        observer.observe(section);
        section.classList.add("reveal-ready", "reveal-pending");
        section.addEventListener("focusin", () => reveal(section));
      });

      reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
          sections.forEach(reveal);
          observer.disconnect();
        }
      });
    } catch {
      // A failed animation enhancement must never hide content.
      sections.forEach(reveal);
      observer?.disconnect();
    }
  });
})();
