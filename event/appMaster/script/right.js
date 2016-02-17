$(function(){
	
	//右欄-熱門排行----------------------------
	var $rankItem = $('.rankBox .list li'),
			$title = $('.title',$rankItem),
			$box = $('.box',$rankItem);
	$rankItem.bind('mouseover',rankOver);
		function rankOver(){
			$title.show();
			$box.hide();
			$(this).children('div').eq(0).hide();
			$(this).children('div').eq(1).show();
		}

	
	//-----------------------------
	$('.kindBox .menu li').click(function(){
		 var $index = $(this).index();
		 $(this).addClass('on').siblings().removeClass('on');
		 $('.kindBox .page ol').hide();
		 $('.kindBox .page').find('ol').eq($index).show();
	});
});