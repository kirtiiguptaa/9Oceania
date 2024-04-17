// Loading page
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var loader = document.getElementById("preloader");
      loader.style.display = "none";
      document.getElementById('video').style.display = 'block';
  }, 3000); 
});

// Loading
window.addEventListener("load", function() {
  setTimeout(function() {
      var loader = document.getElementById("preloader");
      loader.style.display = "none";
  }, 4000); 
  
});

// Cursor
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x - 250 + "px"
  blur.style.top = dets.y - 250 + "px"
});

// Toggle Button


// Function to start the video after a delay


// Scroll
// var container = document.getElementById('scroll-container');

// window.addEventListener('wheel', function(e) {
//   if (e.deltaY > 0) {
//     container.scrollBy({
//       left: 100,
//       behavior: 'smooth'
//     });
//   } else {
//     container.scrollBy({
//       left: -100,
//       behavior: 'smooth'
//     });
//   }
// });

// document.getElementById('scroll-container').addEventListener('wheel', function(event) {
//   if (event.deltaY !== 0) {
//     this.scrollLeft += event.deltaY;
//     event.preventDefault();
//   }
// });

// window.onload = function() {
// 	init();
// };

// function init() {
// 	var menu = document.getElementById("menu");
// 	menu.classList.add("transition-after-pageload");
// }