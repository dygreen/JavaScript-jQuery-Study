$(document).ready(function(){

  chk = true;
  $(".menu_toggle_btn").click(function(){

    $(this).toggleClass("menu-open");

    if(chk){
      $(".logo, .menu").css({"display":"block"});

      $(".menu_left").stop().animate({height:"100%"},200);
      $(".menu_right").stop().animate({height:"100%"},200);

      $(".menu .menu_list:nth-child(1)").animate({right:"30%"});
      $(".menu .menu_list:nth-child(2)").delay(200).animate({right:"30%"});
      $(".menu .menu_list:nth-child(3)").delay(300).animate({right:"30%"});
      $(".menu .menu_list:nth-child(4)").delay(400).animate({right:"30%"});
      $(".menu .menu_list:nth-child(5)").delay(500).animate({right:"30%"});
      $(".menu .menu_list:nth-child(6)").delay(600).animate({right:"30%"});

      chk=false;
    } else {
      $(".logo, .menu").css({"display":"none"});

      $(".menu_left").stop().animate({height:"0%"},200);
      $(".menu_right").stop().animate({height:"0%"},200);

      $(".menu .menu_list:nth-child(1)").animate({right:"-100%"});
      $(".menu .menu_list:nth-child(2)").delay(200).animate({right:"-100%"});
      $(".menu .menu_list:nth-child(3)").delay(300).animate({right:"-100%"});
      $(".menu .menu_list:nth-child(4)").delay(400).animate({right:"-100%"});
      $(".menu .menu_list:nth-child(5)").delay(500).animate({right:"-100%"});
      $(".menu .menu_list:nth-child(6)").delay(600).animate({right:"-100%"});

      chk=true;
    }
  });
});