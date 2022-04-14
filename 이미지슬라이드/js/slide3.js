$(document).ready(function(){

  
  /*  let simgAuto=$(".slideAuto ul");
    let simgliAuto=$(".slideAuto ul li");
    let sbtnAuto=$(".slideAuto_btn ul li");
    let snextAuto=$(".sideAuto_btn .nexAuto");
    let spreAuto=$(".sideAuto_btn .preAuto"); */
    let imgAuto_w= $(".slideAuto ul li").width();   //이미지의 가로너비
    let imgAuto_n= $(".slideAuto ul li").length;  //이미지의 총개수  
    let soldidxAuto=0;  //기존이미지
    let sindexAuto=0;  //선택된 새이미지
  
    $(".slideAuto ul li:last").prependTo(".slideAuto ul");
    //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치 1234->4123 
    $(".slideAuto ul").css({ left:-imgAuto_w}); 
    //처음에 1이 보이기위해 앞으로 가져온 4를 왼쪽으로 밀어두기
  
  
    //index번째 비주얼이미지 이동하는 함수생성
    function slideAutoImg(sindexAuto,m){ //m은 prev와 next를 판단 
  
      
      if(m==0){ //prev눌렀을때
      //이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치
        
        $(".slideAuto ul").stop(true,true).animate({
          left:"+="+imgAuto_w+"px"},600,"easeOutCubic",function(){
          $(".slideAuto ul li:last").prependTo(".slideAuto ul");        
          $(".slideAuto ul").css({ left:-imgAuto_w }); //최종목적지  
        });
        $(".slideAuto_btn ul li").eq(soldidxAuto).removeClass("activeAuto");  //기존버튼 비활성화
        $(".slideAuto_btn ul li").eq(sindexAuto).addClass("activeAuto");  //선택버튼 활성화
  
      }else{ //next눌렀을때
      //다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
  
        $(".slideAuto ul").stop(true,true).animate({
          left:"-="+imgAuto_w+"px"},600,"easeOutCubic",function(){
          $(".slideAuto ul li:first").appendTo(".slideAuto ul");        
          $(".slideAuto ul").css({ left:-imgAuto_w }); //최종목적지  
        });
        $(".slideAuto_btn ul li").eq(soldidxAuto).removeClass("activeAuto");  //기존버튼 비활성화
        $(".slideAuto_btn ul li").eq(sindexAuto).addClass("activeAuto");  //선택버튼 활성화
  
      }
  
      soldidxAuto=sindexAuto;
  
    } 
  
    //슬라이드 자동함수 생성
    function slideAuto2(){
      sindexAuto++; 
      if(sindexAuto==imgAuto_n){ //img_n은 이미지개수 4, index는 0,1,2,3
        sindexAuto=0;
      }
      slideAutoImg(sindexAuto,1);
    }
  
    auto2=setInterval(slideAuto2,4000);

  // 하단버튼 클릭
  $(".slideAuto_btn ul li").click(function(){
    clearInterval(auto2); //버튼클릭시 자동함수 해지
    $(".play").hide();
    $(".stop").show();

    sindex=$(this).index();
    slideImg(sindex);

    auto2=setInterval(slideAuto2,4000); //버튼 클릭 안할 땐 다시 자동함수 실행
  });


  // 좌우버튼 클릭
  $(".nexAuto").click(function(){
    clearInterval(auto2);
    $(".play").hide();
    $(".stop").show();

    sindexAuto++;
    if(sindexAuto>=simgAuto_n){ //마지막 이미지까지 오면 다시 첫번째 이미지부터 다시...
      sindexAuto=0;
    }

    slideAutoImg(sindexAuto,1);
    auto2=setInterval(slideAuto2,4000);
  });

  $(".preAuto").click(function(){
    clearInterval(auto2);
    $(".play").hide();
    $(".stop").show();

    sindexAuto--;
    if(sindexAuto<0){ //첫번째 이미지 오면 다시 맨 마지막 이미지부터 다시...
      sindexAuto=simgAuto_n-1; // 총개수(이미지4컷)에서 1을 뺸 3->index=3(0,1,2,3) 
    }

    slideAutoImg(sindexAuto);
    auto2=setInterval(slideAuto2,4000);
  });

  // Play, Stop 클릭
  $(".play").hide(); //처음에는 stop버튼이 보이게 하기 위해 play버튼은 숨김

  $(".stop").click(function(){
    clearInterval(auto2);
    $(".stop").hide();
    $(".play").show();
  });
  
  $(".play").click(function(){
    auto=setInterval(slideAuto2,4000);
    $(".play").hide();
    $(".stop").show();
  });
});