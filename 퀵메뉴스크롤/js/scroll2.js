$(document).ready(function(){
	
  //스크롤바가 이동될 때마다 스크롤위치값 나타내기
  $(window).scroll(function(){ 
    $("#txt1").text($(this).scrollTop());
  });


  // 탑버튼______________________________

  $(".top_btn").hide();  //탑버튼 숨기기

  //스크롤이 350이상일때  TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
  $(window).scroll(function(){

      if($(this).scrollTop()>350){
        $(".top_btn").fadeIn();
      }else{
        $(".top_btn").fadeOut();
      }

  });

  //TOP버튼 클릭시 맨위로
  $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });



  // 오른쪽 퀵메뉴______________________________

  $("#scroll_btn").hide();  //퀵메뉴 숨기기

  //스크롤이 350이상일때  TOP버튼 보이게 하고 스크롤을 올리면 다시 숨김
  $(window).scroll(function(){

      if($(this).scrollTop()>350){
        $("#scroll_btn").fadeIn();
      }else{
        $("#scroll_btn").fadeOut();
      }

  });

  //스크롤 위치에 따라 오른쪽 퀴메뉴 오버되게 함
  $(window).scroll(function(){

    //scroll 350~799
    if($(this).scrollTop()>=350 && $(this).scrollTop()<800){
      $("#scroll_btn ul .scb1").css({"width":"110px","border-radius":"25px","transition":"all 0.3s"});
      $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"inline-block"});
    }else{
      $("#scroll_btn ul .scb1").css({"width":"35px","border-radius":"50%"});
      $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"none"});
    }

    //scroll 800~1599
    if($(this).scrollTop()>=800 && $(this).scrollTop()<1600){
      $("#scroll_btn ul .scb2").css({"width":"110px","border-radius":"25px","transition":"all 0.3s"});
      $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"inline-block"});
    }else{
      $("#scroll_btn ul .scb2").css({"width":"35px","border-radius":"50%"});
      $("#scroll_btn ul .scb2 a .scroll_hover").css({"display":"none"});
    }

    //scroll 1600~2999
    if($(this).scrollTop()>=1600 && $(this).scrollTop()<3000){
      $("#scroll_btn ul .scb3").css({"width":"110px","border-radius":"25px","transition":"all 0.3s"});
      $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"inline-block"});
    }else{
      $("#scroll_btn ul .scb3").css({"width":"35px","border-radius":"50%"});
      $("#scroll_btn ul .scb3 a .scroll_hover").css({"display":"none"});
    }


  });

  //오른쪽 퀵메뉴가 보일때 클릭시 각 콘텐츠의 위치로 이동
  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"250px"},700);
  });

  $("#scroll_btn ul .scb2").click(function(){
		$("body,html").animate({scrollTop:"1000px"},700);
	});
	
	$("#scroll_btn ul .scb3").click(function(){
		$("body,html").animate({scrollTop:"1800px"},700);
	});
	
});