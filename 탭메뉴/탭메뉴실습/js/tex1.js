$(document).ready(function(){

  $(".panel>li:not(:first)").hide();

	$(".tab>li").click(function(){
    $(".tab>li").removeClass("selected"); 
    $(".tab>li span").removeClass("selected_span");
    $(this).addClass("selected");
    $(this).find("span").addClass("selected_span");
    
    $(".panel>li").hide();
    $($(this).find("a").attr("href")).show(); 
  });
});