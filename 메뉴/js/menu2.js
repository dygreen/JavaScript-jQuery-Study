$(document).ready(function(){

  // $(".gnbMenu>li").hover(function(){
  //   $(this).find(">ul").stop().slideDown();
  // }, function(){
  //   $(this).find(">ul").stop().slideUp();
  // });
  
});

/* stop(): 사용자의 중복 반응 제거
-> 현재 실행중인 애니메이션을 정지시키고, 다음 애니메이션을 진행
사용자 마우스의 중복(빠른) 반응 때문에 애니메이션 겹침 현상이 생길때가 있어서 부드럽게 처리를 하기 위해 사용함

기본값: stop() == stop(false,false)
        stop(true,true)
*/