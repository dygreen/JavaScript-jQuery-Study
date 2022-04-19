$(document).ready(function(){

  $(".tab li").click(function(){
    thval = $(this).index();
    thnum = +70*thval; //세로폭 70px씩 증가됨
  
    $(".tab-header .tab-highlight").animate({top:thnum});
    $(".tab li a").css("color","#000"); //탭의 모든 글자색
    $(this).find(">a").css("color", "#fff"); //선택된 탭의 글자색
  
    $(".panel li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find(">a").attr("href")).fadeIn(); //새로 선택한 내용 href 연결된 내용 보여주기
  });

});