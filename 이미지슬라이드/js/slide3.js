$(document).ready(function(){
	
	/* 	let simgAuto=$(".slideAuto ul");
		let simgliAuto=$(".slideAuto ul li");
		let sbtnAuto=$(".slideAuto_btn ul li");
		let snextAuto=$(".sideAuto_btn .nexAuto");
		let spreAuto=$(".sideAuto_btn .preAuto"); */
		let imgon_w= $(".slideon ul li").width();   //이미지의 가로너비
		let imgon_n= $(".slideon ul li").length;  //이미지의 총개수  
		let soldidxon=0;  //기존이미지
		let sindexon=0;  //선택된 새이미지
	
		$(".slideon ul li:last").prependTo(".slideon ul");
		//갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치 1234->4123	
		$(".slideon ul").css({ left:-imgon_w}); 
		//처음에 1이 보이기위해 앞으로 가져온 4를 왼쪽으로 밀어두기
	
	
		//index번째 비주얼이미지 이동하는 함수생성
		function slideonImg(sindexon,m){ //m은 prev와 next를 판단 
	
			
			if(m==0){ //prev눌렀을때
			//이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치
				
				$(".slideon ul").stop(true,true).animate({
					left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){
					$(".slideon ul li:last").prependTo(".slideon ul");				
					$(".slideon ul").css({ left:-imgon_w }); //최종목적지	
				});
				$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  //기존버튼 비활성화
				$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  //선택버튼 활성화
	
			}else{ //next눌렀을때
			//다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
	
				$(".slideon ul").stop(true,true).animate({
					left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){
					$(".slideon ul li:first").appendTo(".slideon ul");				
					$(".slideon ul").css({ left:-imgon_w }); //최종목적지	
				});
				$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  //기존버튼 비활성화
				$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  //선택버튼 활성화
	
			}
	
			soldidxon=sindexon;
	
		} 
	
		//슬라이드 자동함수 생성
		function slideonAuto(){
			sindexon++;	
			if(sindexon==imgon_n){ //img_n은 이미지개수 4, index는 0,1,2,3
				sindexon=0;
			}
			slideonImg(sindexon,1);
		}
	
		auto2=setInterval(slideonAuto,4000);
	
	
		//하단버튼 클릭
		$(".slideon_btn ul li").click(function(){
	
			clearInterval(auto2); 
			$(".playon").hide();
			$(".stopon").show();
	
			sindexon = $(this).index();
	
			//재배치
			for(let i=1; i <= imgon_n; i++){
				$(".slideon ul li.i"+i).appendTo(".slideon ul");
			}
			$(".slideon ul li:last").prependTo(".slideon ul");	
			$(".slideon ul li:last").prependTo(".slideon ul");	
	
	
			/* 위의 for문을 풀어서 쓰면....
			$(".slide ul li.i4").appendTo(".slide ul");
			$(".slide ul li.i1").appendTo(".slide ul");
			$(".slide ul li.i2").appendTo(".slide ul");	
			$(".slide ul li.i3").appendTo(".slide ul");
			
			->for문 다음 2문장을 실행하면....맨 마지막것을 맨앞으로 보내라->맨끝에 있는 2개을 앞으로 보냄
	
			$(".slide ul li.i3").appendTo(".slide ul");
			$(".slide ul li.i4").appendTo(".slide ul");
			$(".slide ul li.i1").appendTo(".slide ul");
			$(".slide ul li.i2").appendTo(".slide ul");		
			*/
	
			//번호만큼 이동
			for (let j=1; j<=sindexon+1;j++) {
				slideonImg(sindexon,1);
			}
	
			auto2=setInterval(slideonAuto,4000); 
	
		});
	
		//좌우버튼 클릭
		$(".nexon").click(function(){
	
			clearInterval(auto2); 
			$(".playon").hide();
			$(".stopon").show();
	
			sindexon++;	
			if(sindexon>=imgon_n){ //마지막 이미지까지 오면 다시 첫번재 이미지부터 다시....
				sindexon=0;      
			}
			slideonImg(sindexon,1);
			auto2=setInterval(slideonAuto,4000); 
	
		});
	
		$(".preon").click(function(){
	
			clearInterval(auto2); 
			$(".playon").hide();
			$(".stopon").show();
	
			sindexon--;	
			if(sindexon<0){ //마지막 이미지까지 오면 다시 첫번재 이미지부터 다시....
				sindexon=imgon_n-1;      
			}
			slideonImg(sindexon,0);
			auto2=setInterval(slideonAuto,4000);
	
		});
	
		//Play,Stop 클릭
		$(".playon").hide();  //처음에는 Stop버튼은 보이게 하기위해 Play버튼은 숨김
	
		$(".stopon").click(function(){
			clearInterval(auto2);
			$(".stopon").hide();
			$(".playon").show();
		});
		$(".playon").click(function(){
			auto2=setInterval(slideonAuto,4000); 
			$(".playon").hide();
			$(".stopon").show();
		});
	
	});