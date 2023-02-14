
// home slide
var timeOnSlide = 3,
  timeBetweenSlides = 1,
  animationstring = "animation",
  animation = false,
  keyframeprefix = "",
  domPrefixes = "Webkit Moz O Khtml".split(" "),
  pfx = "",
  slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) {
  animation = true;
}

if (animation === false) {
  for (var i = 0; i < domPrefixes.length; i++) {
    if (slidy.style[domPrefixes[i] + "AnimationName"] !== undefined) {
      pfx = domPrefixes[i];
      animationstring = pfx + "Animation";
      keyframeprefix = "-" + pfx.toLowerCase() + "-";
      animation = true;
      break;
    }
  }
}

if (animation === false) {
} else {
  var images = slidy.getElementsByTagName("img"),
    firstImg = images[0],
    imgWrap = firstImg.cloneNode(false);
  slidy.appendChild(imgWrap);
  var imgCount = images.length,
    totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1),
    slideRatio = (timeOnSlide / totalTime) * 100,
    moveRatio = (timeBetweenSlides / totalTime) * 100,
    basePercentage = 100 / imgCount,
    position = 0,
    css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML +=
    "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " +
    imgCount * 100 +
    "%;  }\n";
  css.innerHTML +=
    "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
  for (i = 0; i < imgCount - 1; i++) {
    position += slideRatio;
    css.innerHTML += position + "% { left: -" + i * 100 + "%; }\n";
    position += moveRatio;
    css.innerHTML += position + "% { left: -" + (i + 1) * 100 + "%; }\n";
  }
  css.innerHTML += "}\n";
  css.innerHTML +=
    "#slidy { left: 0%; " +
    keyframeprefix +
    "transform: translate3d(0,0,0); " +
    keyframeprefix +
    "animation: " +
    totalTime +
    "s slidy infinite; }\n";
  document.body.appendChild(css);
}

// home show image
function showPanel(id) {
  var elements = document.getElementsByClassName("content");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//home popup
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// about-slide /home slide customer
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 3000);
};



// navbar sticky
// window.onscroll = function () {
//   myFunction();
// };
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }










// AOS animation function
AOS.init();
