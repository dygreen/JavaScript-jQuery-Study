$(document).ready(function(){

  $(".gnbMenu>li").hover(function(){
    // 화살표 올리기
    $(this).find("a>span").css({"opacity":"1"}).animate({top:"44px"});
    
    $(this).find(">ul").stop().slideDown();
  }, function(){
    // 화살표 내리기
    $(this).find("a>span").css({"opacity":"0"}).animate({top:"50px"});

    $(this).find(">ul").stop().slideUp();
  });

});