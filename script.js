/*=======================================================================================*/
/*changement d'image de fond de l'entête lorsqu'on clique sur le menu, apparition du menu de navigation avec toutes les rubriques cliquables pour se déplacer dans les différentes parties du site et disparition du nom de l'artiste*/

const menu = document.querySelector('.menu')
menu.onclick = function () {
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

//disparition du menu de navigation quand on clique sur une rubrique//


//========================================================================================//
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

//============================================================================================//
// carrousel des expos
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlideBottom = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

rightBtn.addEventListener("click", () => changeSlide("right"));
leftBtn.addEventListener("click", () => changeSlide("left"));

function changeSlide(btn) {
  if (btn == "left") {
    currentSlideBottom++;

    if (currentSlideBottom > slidesLength - 1) {
      currentSlideBottom = 0;
    }
  } else if (btn == "right") {
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

//fonction onclick pour les dots//
var dots = document.querySelectorAll('.dot');
var arrayDots = Array.from(dots);

for (let dot of dots){
  dot.addEventListener("click",(e) => {
  var avance = arrayDots.indexOf(e.target)+1;
  console.log(avance,e.target);
  currentSlide(avance)});
};

//========================================================================================//
//changement des couleurs titres rubriques en hover de la rubrique1//
const rubric1 = document.querySelector('.rubric1');
const catbio1 = document.querySelector('.catbio1');
const catbio2 = document.querySelector('.catbio2');

rubric1.addEventListener('mouseover',function()
{
    catbio1.style.color = "#e9940b";
    catbio2.style.color = "#e9940b"
});

rubric1.addEventListener('mouseout',function()
{
    catbio1.style.color = "#000000";
    catbio2.style.color = "#000000"
});

//changement couleurs titres rubriques en hover dela rubrique3//
const rubric3 = document.querySelector('.rubric3');
const catbio5 = document.querySelector('.catbio5');
const catbio6 = document.querySelector('.catbio6');

rubric3.addEventListener('mouseover',function()
{
    catbio5.style.color = "#fefee2";
    catbio6.style.color = "#fefee2"
});

rubric3.addEventListener('mouseout',function()
{
    catbio5.style.color = "#000000";
    catbio6.style.color = "#000000"
});

//changement couleurs titres rubriques en hover dela rubrique4//
const rubric4 = document.querySelector('.rubric4');
const catbio7 = document.querySelector('.catbio7');
const catbio8 = document.querySelector('.catbio8');

rubric4.addEventListener('mouseover',function()
{
    catbio7.style.color = "#177026";
    catbio8.style.color = "#177026"
});

rubric4.addEventListener('mouseout',function()
{
    catbio7.style.color = "#000000";
    catbio8.style.color = "#000000"
});

