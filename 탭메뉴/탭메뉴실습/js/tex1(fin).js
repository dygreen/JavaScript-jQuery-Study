$(document).ready(function(){

  $(".panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기
	
	$(".tab>li").click(function(){
		$(".tab>li").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected"); //새로 선택된 selected 클래스 생성
		$(".panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).find("a").attr("href")).hide().fadeIn();//새로 선택된 내용 href 연결된내용 보여주기
	});
	
});