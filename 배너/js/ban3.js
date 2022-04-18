$(document).ready(function(){

  // 자동 슬라이드 함수 생성
  function bannerAuto(){

    $(".ban ul").stop().animate({marginLeft:"-=255px"},1000,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨 뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });
  }
  
  bauto = setInterval(bannerAuto,4000);


  	// 다음보기
    $(".ban_btn .ban_right").click(function(){

      clearInterval(bauto);

      $(".ban ul").stop().animate({marginLeft:"-=255px"},1000,function(){
        $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨 뒤로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });

      bauto = setInterval(bannerAuto,4000);
    });
    
    
    // 이전보기
    $(".ban_btn .ban_left").click(function(){

      clearInterval(bauto);

      $(".ban ul").stop().animate({marginLeft:"+=255px"},1000,function(){
        $(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨 앞으로 이동
        $(this).css({marginLeft:"0px"}); //최종목적지
      });

      bauto = setInterval(bannerAuto,4000);
    });


    // 마우스를 올리면 슬라이드 자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행...
    $(".ban").hover(function(){
      clearInterval(bauto);
    },function(){
      bauto=setInterval(bannerAuto,4000);
    });
});