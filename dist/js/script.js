$(window).load(function(){

	// alert('window loaded successfully');

	setTimeout(function(){

		$('.preloader').fadeOut('slow');

		$('.pop').animate({bottom:'0%'},2000,function(){
			$('.pop-text').animate({left:'65%'},2000);
		});
		$('.about-pop').animate({bottom:'0%'},2000,function(){
			// $('.pop-text').animate({left:'65%'},2000);
		});
		$('.about-book').fadeIn(2000);
		
		},1000);
	})