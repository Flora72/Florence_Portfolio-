'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  // Toggle the 'nav-active' class on the header to open/close the menu
  header.classList.toggle("nav-active");
  
  // Toggle the 'active' class on the button to switch icons
  this.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Close the menu when a navbar link is clicked
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
});



const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});