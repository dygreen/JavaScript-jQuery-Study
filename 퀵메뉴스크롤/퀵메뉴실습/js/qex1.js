$(document).ready(function(){

	//animate부분(close/open)
	qbchk=true;
	$(".quick_toggle").click(function(){
		
		$(this).toggleClass("quick_open");

		if(qbchk){
			$(".quickmenu").stop().animate({marginBottom:"430px"},500,"easeOutBack",function(){
				qbchk=false;
			});	
		}else{
			$(".quickmenu").stop().animate({marginBottom:"0"},500,function(){
				qbchk=true;
			});
		}
	});

});
