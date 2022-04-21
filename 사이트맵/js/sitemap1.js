$(document).ready(function(){

  site=true;

  $(".sitemap_btn span").click(function(){

    if(site){
      $(this).css({"background":"url(image/sitemap_close.png)"}); //이미지변경
      $(".sitemap").animate({height:"200px"},"fast");  //height 변경
      $(".sitemap").css({"border-bottom":"1px solid #e5e5e5"});  //하단에 테두리 만듬
      $(".sitemap_list").show(); //사이트맵 내용 보임
      site=false;
    }else{
      $(this).css({"background":"url(image/sitemap_open.png)"}); 
      $(".sitemap").animate({height:"0px"},"fast"); 
      $(".sitemap").css({"border-bottom":"none"});  
      $(".sitemap_list").hide(); 
      site=true;
    }

  });

});