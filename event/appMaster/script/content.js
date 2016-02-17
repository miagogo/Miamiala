$(function(){
	//左欄-hotBox頁籤-----------------------
		var $box = $('.hotBox'),
			$content = $('.picBox', $box),	
			$menuBtn = $('.menu li', $box),
			$page = $('.page', $box)
			$block = $('.block', $box),
			$width = $box.width(),
			animateSpeed = 600,
			nowWho=0,
			MOVE=0 ;
		
	$menuBtn.click(function(){
		var $this = $(this),
			$length = $this.find('a').text().length;
			$pos = $(this).position().left,
			$width = $(this).width();
		nowWho = $this.index();
		if( nowWho != 5){
			if( $length== 5){
				$block.css({'backgroundImage':'url(images/base/menuOn02.png)',backgroundPosition:'5px -50px', width:$width, left:$pos }).animate({backgroundPosition:'5px 0px'},500, 'easeOutExpo');
			} else if( $length==6 || $length==7){
				$block.css({'backgroundImage':'url(images/base/menuOn03.png)',backgroundPosition:'5px -50px', width:$width, left:$pos}).animate({backgroundPosition:'5px 0px'},500, 'easeOutExpo');
			} else{
				$block.css({'backgroundImage':'url(images/base/menuOn01.png)',backgroundPosition:'7px -50px', width:$width, left:$pos}).animate({backgroundPosition:'7px 0px'},500, 'easeOutExpo');	
			}
		}
		$page.eq(nowWho).show().siblings().hide();
		return false;
	}).eq(0).click();


	//左欄-推薦區----------------------------
	var $item = $('#leftBox .commendBox .picBox li');	
			$item.hover(function(){
				$(this).css({zIndex:999, backgroundImage:'url(images/base/boxBG03.jpg)'});
				$(this).children('div').css({ display:'block', opacity:0, left:'90px'}).stop(true,false).delay(200).animate({ left:'100px',opacity:100},400);		 
			},function(){
				$(this).css({zIndex:500, backgroundImage:'none'});
				$(this).children('div').stop(true,true).hide();		
			}); 
		//下欄-分區----------------------------	
		var $item2 = $('#bottomBox .gameListBox .kindBox ul li');	
			$item2.hover(function(){
				$(this).css({ zIndex:800}).stop(true,false).animate({ backgroundColor:'#eee'},300, 'easeInQuart');
				$(this).children('div').css({ display:'block', opacity:0, left:'195px'}).stop(true,false).delay(200).animate({ left:'205px',opacity:100},400);					 
			},function(){
				$(this).css({ zIndex:0}).animate({ backgroundColor:'transparent'},400, 'easeOutQuart');
				$(this).children('div').stop(true,true).hide();		
			});
		
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

//返回頂端----------------------------------------------------------------------------------------
	$('#goTop').animate({ top: $(window).scrollTop()+$(window).height() -270},1000);
	
	var ifscroll = false;
	function onScroll(){						   
       		 var scrollTop = $(window).scrollTop(),
				 	windowHeight = $(window).height(),
					TT =  $(window).scrollTop()/5;
			if( scrollTop <1500){
				 $('#goTop').stop().animate({ top: scrollTop+windowHeight -270},{duration: 800+TT, easing: "easeOutCubic"});
			} else if ( scrollTop >1600){
					$('#goTop').stop().animate({ top: scrollTop+windowHeight -500},{duration: 800+TT, easing: "easeOutCubic"});
			}
		}
	onScroll();
	$(window).scroll( function() {
		setTimeout(onScroll, 300);

	});
	
	$('#goTop').click(function(){
		$("html,body").stop().animate({scrollTop:0},800);						   
	});
	
	//-----------------------------
	$('.kindBox .menu li').click(function(){
		 var $index = $(this).index();
		 $(this).addClass('on').siblings().removeClass('on');
		 $('.kindBox .page ol').hide();
		 $('.kindBox .page').find('ol').eq($index).show();
	});
});