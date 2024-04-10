// Loading page
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById("preloader");
        loader.style.display = "none";
        document.getElementById('video').style.display = 'block';
    }, 3000); 
});

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
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const menuList = document.getElementById('menu-list');

    toggleBtn.addEventListener('click', function() {
        menuList.classList.toggle('show-menu');
        if (menuList.classList.contains('show-menu')) {
            menuList.style.display = "block";
        } 
        else {
            menuList.style.display = "none";
        }
    });
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-list");

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
        if (mobileMenu.classList.contains('show-mobile-menu')) {
            mobileMenu.style.display = "block";
        }
        else {
            mobileMenu.style.display = "none";
        }
    })
});

// Function to start the video after a delay
function startVideo() {
    const video = document.getElementById('logo-video');

    video.playbackRate = 0.75;

    video.play()
        .catch(error => {
            console.error('Autoplay prevented:', error.message);
        });
}

setTimeout(startVideo, 4000);


var container = document.getElementById('container');

window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    container.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  } else {
    container.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  }
});

