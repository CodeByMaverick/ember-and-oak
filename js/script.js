const navbar = document.getElementById("navbar");
const logoEmber = document.getElementById("logo-ember");
const navLinks = document.querySelectorAll("#nav-links a");
const reserveButton = document.getElementById("reserve-button");

const aboutSection = document.getElementById("about");
const menuSection = document.getElementById("menu");
const gallerySection = document.getElementById("gallery");
const testimonialsSection = document.getElementById("testimonials");
const reserveSection = document.getElementById("reserve");

window.addEventListener("scroll", () => {
    const aboutTop = aboutSection.offsetTop;
    const menuTop = menuSection.offsetTop;
    const galleryTop = gallerySection.offsetTop;
    const testimonialsTop = testimonialsSection.offsetTop;
    const reserveTop = reserveSection.offsetTop;

    if (
        (window.scrollY >= aboutTop - 80 && window.scrollY < menuTop - 80) ||
        (window.scrollY >= galleryTop - 80 && window.scrollY < reserveTop - 80)
    ) {

        logoEmber.classList.remove("text-cream");
        logoEmber.classList.add("text-espresso");

        navLinks.forEach(link => {
            link.classList.remove("text-cream");
            link.classList.add("text-espresso/70");
        });
        reserveButton.classList.remove("border-cream");
        reserveButton.classList.add("border-terracotta", "bg-terracotta");
    }

    else {

        logoEmber.classList.remove("text-espresso");
        logoEmber.classList.add("text-cream");

        navLinks.forEach((link) => {
            link.classList.remove("text-espresso/70");
            link.classList.add("text-cream");
        });
        reserveButton.classList.remove("border-terracotta");
        reserveButton.classList.add("border-cream");
    }
});


const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenuButton.setAttribute("aria-expanded", isOpen);
    mobileMenuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
    });
});