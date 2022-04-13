$(document).ready(function(){

 /*  $(".gnbMenu>li").hover(function(){
    $(this).find(">ul").stop().slideDown();

    // 배경 나오기
    $(".bg_box").stop().slideDown();
  }, function(){
    $(this).find(">ul").stop().slideUp();

    // 배경 들어가기
    $(".bg_box").stop().slideUp();
  }); */


  // 마우스 오버와 아웃의 영역을 다르게 할 때...
  $(".gnbMenu>li").mouseenter(function(){
    $(".gnbMenu>li ul").hide(); //기존에 보여지는 서브메뉴 안보이게...
    $(this).find(">ul").stop().slideDown();
    $(".bg_box").stop().slideDown(); // 배경 나오기
  });

  $("header").mouseleave(function(){
    $(".gnbMenu>li ul").hide();
    $(this).find(">ul").stop().slideUp();
    $(".bg_box").stop().slideUp(); // 배경 들어가기
  });

});