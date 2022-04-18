$(document).ready(function(){

  // 썸네일,큰이미지,설명텍스트가 바뀌는 함수 만들기
  let goldidx = 0; //기존이미지
  let gidx = 0; //선택되는이미지

  function galleryImg(gidx){ // gidx는 선택되는 이미지
    if(goldidx != gidx){ //기존의 이미지와 선택된 이미지가 다를때...
      $(".thumbs li").eq(goldidx).css({"opacity":0.3}); //기존의 썸네일 흐리게
      $(".thumbs li").eq(gidx).css({"opacity":1}); //선택된 썸네일 선명하게
      $(".largeImg li").eq(goldidx).stop().fadeOut(300); // 기존 이미지 사라짐
      $(".largeImg li").eq(gidx).stop().fadeIn(300); // 선택된 이미지 나타남
      $(".imgText li").eq(goldidx).stop().fadeOut(300); //기존 텍스트 사라짐
      $(".imgText li").eq(gidx).stop().fadeIn(300); //선택된 텍스트 나타남
    }
    goldidx=gidx; //선택된 이미지는 다시 기존 이미지로 저장
  }


  // 썸네일버튼 클릭시...
  $(".thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx);
  });


  // 이전버튼 클릭시...
  $(".left_btn").click(function(){
    gidx--;
    if(gidx < 0){ //선택된 이미지가 0일때 다시 맨뒤부터 다시 시작
      gidx = 9;
    }
    galleryImg(gidx);
  });

  // 다음버튼 클릭시...
  $(".right_btn").click(function(){
    gidx++;
    if(gidx > 9){ //선택된 이미지가 마지막일때 다시 맨처음부터 다시 시작
      gidx = 0;
    }
    galleryImg(gidx);
  });
}); 
