
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
















