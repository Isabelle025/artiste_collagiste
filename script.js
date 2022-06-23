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

/*partie pour la gallerie des oeuvres*/
        const panels=document.querySelectorAll('.panel')
        panels.forEach((panel)=>{//loop on every cards
            console.log(panel)
          panel.addEventListener("click",()=>{//add a click event
            removeActiveClasses()
            panel.classList.add("active");//when i click i add a class style 'active '
          })//
        })
        function removeActiveClasses(){
            panels.forEach((panel)=>{//when i click in other cards i remove active class on the others panel
                panel.classList.remove("active")
            })
        }

// Script Goes Here...
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlide++;

    if (currentSlide > slidesLength - 1) {
      currentSlide = 0;
    }
  } else if (btn == "left") {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlide) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

setInterval(autoChangeSlide, 3000);

function autoChangeSlide() {

  currentSlide++;

  if (currentSlide > slidesLength - 1) {
    currentSlide = 0;
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlide) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}
