$(function(){
	var $txt = $('.txt'),
		  $txtUl = $('ul', $txt),
		  $txtUlLi = $txtUl.children('li'),
		  $Im = $('.im'),
		  $gameTab = $('.gameTab li a'),
		  $gameTabLi = $('.gameTab li'),
		  $txtBox = $('.txt .box'),
		  $kindTab = $('.kindTab'),
		  $kindTabOl = $('.kindTab ol'),
		  $window = $(window),
		  $page = $('.page'),
		  $tab = $('.tab li'),
		  $menu = $('.menu ul li'),
		  $btn_close = $('.btn_close');
	
 	$window.scrollTop(1);

	//li&td color 
	$txtUl.children('li:odd').addClass('eee');	
	
	$('tr:odd').addClass('eee');	
	
	 $gameTab.bind( 'touchstart', _im);
	 $gameTabLi.bind( 'touchstart', _menuChange);
	 $tab.bind( 'touchstart', _menuChange);
	 $gameTabLi.bind( 'touchstart', _on);
	 $tab.bind( 'touchstart', _on);
	 $btn_close.bind('touchstart',_hidehide);
	 $('.gameTab li.L01').unbind( 'touchstart', _menuChange);
	 $gameTabLi.eq(3).unbind( 'touchstart', _menuChange);
	 //movingTab under the menu 
	function _im(){
		var POS = $(this).position().left;
		$Im.stop().transition({ left:POS },1000,'ease');

	}

	//when menu is touched, change the Class and the kindTab show / change txtBox
	function _menuChange(){
		var WHO = $(this).index();
		$btn_close.fadeIn();
		$kindTabOl.stop().slideUp(300).eq(WHO).slideDown(300);	
		$txtBox.hide().eq(WHO).show();
		$txt.bind( 'touchstart', _hidehide);

	}
	//when touch .txt, kindTab hide
	function _hidehide(){
		$kindTabOl.slideUp(300);
		$txt.unbind( 'touchstart', _hidehide);
		$btn_close.hide();
	}
	
	//the menu under the screen
	$('.back').bind('touchstart' , _on);
	//the menu under the screen
	$menu.bind('touchstart' , _on);
	
	function _on(){
		$(this).addClass('on').siblings().removeClass('on');

	}
	
	var _LL = $('.imgBox div a').length;
	$('.imgBox div').css({ width:_LL*180});
});