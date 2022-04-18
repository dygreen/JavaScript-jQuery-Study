$(document).ready(function(){

	let bnum = 0;
  
  // 다음보기
  $(".ban_btn .ban_right").click(function(){
    if(bnum < 6){
      /* 전체개수의 반개수만큼정도 -> 맨 앞에 있는 이미지를 기준으로 하기 때문에 보이는 폭을 고려해서 전체 개수의 반정도 설정함. */
      $(".ban ul").stop().animate({marginLeft:"-=255px"},500);
      bnum++;

      // 이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(bnum == 0){
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      } else {
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }

      if(bnum == 6){
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      } else {
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }
  });


  // 이전보기
  $(".ban_btn .ban_left").click(function(){
    if(bnum > 0){
      $(".ban ul").stop().animate({marginLeft:"+=255px"},500);
      bnum--;

      // 이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
      if(bnum == 0){
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn_on.png) no-repeat","cursor":"default"});
      } else {
        $(".ban_btn .ban_left").css({"background":"url(image/lbtn.png) no-repeat","cursor":"pointer"});
      }

      if(bnum == 6){
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn_on.png) no-repeat","cursor":"default"});
      } else {
        $(".ban_btn .ban_right").css({"background":"url(image/rbtn.png) no-repeat","cursor":"pointer"});
      }
    }
  });
});