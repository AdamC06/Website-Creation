// highlight current page in navbar
(() => {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(a => {
    if ((a.getAttribute("href") || "").toLowerCase() === current) {
      a.style.background = "rgba(255,255,255,.08)";
    }
  });
})();
