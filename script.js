const date1 = document.querySelector('.date1')
date1.onclick = function () {
    show('.text1');
}

const date2 = document.querySelector('.date2')
date2.onclick = function () {
    show('.text2');
}

const date3 = document.querySelector('.date3')
date3.onclick = function () {
    show('.text3');
}

const date4 = document.querySelector('.date4')
date4.onclick = function () {
    show('.text4');
}

function show(bio) 
	{
		var text = document.querySelector(bio);
 
        if (text.style.opacity == '1'){
            text.style.opacity = ('0');
        } else {
            text.style.opacity = ('1');
        }
        
	}
 
