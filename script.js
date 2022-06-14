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