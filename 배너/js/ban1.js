$(document).ready(function(){

	// 다음보기
  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate({marginLeft:"-=255px"},1000,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //첫번째 이미지 맨 뒤로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });
  });
  
  
  // 이전보기
	$(".ban_btn .ban_left").click(function(){
    $(".ban ul").stop().animate({marginLeft:"+=255px"},1000,function(){
      $(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지 맨 앞으로 이동
      $(this).css({marginLeft:"0px"}); //최종목적지
    });
  });
});