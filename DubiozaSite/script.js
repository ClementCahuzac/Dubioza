
/*
function myFunction() {
  var x = document.getElementById("menuBurger");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

*/



$(document).ready(function(){
  $("#menuBurgerClick").click(function(){
    $("#menuBurger").toggle();
  });
});


$(document).ready(function(){
  $("#cross").click(function(){
    $("#menuBurger").toggle();
  });
});












/*

$("#onabout").one("mouseover", function() {
  $("#onabout ul").addClass('permahover');
});
*/

/*
après le hover sur le logo, maintenir l'affichage du h1
cf : 
https://jsfiddle.net/jlratwil/w83BW/

*/






// changer l'icone menu entre croix et menu burger

function changeImage() {
  var image = document.getElementById('imageMenu1');
  if (image.src.match("/DubiozaSite/cancel")) {
      image.src = "../DubiozaSite/menu.png";
  }
  else {
      image.src = "/DubiozaSite/cancel.png";
  }
}





// diminuer taille header on scroll 

window.onscroll = function() {functionScrollTop()};

function functionScrollTop() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("logo").className = "headeronscroll"
    document.getElementById("titreScroll").className = "titreScroll";
  } else {
    document.getElementById("logo").className = ""
    document.getElementById("titreScroll").className = "";
  }
}




// change size smoothly on scroll
// installer JQuery / AJAX pour le faire fonctionner
// https://stackoverflow.com/questions/60431903/how-to-make-image-size-change-smoothly-on-scroll

$(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('logo').addClass('fixed-header');
      }
      else{
          $('logo').removeClass('fixed-header');
      }
  });
});


// ajouter dynamiquement du contenu html
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'snippets/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})



// pop up on load 



