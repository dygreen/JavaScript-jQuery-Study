$(document).ready(function(){

  $(".thumbs a").click(function(){
    let val = $(this).index();
    let num = -1020*val+20; //이미지의 가로폭+여백20px=1020씩 누적
    $("#gallery #largeImg").animate({"left":num});
    return false;
  });
}); 