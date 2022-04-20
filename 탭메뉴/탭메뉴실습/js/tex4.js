$(document).ready(function(){

	$(".panel>li:not(:first)").hide(); //첫번째를 제외한 나머지 내용 숨기기

  $(".tab>li").click(function(){
    for(i=0; i<6; i++){
      $(".tab li").eq(i).find(">a>img").attr({"src":"image/tab"+i+".png"}); //선택되지 않은 이미지는 회색이미지로...
    }

    inum = $(this).index();
    $(this).find("a img").attr({"src":"image/tabon"+inum+".png"});
    
    $(".i1").removeClass("active1"); //css에서 적용된 1번째 현재위치활성화 해지

    $(".panel>li").hide(); //기존의 보여진 내용 숨기기
    $($(this).find("a").attr("href")).show(); //새로 선택된 내용 href 연결된 내용 보여주기
  });


});