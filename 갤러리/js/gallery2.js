$(document).ready(function(){

  $(".thumbs a").click(function(){
    let path = $(this).attr("href");
    $("#largeImg>img").attr({"src":path}).hide().fadeIn();
    return false;
  })
	
}); 