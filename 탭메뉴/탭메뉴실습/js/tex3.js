$(document).ready(function(){
	
  $("dl dt").click(function(){
    $("dl dt").find("+dd").hide("slow");
    $(this).find("+dd").show("slow");
    $("dt").removeClass("selected"); 
    $(this).addClass("selected");
  });

  // 탭메뉴 dt를 클릭시 바뀌는 dl의 전체배경이미지
  $("dl .tab1").click(function(){
    $("dl").css({"background":"url(image/ban_img1.jpg) no-repeat center top","transition":"all 1s"});
  });
  $("dl .tab2").click(function(){
    $("dl").css({"background":"url(image/ban_img2.jpg) no-repeat center top","transition":"all 1s"});
  });
  $("dl .tab3").click(function(){
    $("dl").css({"background":"url(image/ban_img3.jpg) no-repeat center top","transition":"all 1s"});
  });
  $("dl .tab4").click(function(){
    $("dl").css({"background":"url(image/ban_img4.jpg) no-repeat center top","transition":"all 1s"});
  });
  $("dl .tab5").click(function(){
    $("dl").css({"background":"url(image/ban_img5.jpg) no-repeat center top","transition":"all 1s"});
  });


});

