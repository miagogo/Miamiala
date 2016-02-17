$(function(){
	
	var   $win = $(window),
			$mask = $('.bannerMask'),
			$banner = $('.banner'),
			$today = $('.today'),
			pageWidth =$mask.width(),
			 newHeight = 0.56*pageWidth,
			 NOW = 0,
			 POS = 0,
			 $myImages = $('li', $banner),
			  _num = $myImages.length,
			  _indexNum = _num-1,
			 startTimer, timer, speed = 4000,
			 $link = $('.link');

	$win.bind('orientationchange resize', _FULL); 
	function _FULL(){
		pageWidth =$mask.width();
		newHeight = 0.56*pageWidth;
		//
		$mask.css({height:newHeight});
		$banner.find('a , img , li').css({ width:pageWidth, height:newHeight});
		$today.css({ height:newHeight});	
		$today.children('div').css({ marginTop:newHeight/2-35 });
		$banner.css({ width:_num*pageWidth});
	}
	_FULL();
//-------------------------------------
	$mask.touchwipe({
		wipeLeft: function(){ goLeft();},	
		wipeRight: function(){ goRight();},	
	});
	function goLeft(){ if(NOW<_indexNum){ NOW +=1;} GOGO(); }
	function goRight(){ if(NOW>0){ NOW -=1;} GOGO(); }
	

	
	 startTimer = setTimeout( timerBack, speed);
	 //creat Num btns
	 $link.append('<ul></ul>');
	 for( var i=0; i< $myImages.length;i++){
		$('.link ul').append('<li>'+(i+1)+'</li>');		 
	}
	$('.link ul li').eq(0).addClass('on');
	//timer
	function auto(){
		if( NOW<_indexNum){ NOW +=1;} else if ( NOW=_indexNum){ NOW =0;}
		GOGO();
	}
	//moving
	function GOGO(){
		clearTimeout(timer); 
		POS = NOW*pageWidth*-1;
		$banner.transition({left:POS},800,'ease',timerBack);	
		$('.link ul li').eq(NOW).addClass('on').siblings().removeClass('on');
	}
	
	 function timerBack(){ timer = setTimeout( auto, speed);};
});