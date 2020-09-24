$(document).ready(function() {    /*permet d'augmenter ma progress barre lorsque l'on coche */
  
    // get box count
    var count = 0;   
    var checked = 0;
    function countBoxes() {          /*ca compte le nombre de box pour definir par la suite les pourcentage a divisé*/
      count = $("input[type='checkbox']").length;
      console.log(count);
    }
    
    countBoxes();   /*on rappelle la fonction */
    $(":checkbox").click(countBoxes);
    
    // count checks
    
    function countChecked() {       /*fonction qui permet de compté les cases en fonction du pourcentage qui arrive et l'affiche ensuite*/
      checked = $("input:checked").length;
      
      var percentage = parseInt(((checked / count) * 100),10);
      $(".progressbar-bar").progressbar({
              value: percentage
          });
      $(".progressbar-label").text(percentage + "%"); /*ce qui fait que le texte des pourcentage apparait*/
      var elem = document.getElementById("label");    /*permet que la couleur de progress augmente avec la progression*/
      elem.style.width = percentage + "%";    /*aussi*/



          // if(percentage<25){              ce qui permet d'avoir un trio de couleur au fur et a mesure que le pourcentage augmente
          //   elem.style.backgroundColor = "red"
          // }else{
          //   if(percentage<50){
          //     elem.style.backgroundColor = "range"
          //   }else{
          //     elem.style.backgroundColor = "green"
          //   }
          // }

      if(percentage==100){setTimeout(function(){alert("félicitations");}, 1000);}  /* si le pourcentage arrive a 100% un pop up felicitation apparait au bout de 1s*/
    }
    
    countChecked();
    $(":checkbox").click(countChecked);   /* sans ca ni le pourcent ni la progression apparait*/
  });


 




   