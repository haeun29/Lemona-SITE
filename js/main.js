$(function(){

	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});

	// AOS 초기화
	AOS.init();

	//modal / 레이어 팝업 

	$('.youtube').click(function(){
		$('.modal').addClass('on');
	}),

	$('.modal .btn-close').click(function(){
		$('.modal').removeClass('on');
	});


}); // $