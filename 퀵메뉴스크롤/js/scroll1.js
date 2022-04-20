$(document).ready(function(){
	
   // 퀵메뉴 이미지 오버
   $(".quick_menu>li").hover(function(){
    qnum = $(this).index()+1; //전역변수
    $(this).find(">a>img").attr({"src":"image/quick_over_0"+qnum+".png"});
  },function(){
    $(this).find(">a>img").attr({"src":"image/quick_0"+qnum+".png"});
  });

  // 따라다니는 퀵메뉴
  $(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터
    let curpos=$(window).scrollTop()+20; //스크린 상단 위치값을 저장
    $(".quick_in").stop().animate({top:curpos});
  });

  // TOP 버튼
  $(".topmove").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });

});