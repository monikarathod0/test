$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide();
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show();
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css("background-color", "lightblue");
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------

// Here goes your jQuery :

$("#hide_").click(function(){
  $(".smallGridBug div:first-child p").hide();
});

$("#show_").click(function(){
  $(".smallGridBug div:first-child p").show();
});

$("#toggle_").click( function(){
  $(".smallGridBug div:nth-child(2) p").toggle();
});

$("#html_").click(function() {
  $(".smallGridBug div:nth-child(3) p").html("Hiya <b>Everybody!</b>");
});

$("#css_").click(function(){
  $(".box2").css("background-color", "yellow");
});

});
