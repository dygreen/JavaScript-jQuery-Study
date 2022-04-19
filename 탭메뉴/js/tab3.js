$(document).ready(function(){

  $("dd:not(:first)").css("display","none");
	// 첫번째 dd를 제외하고 나머지는 보이지 않게 할 경우
  $("dt:first").addClass("selected");
  // 첫번째 dd는 선택된 상태의 클래스 불러옴

	
  $("dl dt").click(function(){
    $("dl dt").find("+dd").hide("slow");
    $(this).find("+dd").show("slow");
    $("dt").removeClass("selected"); 
    $(this).addClass("selected");
  });
});