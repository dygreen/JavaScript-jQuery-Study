$(document).ready(function(){

	//이미지 전환효과 함수생성
  let showImg=0;  //기존이미지
  let nextImg=0;  //새이미지

  function changeImg(){  /*일반함수*/

    nextImg++;
    ImgCount=$(".mainvisual .visual li").length;

    if(nextImg==ImgCount){  //마지막이미지일때 다시 첫번째 이미지로  
			nextImg=0;
		}

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible");  //이미지효과준 클래스 제거(기존 이미지)
		$(".mainvisual .visual li").eq(nextImg).addClass("imgVisible"); //이미지효과준 클래스 생성(새로 나타나는 이미지)
		$(".mainvisual .btn>span").eq(showImg).removeClass("active"); //기존 버튼	
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); //선택된 버튼
			
		showImg=nextImg;

  }

  timer1=setInterval(changeImg,5000);


  //텍스트 전환효과 함수생성
  let showText=0;  //기존이미지
  let nextText=0;  //새이미지

  function changeText(){  /*일반함수*/

    nextText++;
    TextCount=$(".mainvisual .visual li").length;

    if(nextText==TextCount){  //마지막이미지일때 다시 첫번째 이미지로  
			nextText=0;
		}

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible");  
		$(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
		$(".mainvisual .btn>span").eq(showText).removeClass("active"); 
    $(".mainvisual .btn>span").eq(nextText).addClass("active"); 
			
		showText=nextText;

  }

  timer2=setInterval(changeText,5000);


  //버튼클릭시....
  $(".mainvisual .btn>span").click(function(){

    clearInterval(timer1); 
		clearInterval(timer2);

    nextImg=$(this).index();  
		nextText=$(this).index(); 

    $(".mainvisual .visual li").eq(showImg).removeClass("imgVisible"); 
		$(".mainvisual .visual li").eq(nextImg).addClass("imgVisible");
		$(".mainvisual .btn>span").eq(showImg).removeClass("active"); 	
    $(".mainvisual .btn>span").eq(nextImg).addClass("active"); 			
		showImg=nextImg;

    $(".mainvisual .visual li .Vtext").eq(showText).removeClass("textVisible");  
		$(".mainvisual .visual li .Vtext").eq(nextText).addClass("textVisible"); 
		$(".mainvisual .btn>span").eq(showText).removeClass("active"); 
    $(".mainvisual .btn>span").eq(nextText).addClass("active"); 			
		showText=nextText;
    
    timer1=setInterval(changeImg,5000);
    timer2=setInterval(changeText,5000);

  });

});