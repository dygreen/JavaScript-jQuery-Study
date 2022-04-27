$(document).ready(function(){
	
  // 각 목록을 클릭했을 때....
 $(".menu").click(function(){
  $(this).next().show(); //다음 형제인 .pop을 보이게함
  $("html").css({overflowY:"hidden"}); //스크롤바 없앰
  return false;
 });

  // close버튼과 검정배경영역을 클릭할때....
 $(".close, .pop").click(function(){
   $(".pop").hide(); //.pop을 안보이게 함
   $("html").css({"overflow-y":"scroll"}); //html 스크롤 다시 보이게 함
 });


});