$(document).ready(function() {    /*permet d'augmenter ma progress barre lorsque l'on coche */
  
    // get box count
    var count = 0;   
    var checked = 0;
    function countBoxes() { 
      count = $("input[type='checkbox']").length;
      console.log(count);
    }
    
    countBoxes();
    $(":checkbox").click(countBoxes);
    
    // count checks
    
    function countChecked() {
      checked = $("input:checked").length;
      
      var percentage = parseInt(((checked / count) * 100),10);
      $(".progressbar-bar").progressbar({
              value: percentage
          });
      $(".progressbar-label").text(percentage + "%"); 
      var elem = document.getElementById("mam");
      elem.style.width = percentage + "%";

          // if(percentage<25){
          //   elem.style.backgroundColor = "red"
          // }else{
          //   if(percentage<50){
          //     elem.style.backgroundColor = "orange"
          //   }else{
          //     elem.style.backgroundColor = "green"
          //   }
          // }

      if(percentage==100){setTimeout(function(){alert("félicitations");}, 1000);}  /* si le pourcentage arrive a 100% un pop up felicitation apparait au bout de 1s*/
    }
    
    
    countChecked();
    $(":checkbox").click(countChecked);
  });


 




   