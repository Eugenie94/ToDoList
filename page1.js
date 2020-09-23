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
      if(percentage==100){setTimeout(function(){alert("félicitations");}, 1000);}
    }
    
    
    countChecked();
    $(":checkbox").click(countChecked);
  });


 




   