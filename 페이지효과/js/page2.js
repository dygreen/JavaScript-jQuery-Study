// html에서 onload로 불러들이는 함수생성
function openIntroPage(){
  $(".logo, .menu").css({"display":"block"});

  $(".menu_left").stop().animate({height:"100%"},200);
  $(".menu_right").stop().animate({height:"100%"},200);

  $(".menu .menu_list:nth-child(1)").animate({right:"30%"});
  $(".menu .menu_list:nth-child(2)").delay(200).animate({right:"30%"});
  $(".menu .menu_list:nth-child(3)").delay(300).animate({right:"30%"});
  $(".menu .menu_list:nth-child(4)").delay(400).animate({right:"30%"});
  $(".menu .menu_list:nth-child(5)").delay(500).animate({right:"30%"});
  $(".menu .menu_list:nth-child(6)").delay(600).animate({right:"30%"});
}


$(document).ready(function(){

  /* 햄버거 버튼으로 닫히게 할 경우 
  $(".menu_toggle_btn").click(function(){

    $(this).toggleClass("menu-open");
    $(".logo, .menu, .menu_toggle_btn").css({"display":"none"});

    $(".menu_left").stop().animate({height:"0%"},200);
    $(".menu_right").stop().animate({height:"0%"},200);

    $(".menu .menu_list:nth-child(1)").animate({right:"-100%"});
    $(".menu .menu_list:nth-child(2)").delay(200).animate({right:"-100%"});
    $(".menu .menu_list:nth-child(3)").delay(300).animate({right:"-100%"});
    $(".menu .menu_list:nth-child(4)").delay(400).animate({right:"-100%"});
    $(".menu .menu_list:nth-child(5)").delay(500).animate({right:"-100%"});
    $(".menu .menu_list:nth-child(6)").delay(600).animate({right:"-100%"});
  }); */

  // 메뉴를 클릭했을 때 닫히게 하는 경우
  $(".menu_right .menu li").click(function(){

    $(".logo, .menu").css({"display":"none"});

    $(".menu_left").stop().animate({height:"0%"},200);
    $(".menu_right").stop().animate({height:"0%"},200);

    return false;
  });
});