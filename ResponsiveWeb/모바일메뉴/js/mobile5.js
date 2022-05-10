$(document).ready(function(){

  $(".gnb").hide();

  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open");
    $(".gnb").stop(true,true).slideToggle("fast");
  });
	
});