$(function(){
	
	//�����\��
	
		$('em').click(function(){
			var _index = $(this).index();
			$('#content .Page').hide().eq(_index).fadeIn();
		});
		
	//���~����Drag�h���CSS�̪�����
	var DragHeight=$('.jspDrag').height();
	$('.scroll-pane').jScrollPane({
			verticalDragMinHeight: 35,
			verticalDragMaxHeight: 35
	});
	
	$('.Page').hide();
});