/**
 * ================ Slider ================
 */

var dot = document.querySelectorAll(".dot");
var slide = document.querySelectorAll(".slide");
dot[0].classList.add("active");
slide[0].classList.add("active");


for (var i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", function () {
    for (j = 0; j < dot.length; j++) {
      dot[j].classList.remove("active");
    }
    this.classList.add("active");

    var activeSlide = this;
    for ( var currentSlide = 0; activeSlide = activeSlide.previousElementSibling; currentSlide++) {
    }

    for (j = 0; j < slide.length; j++) {
      slide[j].classList.remove("active");
    }

    slide[currentSlide].classList.add("active");

    resetInterval();
  })
}

function setTime() {
  var currentSlide = document.querySelector(".slide.active");

  clearClass();

  for (var positonSlide = 0; currentSlide = currentSlide.previousElementSibling; positonSlide++) {
  }

  if (positonSlide < slide.length - 1) {
    slide[positonSlide].nextElementSibling.classList.add("active");
    dot[positonSlide].nextElementSibling.classList.add("active");
  } else {
    slide[0].classList.add("active");
    dot[0].classList.add("active");
  }
}

// Clear Class
function clearClass() {
  for (var i = 0; i < slide.length; i++) {
    slide[i].classList.remove("active");
    dot[i].classList.remove("active");
  }
}


var timeOut = setInterval(function () {
  setTime();
}, 10000);

resetInterval = function () {
  clearInterval(timeOut);

  timeOut = setInterval(function () {
    setTime();
  }, 10000);
}



/**
 * ================ Video Popup ================
 */

var videoBtn = document.getElementsByClassName("video-play");
var overplay = document.getElementById("overplay");
var videoYtb = document.getElementById("video");
var closeBtn = document.getElementById("close");


function openPopup() {
  for (var i = 0; i < videoBtn.length; i++) {
    videoBtn[i].addEventListener("click", function() {
      overlay.style.display = "block";
      videoYtb.style.display = "block";
      closeBtn.style.display = "block";
    })
  }
}

function closePopup() {
  closeBtn.addEventListener("click", function() {
    this.style.display = "none";
    overlay.style.display = "none";
    videoYtb.style.display = "none";
  })
}

openPopup();
closePopup();

// Option Tool 
var toolBtn = document.getElementById("tool-1");
var toolsOption = document.getElementById("tools");
var tableOption = document.getElementById("table");

function openTool() {
  toolBtn.addEventListener("click", function() {
    toolsOption.classList.toggle("active");
    tableOption.classList.toggle("active");
  })
}

openTool();

// Mouse move
var mouseMove = document.getElementById("slides");

mouseMove.addEventListener("mousemove", function() {
  var x = event.clientX;
  var y = event.clientY;
  var move1 = document.getElementsByClassName("img-move-1");
  var move2 = document.getElementsByClassName("img-move-2");
  var move3 = document.getElementsByClassName("img-move-3");
  var move4 = document.getElementsByClassName("img-move-4");

  move1[0].style.top = y / 200 + "%";
  move1[0].style.left = x / 200 + "%";
  move2[0].style.top = y / 200 + "%";
  move2[0].style.right = x / 200 + "%";
  move3[0].style.top = y / 200 + "%";
  move3[0].style.right =  x / 200 + "%";
  move4[0].style.top = 50 + x / 200 + "%";
  move4[0].style.right = 50 + x / 200 + "%";
  move3[1].style.top = y / 200 + "%";
  move3[1].style.right = x / 200 + "%";
  move4[1].style.top = 50 + x / 200 + "%";
  move4[1].style.right = 50 + x / 200 + "%";
})

