/*=======================================================================================*/
/*changement d'image de fond de l'entête lorsqu'on clique sur le menu, apparition du menu de navigation avec toutes les rubriques cliquables pour se déplacer dans les différentes parties du site et disparition du nom de l'artiste*/

const menu = document.querySelector('.menu')
menu.onclick = function () {
  contain.style.display = ('grid');
}

//disparition du menu de navigation quand on clique sur une rubrique//
const contain = document.querySelector('.background_menu')
contain.onclick = function () {
    contain.style.display="none";
    }

//scroll du menu burger//
  let timer = null;
  window.addEventListener('scroll', function() {
      const menu = document.querySelector(".menu");
      let scrollY = this.scrollY;
      if (timer !== null) {
          clearTimeout(timer);
          setTimeout(function() {
              menu.style.display = "none";
          }, 400);
      }

      
      
      if (scrollY >= 0) {
          timer = setTimeout(function() {
            menu.style.display = "unset";
          }, 1000);
      }
  }, false);

//========================================================================================//
//carrousel des oeuvres//

//flèches du carrousel//
const topArrow = document.querySelector(".prevTop");
const bottomArrow = document.querySelector(".nextTop");

topArrow.addEventListener("click", () => plusSlides(-1));
bottomArrow.addEventListener("click", () => plusSlides(1));

//carrousel des oeuvres et dots//
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

  rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlideBottom) * 100 }%)`;
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

//changement couleurs titres rubriques en hover de la rubrique3//
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

//changement couleurs titres rubriques en hover de la rubrique4//
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~messages erreurs formulaire newsletter~~~~~~~~~~~~~~~~~~~~~~~~
const form = document.querySelector('#signup');

const checkUsername = () => {

    let valid = false;

const username = document.getElementById('name');

    if (username.value=="") {
        showError(username, 'Merci de saisir un nom');
    }else {
        showSuccess(username);
        valid = true;
    }
    return valid;
};

const emailEl = document.querySelector('#email');

const checkEmail = () => {
    let valid = false;

    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Merci de saisir un email');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Cet email est invalide')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkSujet = () => {

    let valid = false;

const sujet_error = document.getElementById('sujet');

    if (sujet_error.value=="") {
        showError(sujet_error, 'Merci de saisir un sujet');
    }else {
        showSuccess(sujet_error);
        valid = true;
    }
    return valid;

};

const checkMsg = () => {

    let valid = false;


const msg_error = document.getElementById('msg');

    if (msg_error.value=="") {
        showError(msg_error, 'Merci de saisir un message');
    }else {
        showSuccess(msg_error);
        valid = true;
    }
    return valid;

};


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const success = formField.querySelector('small');
    success.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isSujetValid = checkSujet(),
        isMsgValid = checkMsg();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isSujetValid &&
        isMsgValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'sujet_error':
            checkSujet();
            break;
        case 'msg_error':
            checkMsg();
            break;
    }
}));
