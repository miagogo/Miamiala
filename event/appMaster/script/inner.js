$(function(){
		   
	var $item = $('.picBox li');	
	$item.hover(function(){
		$(this).css({zIndex:999, backgroundImage:'url(../images/base/boxBG07.jpg)'});	 
	},function(){
		$(this).css({zIndex:500, backgroundImage:'none'});
	}); 
			
	$('.ADBox .block').slideDesc({ speed: 300 });	
	$('.bannerBox .block').slideDesc({ speed: 600 });
	$('.specialBox .block').slideDesc({ speed: 300 });

		$('.whatKind li').click(function(){
			var $index = $(this).index();
			$('.whatKind li a').removeClass('on');
			$(this).find('a').addClass('on');
			$('.box ul').hide();
			$('.box').find('ul').eq($index).show();				  
		});		   

	//placeholder----------------------------------------------------------------------
		var $input =  $('input, textarea');
		
	  $input.focus(function() {        
            if($(this).val()==$(this).next('span').text()) {  
                $(this).val(""); 
				$(this).addClass('on');
            }    
        });  
        $input.blur(function() {  
            if($(this).val()=="") {  
                $(this).val($(this).next('span').text());
				$(this).removeClass('on');
			} 
        }); 
		$input.next('span').hide();
	
	 //搜尋區---------------------------------
	var $optionBox = $('.kindSBox .option'),
			$li = $('li', $optionBox),
			$choose = $('.kindSBox .choose'),
		  $SHOW = false;

	$choose.click(function(){
		if($SHOW){ 
			$optionBox.stop(true,true).slideUp(200);
			$SHOW = false; 
		} else{ 
			$optionBox.stop(true,true).slideDown(200);
			$SHOW = true;
		}
	});

	$optionBox.hover(function(){	$(this).show(); $SHOW = true;	},function(){	$(this).slideUp(200); $SHOW = false;	});

	$li.click(function(){
		var $Who = $(this).find('a').html();
			$choose.html($Who);
			$optionBox.hide();
	 });
	
	//遊戲內頁 限制圖片寬度--------------------
	$('.article .txt img').each(function(){
			var $imgWidth = $(this).width(),
				$imgHeight = $(this).height(),
				$kk = $imgWidth/640,
				$newHeight = $imgHeight/$kk;
			if( $imgWidth > 640){
				$(this).attr('width',640);
				$(this).attr('height',$newHeight);
		}								 
	});
	
	//遊戲內頁 收合--------------------
	var $txt = $('.GAMEINFO .article .txt'),
		$txtHeight = $txt.height(),
		$txtOpen =false;	
		$txt.css({ height:'190px'});
	$('.toggleArticle').click(function(){
		if($txtOpen == false){
			$txt.delay(300).animate({ height:$txtHeight},1000);
			$(this).text('收起');
			$(this).css({'backgroundPosition':'left bottom'});
			$txtOpen =true;
			$('.toggleArticle2').show();
		} else{
			$txt.delay(300).animate({ height:'190px'},1000);
			$(this).css({'backgroundPosition':'left top'});
			$(this).text('展開');
			$txtOpen =false;
			$('.toggleArticle2').hide();
		}								   
	});
	$('.toggleArticle2').click(function(){
			$txt.delay(300).animate({ height:'190px'},1000);
			$txtOpen =false;
			$('.toggleArticle').css({'backgroundPosition':'left top'});
			$('.toggleArticle').text('展開');
			$('.toggleArticle2').fadeOut(400);								
	});
	
	//遊戲內頁 頁籤切換--------------------
	$('.pageMenu li').click(function(){
		var $this = $(this),
			$page = $this.parent().next('div').children('div'),
			$index =  $this.index(),
			$msgBox = $('.msgBox .leaveMsg, .otherBox');
		$this.addClass('now').siblings().removeClass('now');
		$this.css({zIndex:999}).siblings().css({zIndex:'auto'});
		$page.hide().eq($index).show();
		if($index==1){ $msgBox.hide();$('.toggleArticle, .toggleArticle2').hide();} else{ $msgBox.show();$('.toggleArticle').show();}
	});
	
	//遊戲列表---------
	$('.itemList ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');									
	});
	
	//排行榜數字---------
	$('.RANK .gameBox .item').each(function(){
		var $index = $(this).index();
		$(this).children('a').children('.nomber').text($index+1);
	});
	
	//Q&A---------------
	$(".COURSE").click( function(){

			$(this).siblings().removeClass('COURSE_on').find(".ans").stop().slideUp(300);
			$(this).toggleClass('COURSE_on').find(".ans").stop().slideToggle(300);
	});
	

	//----
		$(".map .OH, .map .NOdiv").click( function(){

			$(this).parent().siblings().children('a').removeClass('on');
			$(this).parent().siblings().find("div").stop().slideUp(300);
			$(this).toggleClass('on');
			$(this).next("div").stop().slideToggle(600);
	});						 

	//---------

});