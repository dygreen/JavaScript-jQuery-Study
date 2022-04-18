$(document).ready(function(){

  let nold = 0;

  // 다음보기
  $(".nb_right").click(function(){
    val = nold+1;
    nnum = $(".news_in li").length; /* 이미지 li의 개수선언 */

    if(val < nnum){ //이미지 전체개수보다 적으면 수행
      $(".news_in li").eq(nold).hide();
      $(".news_in li").eq(val).show();
      nold = val;
    }
  });


  // 이전보기
  $(".nb_left").click(function(){
    val = nold-1;
    nnum = $(".news_in li").length; /* 이미지 li의 개수선언 */

    if(val >= 0){ //이미지 전체개수보다 적으면 수행
      $(".news_in li").eq(nold).hide();
      $(".news_in li").eq(val).show();
      nold = val;
    }
  });
});