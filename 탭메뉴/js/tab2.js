$(document).ready(function(){

	// 첫번째 dd를 제외하고 나머지는 보이지 않게 할 경우
  $("dd:not(:first)").css("display","none");
  $("dt:first").addClass("selected");

  // 전체 다 내용 보이지 않고 탭만 보이게 할 경우
 /*  $("dd").css("display","none");
  $("dt:first").addClass("selected"); */
	
  $("dl dt").click(function(){
    $("dl dt").find("+dd").stop().slideUp(200); //기존에 보이는 것을 선택할 때 올라가게
    $(this).find("+dd").stop().slideToggle(200); 
    /* dt와 dd는 형제요소이다. 
    find("+dd")는 하위요소를 찾을 때 사용하므로 동위선택자("+"->바로 다음에 있는 것을 찾을 때)를 사용해야 함
    next("dd")를 사용하면 같은 형제요소를 찾아줌
    (find: 하위 요소를 찾는 것 / next: 형제요소를 찾는 것) */
    
    $("dt").removeClass("selected"); //기존 선택된 탭메뉴 제거
    $(this).addClass("selected"); // 새로 선택된 탭메뉴 추가
  });
});