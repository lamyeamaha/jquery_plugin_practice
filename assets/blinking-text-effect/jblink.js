(function ( $ ) {

    $.fn.jBlink = function(options) {
    	//configurations
    	var defaults = {
            color: "", //use element's color
            times: 0, //infinitive
            duration: 500, //milliseconds
        };
    	var settings = $.extend({}, defaults, options );


        return this.each(function(){
    		var element = $(this);

    		//blink color
    		var originalColor = $(this).css('color');
    		var blinkColor = settings.color != '' ? settings.color : 'rgb(0, 0, 0, 0.1)';
    		//times
    		var count = 0;
    		//loop
    		var doBlink = function(){
    			element.delay(settings.duration)
				.queue(function (next) {
					$(this).css( 'color', blinkColor );
					next();
				})
				.delay(settings.duration)
				.queue(function (next) {
					$(this).css( 'color', originalColor );
					next();
				})
				.delay(0)
				.queue(function (next) {
					count++;
					next();
					if(count < settings.times || settings.times == 0){
						doBlink();
					}

				});
			}
			doBlink();

    	});
    };

}( jQuery ));
