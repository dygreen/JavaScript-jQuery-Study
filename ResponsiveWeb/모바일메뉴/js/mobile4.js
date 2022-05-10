$(document).ready(function(){
	
  $(".gnb").hide(); /* display: none */

  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open");
    $(".gnb").stop(true,true).slideToggle("fast");
  });

});