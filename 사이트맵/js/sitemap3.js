$(document).ready(function(){

  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("mclose");
    $(".allmenu").slideToggle("fast");
  });

});