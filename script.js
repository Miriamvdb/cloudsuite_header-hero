// Make background header white when scroll down
const headerElement = document.querySelector("header");
const heroElement = document.querySelector("h1");
const buttonElement = document.querySelector("button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerElement.classList.add("header-scrolled");
  } else if (window.scrollY <= 50) {
    headerElement.classList.remove("header-scrolled");
  }
  if (window.scrollY > 250) {
    heroElement.classList.add("hero-scrolled");
    buttonElement.classList.add("hero-scrolled");
  } else if (window.scrollY <= 250) {
    heroElement.classList.remove("hero-scrolled");
    buttonElement.classList.remove("hero-scrolled");
  }
});

// Parallax scrolling
let heroContent = document.getElementById("hero-content");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  heroContent.style.left = value * 1.0001 + "px";
});
