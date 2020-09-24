/* SHILF ALF F indent JS */

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

    var percentage = parseInt(((checked / count) * 100), 10);
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


    if (percentage == 100) {
      setTimeout(
        function () {
          alert("Félicitations !");
        }, 1000
      );
    }/* si le pourcentage arrive a 100% un pop up felicitation apparait au bout de 1s*/
  }


  countChecked();
  $(":checkbox").click(countChecked);   /* sans ca ni le pourcent ni la progression apparait*/
});




/* JS POUR LE FORMULAIRE AU DESSUS DES TACHES */


$(function () {
  // function and name of the form

  $("form[name='registration']").validate({

    rules: {
      // names on the left: values
      // names on the right: rules
      civilite: "required",
      name: {
        required: true,
        minlength: 2
      },
      sexe: "required",
      telephone: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      email: {
        required: true,
        email: true
      },
    },
    // error messages
    messages: {
      name: " Veuillez saisir vos nom et prénoms.",
      telephone: {
        required: " Veuillez saisir votre téléphone.",
        minlength: " Votre téléphone doit afficher 10 chiffres.",
        maxlength: " Votre téléphone doit afficher 10 chiffres.",
      },

    },

    submitHandler: function (form) {
      form.submit("/index.html");

    }
  });
});
