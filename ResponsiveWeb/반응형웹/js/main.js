$(document).ready(function () {

	//데스크탑-탑메뉴 오버효과_________
	$(".gnbmenu li a").hover(function () {
		$(this).css({
			"color": "#fff",
			"font-weight": "bold"
		});
		$(this).find("span").stop(true, true).slideDown(300);
	}, function () {
		$(this).css("color", "#daebeb");
		$(this).find("span").stop(true, true).slideUp(300);
	});


	//모바일용 메뉴버튼_________ 
	$(".mo_view").css({"right": "-60%"}); /*처음위치*/
	$(".close").hide();

	$(".mo_menu_btn").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "0%"});
		$(".close").show();
	});

	$(".close").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-60%"});
		$(".close").hide();
	});


	//데스크탑-종이학롤링_________ 
	old = 0;
	num = 0;

	function paper() {
		num++;
		if (num > 2) {
			num = 0;
		}

		$(".section4 ul li").eq(old).stop(true, true).fadeOut(1000);
		$(".section4 ul li").eq(num).stop(true, true).fadeIn(1000, function () {
			old = num;
		});

	}
	setInterval(paper, 3000);


	//데스크탑-푸터패밀리사이트_________ 
	chk = true;

	$(".family_site dl dt").click(function () {

		if (chk) {
			$(".arrow").html("<span class='material-icons icon2'>arrow_drop_down</span>");
			$(".family_site dd ul").slideDown();
			chk = false;
		} else {
			$(".arrow").html("<span class='material-icons icon2'>arrow_drop_up</span>");
			$(".family_site dd ul").slideUp();
			chk = true;
		}

	});

});