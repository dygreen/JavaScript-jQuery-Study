$(document).ready(function(){
	
  $(".menu>li").mouseenter(function(){
    $(".sub").hide(); //기존에 보여지는 서브메뉴 안보이게...
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown(); // 배경 나오기
  });

  $("nav").mouseleave(function(){
    $(".sub").hide();
    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp(); // 배경 들어가기
  });
	
});