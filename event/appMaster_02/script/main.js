$(function(){
	
	
		
	//���~����Drag�h���CSS�̪�����
	var DragHeight=$('.jspDrag').height();
	$('.scroll-pane').jScrollPane({
		animateScroll: true,
		animateDuration:3000,
		animateEase:'linear',
		verticalDragMinHeight: 35,
		verticalDragMaxHeight: 35
	});
	
	
});