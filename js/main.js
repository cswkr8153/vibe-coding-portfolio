const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("site-header");
const year = document.getElementById("year");
const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a[href^="#"]');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

const highlightNav = () => {
  const scrollPos = window.scrollY + 140;
  let current = "home";

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("is-active", isActive);
  });
};

window.addEventListener("scroll", highlightNav, { passive: true });
highlightNav();
