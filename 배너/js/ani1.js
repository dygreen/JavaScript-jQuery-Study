$(document).ready(function(){

	// box1) 아래에서 위로...
  $(".box1").hover(function(){
    $(".box1 li:first-child").stop().animate({marginTop:"-176px"},250);
  },function(){
    $(".box1 li:first-child").stop().animate({marginTop:"0px"},250);
  });
  

	// box2) 위에서 아래로...
  $(".box2").hover(function(){
    $(".box2 li:first-child").stop().animate({marginTop:"0px"},250);
  },function(){
    $(".box2 li:first-child").stop().animate({marginTop:"-176px"},250);
  });
  

	// box3) 오른쪽에서 왼쪽으로...
  $(".box3").hover(function(){
    $(".box3 li:first-child").stop().animate({marginLeft:"-176px"},250);
  },function(){
    $(".box3 li:first-child").stop().animate({marginLeft:"0px"},250);
  });
  
  
	// box4) 왼쪽에서 오른쪽으로...
  $(".box4").hover(function(){
    $(".box4 li:first-child").stop().animate({marginLeft:"0px"},250);
  },function(){
    $(".box4 li:first-child").stop().animate({marginLeft:"-176px"},250);
  });


	// box5) 아래에서 위로 반만큼 투명창 올라오게...
	$(".box5 ul li").hover(function(){
    $(this).find(".text").stop().animate({marginTop:"-105px"},250);
  },function(){
    $(this).find(".text").stop().animate({marginTop:"0px"},250);
  });
});