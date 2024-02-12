
/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
//dark mode

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Set initial theme based on user preference
if (isDarkMode) {
    body.classList.add("dark");
}

// Toggle dark mode on button click
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Update local storage with user preference
    if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// to close the navbar in mobile view
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }
}

function closeMobileMenu() {
  var menuBtn = document.getElementById("myNavMenu");
  menuBtn.className = "nav-menu";
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["THE BVSS MARATHA STUDENT'S HOME","जय जिजाऊ जय शिवराय🚩"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 4000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 100})
sr.reveal('.featured-text-btn',{delay: 100})
sr.reveal('.social_icons',{delay: 100})
sr.reveal('.featured-image',{delay: 100})
sr.reveal('.about-info-top',{delay: 100})
sr.reveal('.contact-info',{delay: 100})




/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 100})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.map-left-animation',{delay: 100})


/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('.about-info-right',{delay:100})
srRight.reveal('.contact-info',{delay: 100})








/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// testimonials

(function ($) {
  "use strict";

  var carousels = function () {
      $(".owl-carousel1").owlCarousel({
          loop: true,
          center: true,
          margin: 0,
          responsiveClass: true,
          nav: false,
          dots: true,
          dotsEach: 1,
          autoplay: true,
          autoplayHoverPause:true,
          autoplayTimeout: 3000, // Set autoplay delay in milliseconds (e.g., 5000ms = 5 seconds)
          responsive: {
              0: {
                  items: 1,
                  nav: false
              },
              680: {
                  items: 2,
                  nav: false,
                  loop: false
              },
              1000: {
                  items: 3,
                  nav: true
              }
          },
          onInitialized: function (event) {
            var totalItems = event.item.count;
            var dotsPerPage = 5;
    
            // Check if total items are greater than dotsPerPage
            if (totalItems > dotsPerPage) {
              // Hide excess dots using CSS
              $(".owl-carousel1 .owl-dots .owl-dot:gt(" + (dotsPerPage - 1) + ")").hide();
            }
          }
          
      });
  };

  carousels();
})(jQuery);











