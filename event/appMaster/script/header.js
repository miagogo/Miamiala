$(function(){
	 //�j�M��-------------------------------------------------------------------------------------------------------------------------------------------------------
	var $optionBox = $('.selectBox .option'),
			$li = $('li', $optionBox),
			$choose = $('.selectBox .choose'),
		    $SHOW = false;
	//$optionBox.hide();
	//�I����option�X�{
	$choose.click(function(){
		if($SHOW){ 
			$optionBox.stop(true,true).slideUp();
			$SHOW = false; 
		} else{ 
			$optionBox.stop(true,true).slideDown();
			$SHOW = true;
		}
	});
	//�ƹ����d�boption�W�ɫO����ܡA���X�h����
	$optionBox.hover(function(){	$(this).show(); $SHOW = true;	},function(){	$(this).slideUp(); $SHOW = false;	});
	 //������ܴ��ϥ�
	$li.click(function(){
		var $Who = $(this).find('a').html(),
			$Link = 'url(images/base/icon_'+$Who+'2.png)';
			$choose.css({'background-image':$Link});
			$optionBox.hide();
	 });
	
	//���x���-�ﶵ���ƹ�����-----------------------------------------------------------------------------------------------------------------------------
	function kindOver(){	$(this).find('a').stop(true,false).animate({top:'-5px'},300, 'easeOutCubic');	}
	function kindOut(){ $(this).find('a').stop(true,false).animate({top:'-26px'},300, 'easeOutCubic');	}
	$('.kind ul li').bind('mouseover',kindOver);
	$('.kind ul li.L02, .kind ul li.L03').bind('mouseout',kindOut);
	
	$('.kind ul li').click(function(){
		$(this).unbind('mouseout',kindOut);
		$(this).siblings().bind('mouseout',kindOut);
		$(this).find('a').stop(true,false).animate({top:'-5px'},300, 'easeOutCubic').end().siblings().find('a').animate({top:'-26px'},300, 'easeOutCubic');	
	});
	
	//placeholder----------------------------------------------------------------------
		var $input =  $('input');
		
	  $input.focus(function() {        
            if($(this).val()==$(this).next('span').text()) {  
                $(this).val("");  
            }    
        });  
        $input.blur(function() {  
            if($(this).val()=="") {  
                $(this).val($(this).next('span').text());  } 
        }); 
		$input.next('span').hide();
		
		//----------------------------------
		$('.soon').hover(function(){
						$(this)	.append('<div class="soon"><span>coming soon</span><span class="bb"></span></div');	  
						$(this).find('div').animate({top:'38px'},300)
		},function(){
				$(this).find('div').remove();
		});
});