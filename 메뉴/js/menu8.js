$(document).ready(function(){

  // 주메뉴 오버시 서브박스 배경색 나오게 함
  $(".topmenu>li").hover(function(){
    $(this).find(">ul").css("background","#f4f3f3");
  }, function(){
    $(this).find(">ul").css("background","none");
  });


  $(".top_nav").mouseenter(function(){ // 주메뉴 영역에 오버시
    $(this).find(".topmenu>li>.smenu").stop().slideDown(500);
    $(".bg_box").stop().slideDown();
  });
  
  $("header").mouseleave(function(){ // 헤더영역을 나갈때
    $(this).find(".topmenu>li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

});