(function ($) {
	$.fn.teddybar = function (options) {
		var config = {
			document : document, // if iframe use : document.getElementById('iframe').contentWindow.document
			menu : {
                'Bold': 'bold',
                'Italic': 'italic',
                'Underline': 'underline',
                'Strikethrough': 'strikethrough',
                '-1': null,
                'Font Name': ['fontname', {'Fontin': 'fontin', 'Latin': 'latin modern'}],
                'Font Size': ['fontsize', {'1 (8pt)': '1', '2 (10pt)': '2','3 (12pt)': '3','4 (14pt)': '4','5 (18pt)': '5','6 (24pt)': '6','7 (36pt)': '7'}],
                'Format': ['formatblock', {'Heading 1': 'h1','Heading 2': 'h2','Heading 3': 'h3','Heading 4': 'h4','Heading 5': 'h5','Heading 6': 'h6','Paragraph': 'p','Preformatted': 'pre'}],
                '-2': null,
                'Numbered List': 'insertorderedlist',
                'Unnumbered List': 'insertunorderedlist',
                '-3': null,
                'Justify Left': 'justifyleft',
                'Justify Right': 'justifyright',
                'Center': 'justifycenter',
                'Justify Full': 'justifyfull',		
                '-4': null,
                'Undo': 'undo',
                'Redo': 'redo'
			},
			commands : {
				// Enter your own commands here e.g. : 'save': function(){ alert('TODO') }
			}
		};
        if (options) {
            $.extend(config.commands, options);
        }
		return this.each(function () {
			var $this=$(this);
			var block = $('<ul>').appendTo($this);
			$.each(config.menu, function (name, command) {
				if (command == null) {
					// make a separator
					block = $('<ul>').appendTo($this);
				} else if (typeof command == 'string') {
					// make a button
					$('<input>', {"title": name, "type": "button", "value": name, "class": command, "data-command": command}).appendTo(block).wrap('<li>');
				} else {
					// make a select
					$('<select>', {"title": name, "data-command": command[0]}).appendTo(block).wrap('<li>');
					$.each(command[1], function(label, value) {
						$('select[data-command='+command[0]+']').append($('<option>', {"value":value}).html(label));
					});
				}
			});
				
			// execCommand on select elements
			$('select').on('change','select option', function() {
				var command = $(this).parent().attr('data-command');
				var value = $(this).val();
				config.document.execCommand(command, false, value);
			});
            
			// execCommand on input elements
			$('input[type=button]').on('click', function () {
				var command = $(this).attr('data-command');
				if (command in config.commands) {
					config.commands[command]();
				} else {
					config.document.execCommand(command,false,'');
				}
			});
            
			// function that always puts the toolbar above the body
			$(window).resize(function() {
				$('body').css('margin-top',$this.height());
			});
		});
	};
})(jQuery);
