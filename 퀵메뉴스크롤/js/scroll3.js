$(document).ready(function(){

  $(window).scroll(function(){ //브라우저에 스크롤이 발생하는 순간부터
    let pos=$(window).scrollTop()+20; //스크린 상단 위치값을 저장
    $("#QuickBanner").stop().animate({top:pos+350},400);
  });

});