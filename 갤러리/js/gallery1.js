$(document).ready(function(){

  // 방법3......
  $(".thumbs a").click(function(){
    let path = $(this).attr("href");
    $("#largeImg>img").attr({"src":path});
    return false;
  })


  // 방법2......중요!
  /* $(".thumbs a").click(function(){
    let num = $(this).index(); //0부터 시작하므로 +1할 필요 없음(0,1,2,3)
    $("#largeImg>img").attr({"src":'image/bg'+num+'.jpg'});
    return false;
  }) */



  // 방법1......
 /*  $(".thumbs a").eq(0).click(function(){
    // eq(0)->a태그의 1번째를 클릭하면...
    $("#largeImg>img").attr({"src":"image/bg0.jpg"});
    return false;
  });
  $(".thumbs a").eq(1).click(function(){
    $("#largeImg>img").attr({"src":"image/bg1.jpg"});
    return false;
  });
  $(".thumbs a").eq(2).click(function(){
    $("#largeImg>img").attr({"src":"image/bg2.jpg"});
    return false;
  });
  $(".thumbs a").eq(3).click(function(){
    $("#largeImg>img").attr({"src":"image/bg3.jpg"});
    return false;
  }); */
  
  // for (let i = 0; i < $(".thumbs a").length; i++){
  //   $(".thumbs a").eq(i).click(function(){
  //     $("#largeImg>img").attr({"src":'image/bg'+i+'.jpg'});
  //     return false;
  //   });
  // }

}); 