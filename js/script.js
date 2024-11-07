"use strict";
// Elements
const navbar = document.getElementById("navbar");
const navbarCollapse = document.getElementById("main-nav");
const navbarToggler = document.querySelector(".navbar-toggler");
const rootEl = document.documentElement;
const darkThemeButton = document.getElementById("dark-theme-button");
const lightThemeButton = document.getElementById("light-theme-button");
const textDarkIcon = document.getElementById("text-dark-icon");
const textDark = document.getElementById("text-dark");
const textDarkChecked = document.getElementById("text-dark-checked");
const textLightIcon = document.getElementById("text-light-icon");
const textLight = document.getElementById("text-light");
const textLightChecked = document.getElementById("text-light-checked");
const imgsFeaturedIn = document.querySelectorAll(".c-featured");
const date = document.querySelector(".date");
const currentYear = new Date().getFullYear();

// Set year dynamically
date.textContent = currentYear;

// On scroll-y add shadow to the navigation
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// If the navbar is strictly on top && the toggler is clicked, toggle shadow to the navigation
navbarToggler.addEventListener("click", function () {
  if (window.screenY === 0) {
    navbar.classList.toggle("shadow");
  }
});

// Toggle Dark/Light Theme

darkThemeButton.addEventListener("click", () => {
  rootEl.setAttribute("data-bs-theme", "dark");
  textDark.classList.remove("opacity-50");
  textDarkIcon.classList.remove("opacity-50");
  textDarkChecked.classList.remove("d-none");

  textLight.classList.add("opacity-50");
  textLightIcon.classList.add("opacity-50");
  textLightChecked.classList.add("d-none");

  // On dark mode, change color featured-in section
  for (let img of imgsFeaturedIn) {
    img.style.filter = "";
  }
});

lightThemeButton.addEventListener("click", () => {
  rootEl.setAttribute("data-bs-theme", "");

  textDark.classList.add("opacity-50");
  textDarkIcon.classList.add("opacity-50");
  textDarkChecked.classList.add("d-none");

  textLight.classList.remove("opacity-50");
  textLightIcon.classList.remove("opacity-50");
  textLightChecked.classList.remove("d-none");

  // On light mode, default color featured-in section
  for (let img of imgsFeaturedIn) {
    img.style.filter = "brightness(0) opacity(0.4)";
  }
});
