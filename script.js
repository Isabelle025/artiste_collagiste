/*changement d'image de fond de l'entête lorsqu'on clique sur le menu, apparition de l'entête avec toutes les rubriques cliquables pour se déplacer dans les différentes partie du site et disparition du nom de l'artiste*/
const menu = document.querySelector('.menu')
menu.onclick = function () {
    // nav('.background_menu');
    nav('.category_menu');
    document.querySelector('.name').style.display= "none";
    document.querySelector('.menu').style.display="none";
    }
    
function nav(entry) 
    {
        var text = document.querySelector(entry);

        if (text.style.display == 'grid'){
            text.style.display = ('unset');
        } else {
            text.style.display = ('grid');
        }
        
    }

//carrousel des oeuvres//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bloc_image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// slide des expos
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlideBottom = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlideBottom++;

    if (currentSlideBottom > slidesLength - 1) {
      currentSlideBottom = 0;
    }
  } else if (btn == "left") {
    currentSlideBottom--;

    if (currentSlideBottom < 0) {
      currentSlideBottom = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlideBottom) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlideBottom * 100}%)`;
}

setInterval(autoChangeSlide, 3000);

function autoChangeSlide() {

  currentSlideBottom++;

  if (currentSlideBottom > slidesLength - 1) {
    currentSlideBottom = 0;
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlideBottom) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlideBottom * 100}%)`;
}
