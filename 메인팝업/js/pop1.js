$(document).ready(function(){
	
  // 클릭시 팝업창 띄우기
  $(".text>p>span").click(function(){
    $("#popup").addClass("active");
  });

  // Close
  $("#popup button").click(function(){
    $("#popup").removeClass("active");
  })
});