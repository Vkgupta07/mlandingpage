let primaryheader = document.querySelector(".primary-header")
let primaryNav = document.querySelector(".primary-navigation");
let navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", "false")
    : navToggle.setAttribute("aria-expanded", "true");
  primaryNav.toggleAttribute("data-visible");
  primaryheader.toggleAttribute("nav-overlay");
});


const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480:{
    dots:false,
    // arrows:true
    }
  }
});