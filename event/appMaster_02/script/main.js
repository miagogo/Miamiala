$(function(){
	
	
		
	//改原外掛的Drag去抓取CSS裡的高度
	var DragHeight=$('.jspDrag').height();
	$('.scroll-pane').jScrollPane({
		animateScroll: true,
		animateDuration:3000,
		animateEase:'linear',
		verticalDragMinHeight: 35,
		verticalDragMaxHeight: 35
	});
	
	
});