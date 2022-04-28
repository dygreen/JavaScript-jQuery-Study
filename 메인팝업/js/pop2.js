// 팝업창 띄우기 함수생성
function openPopup(){
  $("#popup").fadeIn(function(){ //검정배경 나타남
    $("#popup .body").css("display","block");// 팝업창내용 보여짐 
  });
}


$(document).ready(function(){
	
  $(".btn_close").click(function(){ //close눌렀을 때
    $("#popup").hide(); //popup 안보이게 함
  })

});	 