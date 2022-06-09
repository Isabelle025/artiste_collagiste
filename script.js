//function changeDivImage()
   // {
        //var imgPath = new String();
        //imgPath = document.getElementById("div1").style.backgroundImage;

        //if(imgPath == "url(images/background.png)" || imgPath == "")
        //{
           // document.getElementById("div1").style.backgroundImage = "url(images/background.png)";
        //}
        //else
        //{
           // document.getElementById("div1").style.backgroundImage = "url(images/menu.jpg)";
        //}
    //}

    
    var els = document.getElementsByClassName("menu");

    for (var i = 0; i < els.length; i++) {
      // console.log(els[i].id);
      els[i].addEventListener("click", function (event) {
        changeBackground(this.id);
      });
    }
    
    function changeBackground(id) {
      // document.querySelectorAll('[id^="background"]');
      // var classes = console.log(document.querySelector("body").classList.length);
      // clear all background classes from body
      const cls = [
        "background.png",
        "affiche.jpg"
      ];
      document.querySelector("body").classList.remove(...cls);
    
      switch (id) {
        case "books":
          document.querySelector("body").classList.add("background-image-books");
          break;
        case "strawberries":
          document
            .querySelector("body")
            .classList.add("background-image-strawberries");
          break;
        case "sea":
          document.querySelector("body").classList.add("background-image-sea");
          break;
        default:
          console.log("switch caught nothing");
          break;
      }
    } 