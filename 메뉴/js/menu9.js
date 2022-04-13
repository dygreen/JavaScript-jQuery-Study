$(document).ready(function(){

  // 주메뉴 오버시 서브박스 배경색 나오게 함
  $(".topmenu>li").hover(function(){
    $(this).find(">ul").css("background","#e6ecf8");
  }, function(){
    $(this).find(">ul").css("background","none");
  });

  // 주메뉴 오버시 서브박스 내리고 올리고...
  $(".top_nav").mouseenter(function(){ // 주메뉴 영역에 오버시
    $(this).find(".topmenu>li>.smenu").stop().slideDown(500);
    $(".bg_box").stop().slideDown();
  });
  
  $("#header").mouseleave(function(){ // 헤더영역을 나갈때
    $(this).find(".topmenu>li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });
			

  // 주메뉴 오버시 서브 bgbox의 왼쪽이미지 변경
  $(".topmenu>li").hover(function(){
    old = 0; //기존 보이는 이미지
    val = $(this).index(); //새로 바뀌는 이미지

    $(".topimg li").eq(old).stop(true,true).hide("slow"); //기존이미지는 숨기기
    $(".topimg li").eq(val).stop(true,true).show("slow"); //새로 선택된 이미지는 보이기
    old=val; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장
  }, function(){
    $(".topimg li").stop(true,true).hide();
  });

});