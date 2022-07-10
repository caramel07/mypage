const typed = document.getElementById("typed");
if (typed) {
  new Typed("#typed", {
    strings: [
    "Bonjour !<br><br>Je m'appelle Carine. Je suis développeuse web full stack.<br><br>Faisons connaisance..."
    ],
    typeSpeed: 50
  });
}

const bannerInfo = document.getElementById("banner-info");
const navbar = document.getElementById("navbar");
const logoNavbar = document.getElementById("logo");
const logoNavbarPhone = document.getElementById("logo-navbar-phone");
const hamb = document.getElementById("toggle");
const hambElement = document.querySelectorAll(".overlay-menu-element");
const overlay = document.getElementById("overlay");
const body = document.body;
