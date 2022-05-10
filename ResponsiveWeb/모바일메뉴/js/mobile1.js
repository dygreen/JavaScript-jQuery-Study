$(document).ready(function(){
	
  chk = true;

  $(".gnb_list").hide(); /* display: none */

  $(".menu_toggle_btn").click(function(){
    $(this).toggleClass("mclose");
    $(".gnb_list").stop().slideToggle("fast");

    // 서브메뉴가 나올때 헤더의 배경을 투명하게...
    if(chk){
      // $("header").css({"background":"rgba(52,52,61,0.8)", "transition":"all 0.5s"});
      $("header").animate({backgroundColor: "rgba(52,52,61,0.8)"});
      chk = false;
    } else {
      // $("header").css({"background":"rgba(52,52,61,1)", "transition":"all 0.5s"});
      $("header").animate({backgroundColor: "rgba(52,52,61,1)"});
      chk = true;
    }
  });
});