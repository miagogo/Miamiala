$(function(){
	
//ªð¦^³»ºÝ----------------------------------------------------------------------------------------
	var $goTop = $('#goTop'),
			$window = $(window);
	$goTop.animate({ top: $window .scrollTop()+$window .height() -270},1000);
	
	var ifscroll = false;
	function onScroll(){						   
       		 var scrollTop = $window .scrollTop(),
				 	windowHeight = $window .height(),
					move = windowHeight/2,
					TT =  $window .scrollTop()/5;
			if( scrollTop <1500){
				if(windowHeight<1000 && scrollTop >900){
					 $goTop.stop().animate({ top: scrollTop+windowHeight -500},{duration: 800+TT, easing: "easeOutCubic"});
				}else{
				 $goTop.stop().animate({ top: scrollTop+windowHeight -move},{duration: 800+TT, easing: "easeOutCubic"});
				}
				
			} else if ( scrollTop >1600){
					$goTop.stop().animate({ top: scrollTop+windowHeight -600},{duration: 800+TT, easing: "easeOutCubic"});
			}
		}
	onScroll();
	$window .scroll( function() {
		setTimeout(onScroll, 300);

	});
	
	$goTop.click(function(){
		$("html,body").stop().animate({scrollTop:0},800);						   
	});
});