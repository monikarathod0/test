$(document).ready( function(){


$("#hide_").click(function(){
  $(".cocoa div:first-child p").hide();
});

$("#show_").click(function(){
  $(".cocoa div:first-child p").show();
});

$("#toggle_").click(function(){
  $(".cocoa div:nth-child(2) p").toggle();
});

$("#html_").click(function() {
  $(".cocoa div:nth-child(3) p").html("Hiya <b>Everybody!</b>");
});

});
