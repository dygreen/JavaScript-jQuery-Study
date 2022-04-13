$(document).ready(function(){

  $(".allmenu h3").click(function(){
    $(this).toggleClass("mclose"); //addClass+removeClass
    
    $(".allmenu div").slideToggle("slow");
  }); //slideDown+slideUp

});