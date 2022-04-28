$(document).ready(function(){
	
  $(".btn_close").click(function(){
    $(this).stop().animate({marginTop:"-132px"},500); //close버튼
    $(".pop_box").stop().animate({marginTop:"-132px"},500); //popup내용
    $(".btn_dayclose").stop().animate({marginTop:"-132px"},500); //오늘하루열지않기
    $("#wrap").stop().animate({marginTop:"0"},500); //컨텐츠
  });
				
});
