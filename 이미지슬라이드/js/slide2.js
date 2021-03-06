$(document).ready(function(){
	
    let sUpimg=$(".slideUp ul");
    let sUpimgli=$(".slideUp ul li");
    let sUpbtn=$(".slideUp_btn ul li");
    let sUpnext=$(".sideUp_btn .nexup");
    let sUppre=$(".sideUp_btn .preup");
  
    let sUpimg_w=sUpimgli.height(); //이미지의 세로높이
    let sUpimg_n=sUpimgli.length; //이미지의 총개수
    let sUpoldidx=0; //기존이미지
    let sUpindex=0; //선택된 새이미지
  
    //index번째 비주얼이미지 이동하는 함수생성
    function slideUpImg(sUpindex){
      targetY = -(sUpindex*sUpimg_w); //움직이는 거리(너비)
  
      sUpimg.animate({top:targetY}, 600); //위에서 계산한 거리만큼 움직임
      sUpbtn.eq(sUpoldidx).removeClass("activeup"); //기존버튼 비활성화
      sUpbtn.eq(sUpindex).addClass("activeup"); //선택버튼 활성화
      sUpoldidx=sUpindex;
    }
  
    // 슬라이드 자동함수 생성
    function slideUpAuto(){
      sUpindex++;
      if(sUpindex==sUpimg_n){
        sUpindex=0;
      }
      slideUpImg(sUpindex);
    };
  
    autoUp=setInterval(slideUpAuto,4000);
  
    // 하단버튼 클릭
    sUpbtn.click(function(){
      clearInterval(autoUp); //버튼클릭시 자동함수 해지
      $(".playup").hide();
      $(".stopup").show();
  
      sUpindex=$(this).index();
      slideUpImg(sUpindex);
  
      autoUp=setInterval(slideUpAuto,4000); //버튼 클릭 안할 땐 다시 자동함수 실행
    });
  
  
    // 좌우버튼 클릭
    sUpnext.click(function(){
      clearInterval(autoUp);
      $(".playup").hide();
      $(".stopup").show();
  
      sUpindex++;
      if(sUpindex>sUpimg_n-1){ //마지막 이미지까지 오면 다시 첫번째 이미지부터 다시...
        sUpindex=0;
      }
  
      slideUpImg(sUpindex);
      autoUp=setInterval(slideUpAuto,4000);
    });
  
    sUppre.click(function(){
      clearInterval(autoUp);
      $(".playup").hide();
      $(".stopup").show();
  
      sUpindex--;
      if(sUpindex<0){ //첫번째 이미지 오면 다시 맨 마지막 이미지부터 다시...
        sUpindex=sUpimg_n-1; // 총개수(이미지4컷)에서 1을 뺸 3->index=3(0,1,2,3) 
      }
  
      slideUpImg(sUpindex);
      autoUp=setInterval(slideUpAuto,4000);
    });
  
    // Play, Stop 클릭
    $(".playup").hide(); //처음에는 stop버튼이 보이게 하기 위해 play버튼은 숨김
  
    $(".stopup").click(function(){
      clearInterval(autoUp);
      $(".stopup").hide();
      $(".playup").show();
    });
    
    $(".playup").click(function(){
      autoUp=setInterval(slideUpAuto,4000);
      $(".playup").hide();
      $(".stopup").show();
    });

});