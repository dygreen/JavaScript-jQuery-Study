$(document).ready(function(){

	let img=$(".changeimg ul li");
	let btn=$(".btn ul li");
	let lbtn=$(".side_btn .lbtn");
	let rbtn=$(".side_btn .rbtn");

	let oldidx=0; //기존이미지
	let idx=0; //새로 바뀌는 이미지
	let img_n=img.length; //1,2,3...개수를 세어서 변수에 저장한다.

	//이미지와 버튼이 바뀌는 함수
	function changeImg(idx){ //매개변수가 있는 함수 --> idx는 선택되는 이미지
		if(oldidx!=idx){ //기존의 이미지와 선택된 이미지가 다를때...
			btn.eq(oldidx).removeClass("active"); // 기존 하단버튼 비활성화->active 클래스를 삭제함
			btn.eq(idx).addClass("active"); // 선택된 하단버튼 활성화->active 클래스를 불러냄
			img.eq(oldidx).stop(true,true).fadeOut(300); //기존 이미지 사라짐
			img.eq(idx).stop(true,true).fadeIn(300); // 선택된 이미지 나타남
		}
		oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장되어서 fade out...
	}

	// 자동함수 생성
	function changeAuto(){
		idx++;
		// 선택한 이미지가 마지막일때 다시 처음 이미지부터 시작
		if(idx>img_n-1){ //index는 0부터 시작하고 length는 1부터 시작하므로 1을 뺴주어야 마지막 숫자가 맞음
			idx=0;
		}
		changeImg(idx);
	}

	timer = setInterval(changeAuto,4000); //4초 간격으로 함수를 자동재생
	/* 자동으로 롤링되는 순간 버튼을 클릭할 때 동시에 움직여서 충돌이 날 수 있음 -> 모든 버튼을 클릭할 때는 자동으로 이미지가 바뀌는 함수를 잠시 멈추어야 함 */

	// 하단버튼 클릭시...
	btn.click(function(){
		clearInterval(timer); //버튼클릭시 자동함수 해지->clearInterval(변수);

		idx=$(this).index(); //0,1,2...
		changeImg(idx);

		timer = setInterval(changeAuto,4000); //버튼을 클릭안할 때는 다시 함수 자동재생
	});



	// 좌우버튼 클릭시...
	rbtn.click(function(){
		clearInterval(timer);

		idx++;
		if(idx>img_n-1){ // 선택한 이미지가 0,1,2...4 마지막일때 맨처음부터 다시 시작
			idx=0;
		}
		changeImg(idx);

		timer = setInterval(changeAuto,4000);
	});

	
	lbtn.click(function(){
		clearInterval(timer);

		idx--;
		if(idx<0){ //선택한 이미지가 첫번째일때 다시 맨뒤부터 다시 시작
			idx=img_n-1; //총개수 5-1=4(index 0,1,2,3,4)
		}
		changeImg(idx);

		timer = setInterval(changeAuto,4000);
	});

});


