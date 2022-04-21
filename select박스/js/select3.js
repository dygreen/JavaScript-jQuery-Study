$(document).ready(function(){

  // fmbox1
  $(".fmbox1 h3").click(function(){
    $(this).toggleClass("mclose1");
    $(".fmbox1 div").stop().slideToggle();
  });
	
  // fmbox2
  $(".fmbox2 h3").click(function(){
    $(this).toggleClass("mclose2");
    $(".fmbox2 div").stop().slideToggle();
  });
});