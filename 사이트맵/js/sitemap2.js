$(document).ready(function(){

  // All menu
  $(".all").click(function(){
    $(".allmenu").slideToggle("fast");
  });


  // Close button
  $(".btn_close").click(function(){
    $(".allmenu").slideUp("fast");
  });
});