$(document).ready(function(){

  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open");
    $(".allmenu").slideToggle("fast");
  });

});