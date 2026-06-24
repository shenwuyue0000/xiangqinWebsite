const revealNodes = document.querySelectorAll(".reveal");
const toast = document.getElementById("toast");
const demoTrigger = document.querySelector(".js-demo-trigger");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
  revealObserver.observe(node);
});

demoTrigger?.addEventListener("click", () => {
  toast.classList.add("is-visible");
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
});
