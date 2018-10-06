var myDiv = document.querySelector(".clickMe");

myDiv.addEventListener('click', function() {
  console.log("test");
});

var threshold = 400;
var header = document.querySelector("header");

window.addEventListener("scroll", function(event) {
  if (window.scrollY > threshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

var myBurger = document.querySelector('.burger');

myBurger.addEventListener("click", function() {
  document.querySelector('nav').classList.toggle('visible');
  document.getElementById('burgerIcon').classList.toggle('visible');
  document.getElementById('closeIcon').classList.toggle('visible');
});
