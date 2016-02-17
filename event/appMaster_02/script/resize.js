$(function(){
	
	var pageHeight, pageWidth,
		  $win = $(window),
		  $content = $('.txt'),
		  $page = $('.page'),
		  $error = $('.errorBox');
	
	$win.bind('orientationchange resize', _FULL); 

	function _FULL(){
		pageHeight = $win.innerHeight();	
		pageWidth = $win.innerWidth();	
		$content.css({ minHeight: pageHeight-136});
		$page.css({ minHeight: pageHeight-136});
		$('.errorBox').css({
			top:pageHeight/2-120, 
			left:pageWidth/2-100	
		});
	}
	
	_FULL();
});