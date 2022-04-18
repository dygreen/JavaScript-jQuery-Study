$(document).ready(function(){

	let old = 0; // old는 처음 있던 이미지, num은 다음에 올 이미지

  $(".thumbs a").click(function(){
    let num = $(this).index();
    $("#largeImg>img").eq(old).stop(true,true).fadeOut(1000); // 기존 이미지 사라짐
    $("#largeImg>img").eq(num).stop(true,true).fadeIn(1000, function(){
      old=num; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...
    });
    return false;
  });

}); 