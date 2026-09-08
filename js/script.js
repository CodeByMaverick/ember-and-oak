const navbar = document.getElementById("navbar");
const logoEmber = document.getElementById("logo-ember");
const navLinks = document.querySelectorAll("#nav-links a");
const reserveButton = document.getElementById("reserve-button");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", () => {
    const aboutTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutTop - 80){
        //navbar.classList.add("bg-cream");

        logoEmber.classList.remove("text-cream");
        logoEmber.classList.add("text-espresso");

        navLinks.forEach(link => {
            link.classList.remove("text-cream");
            link.classList.add("text-espresso/70");
        });
        reserveButton.classList.remove("border-cream", "bg-transparent");
        reserveButton.classList.add("border-terracotta", "bg-terracotta");
    }

    else {
        //navbar.classList.remove("bg-cream");

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