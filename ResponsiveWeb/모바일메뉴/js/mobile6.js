$(document).ready(function(){
	
  $(".gnb").css({"right":"-250px"}); /* 처음위치 */
	
  bb = true;
  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("menu-open");

    if(bb){
      $(".gnb").stop(true,true).animate({"margin-right":"250px"},500,function(){
        bb = false;
      });
    } else {
      $(".gnb").stop(true,true).animate({"margin-right":"0px"},500,function(){
        bb = true;
      });
    }
  })
});