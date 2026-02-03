// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
function setActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);
// Add scroll animation to elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);
// Observe vehicle cards and contact cards
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".vehicle-card, .contact-card, .feature-item",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});
// Button interactions
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    const vehiclesSection = document.querySelector("#vehicles");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}
// Details button interactions
const detailsButtons = document.querySelectorAll(".details-button");
detailsButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const vehicleName =
      this.closest(".vehicle-card").querySelector(".vehicle-name").textContent;
    alert(
      `More details about ${vehicleName} coming soon!\n\nVisit our showroom in Brussels, Belgium for a test drive.`,
    );
  });
});
// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
// Header background on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.background = "rgba(15, 15, 30, 0.98)";
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.background = "rgba(15, 15, 30, 0.95)";
    header.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)";
  }
});
console.log("🇧🇪 Belgium Premium Cars - Website Loaded Successfully!");
