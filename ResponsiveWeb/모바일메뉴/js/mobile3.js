$(document).ready(function(){

	 /* 메뉴버튼 */
   $(".menu_toggle_btn").click(function(){
    $(".gnb_list").stop().animate({"left":0});
    $(".back").stop(true,true).fadeIn(); //메뉴 뒤 검정배경 등장
  });


  /* 닫기버튼 */
  $(".gnb .close").click(function(){
    $(".gnb_list").stop().animate({"left":"-60%"});
    $(".back").stop(true,true).fadeOut(); //메뉴 뒤 검정배경 사라짐
  });
});