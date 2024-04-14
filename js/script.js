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
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-btn');
  const menuList = document.getElementById('menu-list');
  const navClose = document.getElementById('nav-close');

  toggleBtn.addEventListener('click', function() {
      menuList.classList.toggle('show-menu');
      if (menuList.classList.contains('show-menu')) {
          menuList.style.display = "block";
          navClose.classList.add("nav-close");
          navClose.style.display = "block";
          toggleBtn.style.display = "none";
      }
  });

  navClose.addEventListener('click', function() {
    menuList.classList.remove('show-menu');
    menuList.style.display = "none";
    navClose.classList.remove("nav-close");
    navClose.style.display = "none";
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.style.display = "block";
});



    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-list");
    const menuClose = document.getElementById("mobile-nav-close");

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('show-mobile-menu');
        if (mobileMenu.classList.contains('show-mobile-menu')) {
            mobileMenu.style.display = "block";
            menuClose.classList.add("nav-close");
            menuClose.style.display = "block";
            menuBtn.style.display = "none";
        }
        else {
          mobileMenu.style.display = "none";
          menuClose.classList.remove("nav-close");
          menuClose.style.display = "none";
          menuBtn.style.display = "block";
      }
    })
    menuClose.addEventListener('click', function() {
      mobileMenu.classList.remove('show-menu');
      mobileMenu.style.display = "none";
      menuClose.classList.remove("nav-close");
      menuClose.style.display = "none";
      menuBtn.classList.add("toggle-btn");
      menuBtn.style.display = "block";
  });
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

// Scroll
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

var container = document.getElementById('container');

window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    container.scrollBy({
      left: 100,
      behavior: 'smooth'
    });
  } else if (e.key === 'ArrowLeft') {
    container.scrollBy({
      left: -100,
      behavior: 'smooth'
    });
  } else if (e.key === 'ArrowUp') {
    container.scrollBy({
      top: 100,
      behavior: 'smooth'
    });
  } else if (e.key === 'ArrowDown') {
    container.scrollBy({
      top: -100,
      behavior: 'smooth'
    });
  }
});


