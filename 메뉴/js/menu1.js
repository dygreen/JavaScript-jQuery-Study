$(document).ready(function(){

  $(".gnb li").hover(function(){
    num = $(this).index()+1; //0,1,2...-> 이미지 파일명이 1부터 시작이므로 +1을 해서 0이 아닌 1부터 시작하게 함
    $(this).find("a img").attr({"src": "image/menuover_0"+num+".jpg"});
    /* let을 붙이면 지역변수이므로 out일때의 문장에도 변수선언을 해주어야 함. let을 붙이지 않으면 전역변수이므로 over일때의 문장에만 삽입함 */
  },function(){
    // let num = $(this).index()+1;
    $(this).find("a img").attr({"src": "image/menu_0"+num+".jpg"});
  });
});

/* 지역변수와 전역변수 
let 변수이름; -> 지역변수선언(해당하는 문장에서만 변수를 사용할 수 있다.)
    문장내에서라도 let을 붙이지 않으면 전역변수가 된다.


변수이름; -> 전역변수선언(전체 문장에 변수를 사용할 수 있다.)


index() 메서드: 이벤트가 발생하는 요소의 인덱스값을 반환 -> index()요소의 값은 0부터 시작한다. 0,1,2...
*/