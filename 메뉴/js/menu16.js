$(document).ready(function(){

  // 처음 보이는 탑메뉴
  $(".gnbMenu").mouseenter(function(){ // 주메뉴 영역에 오버시
    $(this).find("li>.smenu").stop().slideDown(500);
    $(".bg_box").stop().slideDown();
    $(".top, .gnb").css({"background":"rgba(51,102,204,0.6","transition":"all 1s"});
  });
  
  $("#header").mouseleave(function(){ // 헤더영역을 나갈때
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
    $(".top, .gnb").css({"background":"transparent","transition":"all 1s"});
  });


  // 스크롤 내렸을 때 보이는 탑메뉴
  $(".gnbMenu_fix").mouseenter(function(){ // 주메뉴 영역에 오버시
    $(this).find("li>.smenu_fix").stop().slideDown(500);
    $(".bg_box_fix").stop().slideDown();
  });
  
  $("#header").mouseleave(function(){ // 헤더영역을 나갈때
    $(this).find("li>.smenu_fix").stop().slideUp();
    $(".bg_box_fix").stop().slideUp();
  });
  
  // 스크롤 내렸을 때 내려오는 탑메뉴2
  $(window).scroll(function(){

    if($(this).scrollTop() > 100){
      $(".gnb_fix").css({"margin-top":"0px", "transition":"all 1s"});
    } else {
      $(".gnb_fix").css({"margin-top":"-140px", "transition":"all 1s"});
    }

    /* if($(this).scrollTop() > 100){
      $(".gnb_fix").stop().animate({marginTop:"0px"});
    } else {
      $(".gnb_fix").stop().animate({marginTop:"-140px"},"fast");
    } */
  });


});