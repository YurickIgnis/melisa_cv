(() => {
  "use strict";
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("mainNav");
  const closeMenu = () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Abrir menú"); };
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  const progress = document.getElementById("progress");
  let waiting = false;
  const updateProgress = () => {
    const scrollMax = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (scrollMax <= 0 ? 100 : Math.min(100, Math.max(0, scrollY / scrollMax * 100))) + "%";
    waiting = false;
  };
  addEventListener("scroll", () => {
    if (!waiting) { waiting = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  addEventListener("resize", updateProgress);
  updateProgress();
  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    revealNodes.forEach(node => observer.observe(node));
  } else revealNodes.forEach(node => node.classList.add("visible"));
  document.getElementById("year").textContent = String(new Date().getFullYear());
  document.getElementById("printHero")?.addEventListener("click", () => print());
  document.getElementById("printFooter")?.addEventListener("click", () => print());
  const dialog = document.getElementById("caseDialog");
  document.querySelectorAll(".case-button").forEach(button => button.addEventListener("click", () => {
    document.getElementById("caseNumber").textContent = "CASO " + button.dataset.case + " / PLANTILLA";
    if (typeof dialog.showModal === "function") dialog.showModal();
  }));
  document.getElementById("closeCase")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
})();