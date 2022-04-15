$(document).ready(function(){
	
	let img=$(".slide ul");
  let img_li=$(".slide ul li");
  let btn=$(".side_btn");
  let btn_next=$(".side_btn .nex");
  let btn_prev=$(".side_btn .pre");
  let img_wid=img_li.width(); 
  let img_num=img_li.length; 
  let img_old=0;
  let img_new=0; 

  $(".slide ul li:last").prependTo(".slide ul");	
  $(".slide ul").css({left: -img_wid});

  function slideImg(img_new, m){
    if (m == 0) { 	
      $(".slide ul").stop(true, true).animate({
        left: "+=" + img_wid + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:last").prependTo(".slide ul");
        $(".slide ul").css({
          left: -img_wid
        });
      });
    } else { 
      $(".slide ul").stop(true, true).animate({
        left: "-=" + img_wid + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:first").appendTo(".slide ul");
        $(".slide ul").css({
          left: -img_wid
        });
      });

    }
    img_old = img_new;
  }

  // 슬라이드 자동함수
  function slideAuto(){
    img_new++;
    if(img_new==img_num){
      img_new=0;
    }
    slideImg(img_new, 1);
  };

  auto=setInterval(slideAuto,4000);

  // 좌우버튼 클릭
  // 다음버튼
  btn_next.click(function(){
    clearInterval(auto);
    img_new++;
    if(img_new >= img_num){ 
      img_new=0;
    }

    slideImg(img_new, 1);
    auto=setInterval(slideAuto,4000);
  });

  // 이전버튼
  btn_prev.click(function(){
    clearInterval(auto);
    img_new--;
    if(img_new < 0){ 
      img_new=img_num-1; 
    }
    slideImg(img_new, 0);
    auto=setInterval(slideAuto,4000);
  });
});