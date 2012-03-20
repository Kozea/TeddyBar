(function ($) {
	$.fn.kozbar = function (options) {
		var settings = {
			kozbar_url : "kozbar/kozbar.html",
			document : document, // if iframe use : document.getElementById('iframe').contentWindow.document
			save : null,
			generate : null,
			upload : null,
			history : null
		};
        if (options) {
            $.extend(settings, options);
        }
		return this.each(function () {
			$(this).load(settings.kozbar_url, function () {
				// Puts the toolbar above the body
				$('body').css({'margin-top': $(this).height()});
		
				// execCommand on select elements
				$('select').on('click','select option', function() {
					var command = $(this).parent().attr('data-command');
					var value = $(this).val();
					settings.document.execCommand(command, false, value);
				        
					// Font element is deprecated. transform the size attr to style attr with fontsize
					if(command === 'fontsize') {
						var sizes = {'1':'8pt','2':'10pt','3':'12pt','4':'14pt','5':'18pt','6':'24pt','7':'36pt'};
						$(settings.document).find('font').css({'font-size': Sizes[value]});
					}
				});
				// execCommand on input elements
				$('input[type=button]').on('click', function () {
					var command = $(this).attr('data-command');
					settings.document.execCommand(command,false,'');
				});
				
				// Customized functions
				$('.save').on('click', function () { settings.save() });
				$('.generate').on('click', function () { settings.generate(); });
				$('.upload').on('click', function () { settings.upload(); });
				$('.history').on('click', function () { settings.history(); });
			});
		});
	};
})(jQuery);
