$(document).ready(function(){

  // 퀵메뉴 이미지 오버
  $(".quick_icon>li").hover(function(){
    qnum = $(this).index()+1; //전역변수
    $(this).find(">a>img").attr({"src":"image/rquick_on_0"+qnum+".png"});
  },function(){
    $(this).find(">a>img").attr({"src":"image/rquick_0"+qnum+".png"});
  });

  // animate부분(close/open)
  qtchk = true;
  
  $(".quick_toggle").click(function(){

    $(this).toggleClass("quick_open");

    if(qtchk){
      $(this).stop().animate({marginBottom:"370px"},500); // close버튼 오른쪽 이동
      $(".quickmenu").stop(true,true).animate({marginBottom: "370px"},500); // 퀵메뉴 오른쪽으로 이동
      qtchk = false;
    } else {
      $(this).stop().animate({marginBottom:"0px"},500); // close버튼 원래 위치로 이동
      $(".quickmenu").stop(true,true).animate({marginBottom: "0px"},500); // 퀵메뉴 원래 위치로 이동
      qtchk = true;
    }
  });
});