$(document).ready(function(){

  $(".footmenu1 h4 span").click(function(){
    $(this).toggleClass("arrow");
    $(".footmenu1 .fbox1").stop().slideToggle();
  });
	
});