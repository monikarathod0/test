$(document).ready( function(){


$("#hide_").click(function(){
  $(".cocoa div:first-child p").hide();
});

$("#show_").click(function(){
  $(".cocoa div:first-child p").show();
});

$("#toggle_").click(function(){
  $(".sidebar").toggle();
});

$("#html_").click(function() {
  $(".title").html("Yummy Recipe!");
});

$("#css_").click(function(){
  $(".sidebar").css("background-color", "lightblue");
});

$("footer").mouseover(function(){
  $("footer").html("<b>PREP: 10 MINS — COOK: 20 MINS — TOTAL: 30 MINS</b>");
});

$("footer").mouseleave(function(){
  $("footer").html("<b>HOVER OVER ME AGAIN!</b>");
});

});
