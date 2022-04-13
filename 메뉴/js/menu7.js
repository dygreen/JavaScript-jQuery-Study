$(document).ready(function(){

  $(".gnbMenu").mouseenter(function(){ // 주메뉴 영역에 오버시
    $(this).find("li>.smenu").stop().slideDown(500);
    $(".bg_box").stop().slideDown();
  });
  
  $("header").mouseleave(function(){ // 헤더영역을 나갈때
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });
  
});