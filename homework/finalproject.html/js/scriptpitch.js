$(document).ready( function(){

$('.fancyTitle').lettering('lines');

$("footer").mouseover(function(){
  $("footer .Script h4").html("<b> CLICK THE LINK BELOW! </b>");
});

$("footer").mouseleave(function(){
  $("footer .Script h4").html("<b>I HOPE YOU ENJOYED IT!</b>");
});


});
