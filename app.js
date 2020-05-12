$(function () {
	
	// フロートヘッダーメニュー
  	var targetHeight = $('.js-float-menu-target').height();
  	$(window).on('scroll', function() {
    	$('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);  // scrollTop：スクロール量
  	});
	// SPメニュー
	$('.js-toggle-sp-menu').on('click', function () {
		$(this).toggleClass('active');
		$('.js-toggle-sp-menu-target').toggleClass('active');
	});
	
	// SPメニュー　項目をクリックしたら自動的に閉じる
	$('.js-toggle-sp-menu-close').on('click', function () {
		$('.js-toggle-sp-menu').toggleClass('active');
		$('.js-toggle-sp-menu-target').toggleClass('active');
	});

});

window.onload = function() {
	scroll_effect();
  
	$(window).scroll(function(){
	 scroll_effect();
	});
  
	function scroll_effect(){
	 $('.js-effect-fade').each(function(){
	  var elemPos = $(this).offset().top;
	  var scroll = $(window).scrollTop();
	  var windowHeight = $(window).height();
	  if (scroll > elemPos - windowHeight){
	   $(this).addClass('effect-scroll');
	  }
	 });
	}
  };
