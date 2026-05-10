const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const currentPage = document.body.dataset.page;

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  if (link.dataset.pageLink === currentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }

  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  });
});
