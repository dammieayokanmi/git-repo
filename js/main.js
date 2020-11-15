// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}



// sticky navbar on scroll and display mini profile info beside overview tablink
window.onscroll = function() {myFunction();};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
const infoScroll=document.getElementById("infoScroll");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    infoScroll.style.visibility="visible"
  } else {
    navbar.classList.remove("sticky");
    infoScroll.style.visibility="hidden"
  }
 
}


