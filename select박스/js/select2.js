$(document).ready(function(){

  $(".mycard").mouseenter(function(){
    $(this).find("a>img").attr({"src":"image/mymenu_on.gif"});
    $(this).find("ul").show();
  });
  
  $(".mycard").mouseleave(function(){
    $(this).find("a>img").attr({"src":"image/mymenu.gif"});
    $(this).find("ul").hide();
  });

});