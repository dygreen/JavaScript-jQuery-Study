$(document).ready(function(){

	$(".gnb_list").css({"left":"-60%"}); /* 처음위치 */

  /* 메뉴버튼 */
  $(".menu_toggle_btn").click(function(){
    $(".gnb_list").stop().animate({"left":0});
  });


  /* 닫기버튼 */
  $(".gnb .close").click(function(){
    $(".gnb_list").stop().animate({"left":"-60%"});
  });

});