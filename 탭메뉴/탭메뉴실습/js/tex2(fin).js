$(document).ready(function(){

  $("dd:not(:first)").css("display","none");
	//초기상태를 만들어줌. 첫번째 dd를 제외하고 나머지는 보이지않게
	$("dt:first").addClass("selected"); 
	//첫번째 dd는 선택된상태의 클래스 불러옴

	$("dl dt").click(function(){
		$("dd").slideUp("slow"); //현재 열려있는 dd 올라감
		$(this).find("+dd").slideDown("slow"); //선택한 dt의 바로 다음 dd 내려감
		$("dt").removeClass("selected");//기존선택된 탭메뉴 제거
		$(this).addClass("selected");//새로 선택된 탭메뉴 추가
	});


	//탭메뉴 오버 
	$(".study_text dl dt").hover(function(){
		$(this).addClass("over");
	},function(){	
		$(this).removeClass("over");
	});


	//+버튼 이미지오버
	$(".study_text img").hover(function(){
		$(this).attr({"src":"image/study_btn_on.png"});
	},function(){
		$(this).attr({"src":"image/study_btn.png"});	
	});

});