


(function($){



$.fn.slideDesc = function(options){

	var defaults = {
		speed: 200, 
		color: 'red'
	};

	var o = $.extend(defaults, options);

	this.each(function(){

		var $this = $(this), 
			_height = $this.height(), 
			$caption = $('.caption', $this),
			_captionHeight = $caption.outerHeight(true),
			_speed = o.speed;

		$caption.css('border-left-color', o.color);

		$this.hover(function(){
			$caption.stop().animate({
				top: _height - _captionHeight
			}, _speed);
		}, function(){
			$caption.stop().animate({
				top: _height
			}, _speed);
		});
	});

	return this;

};



})(jQuery);