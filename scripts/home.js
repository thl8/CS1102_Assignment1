window.onscroll = function() {stickNavBar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-sticky")
  } else {
    navbar.classList.remove("nav-sticky");
  }
} 