$(function(){
	
	//換頁功能
	
		$('em').click(function(){
			var _index = $(this).index();
			$('#content .Page').hide().eq(_index).fadeIn();
		});
		
	//改原外掛的Drag去抓取CSS裡的高度
	var DragHeight=$('.jspDrag').height();
	$('.scroll-pane').jScrollPane({
			verticalDragMinHeight: 35,
			verticalDragMaxHeight: 35
	});
	
	$('.Page').hide();
});