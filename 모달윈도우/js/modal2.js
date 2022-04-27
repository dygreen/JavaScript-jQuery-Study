$(document).ready(function(){
	
	// 리스트 이미지 클릭시...
  $(".graphic_list>li").click(function(){
     g_pop=$(this).index();

     $(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
     $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
    $("#popup").stop().fadeIn(); //검정배경
  });

  // 오른쪽 상단 버튼-다음보기
  $(".right_btn").click(function(){
    if(g_pop < 14){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop++;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }
  });

  // 왼쪽 상단 버튼-이전보기
  $(".left_btn").click(function(){
    if(g_pop > 0){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;

      $(".g_page span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }
  });

  // 오른쪽 상단 버튼-닫기
  $(".btn_close").click(function(){
    $("html").css({overflowY:"scroll"});
    $("#popup").stop().fadeOut();
    $(".pop>li").stop().hide();
  });
});