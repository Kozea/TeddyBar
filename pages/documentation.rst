===============
 Documentation
===============


User documentation
==================

- First steps : Learn how to very simply implement the toolbar.

First you need to download the teddybar package, see the `download page </download>`_.

When it's done, you are ready to implement the toolbar:

.. code-block:: html

  <head>
  <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>     # import jQuery
		<script src="teddybar.js"></script>                                                     # import the teddybar script...
		<link href="teddybar.css" media="screen" type="text/css" rel="stylesheet" />            # ...And the stylesheet
		<script>
			$(function () {
				$("#teddybar").teddybar();                                                          # Create a teddybar module
			});
		</script>
  </head>


- Configuration : See how you can customize it !

Open ``teddybar.js`` and change the settings variable the way you need it.

.. code-block:: javascript

  var config = {
    document : document, // if iframe use : document.getElementById('iframe').contentWindow.document
    menu : {
      //Put here the things you want in the toolbar
      'Bold': 'bold',
      'Italic': 'italic',
      'Underline': 'underline'
    },
    commands : {
      // Enter your own commands here e.g. : 'save': function(){ alert('TODO') }
    }
  };

Developer documentation
========================

*TODO*

