$(function(){
	//banner------------------------------------------------------------------------
	var $box = $('.bannerBox'),
			$content = $('.picBox', $box),	
			$menuBtn = $(' .menu li', $box),
			$width = $box.width(),
			animateSpeed = 600,
			autoSpeed = 3000,
			nowWho=0,
			MOVE=0 ;
 	var timer = setTimeout(autoChange, autoSpeed);
	
	$menuBtn.mouseover(function(){
		var $this = $(this);
		nowWho = $this.index();
		$this.stop().animate({backgroundColor:'#f1c100'},300).siblings().stop().animate({backgroundColor:'#5e5e5e'},300);
		$content.stop().animate({ left:  nowWho*$width  * -1 }, animateSpeed);
	}).eq(0).mouseover();
	
	function autoChange(){
		if(nowWho<4){ nowWho += 1; MOVE =  nowWho*$width  * -1; }else{ nowWho=0; MOVE=0;}
		$content.animate({ left: MOVE},animateSpeed,"easeOutCubic");
		$menuBtn.eq(nowWho).stop().animate({backgroundColor:'#f1c100'},300).siblings().stop().animate({backgroundColor:'#5e5e5e'},300);
		timer = setTimeout(autoChange, autoSpeed);
	}
	

	$box.hover(function(){
		clearTimeout(timer);
	}, function(){
		timer = setTimeout(autoChange, autoSpeed);
	});

});