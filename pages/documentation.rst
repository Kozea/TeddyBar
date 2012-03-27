===============
 Documentation
===============


First steps : Learn how to simply implement the toolbar.
-------------------------------------------------------------

First you need to download the Teddybar package, see the `download page </download>`_.

You are now ready to put the toolbar in your website:

.. code-block:: html

  <head>
    <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
    <script src="teddybar.js"></script>
    <link href="teddybar.css" media="screen" type="text/css" rel="stylesheet" />
    <script> $(function () { $("#teddybar").teddybar(); }); </script>
  </head>

How Teddybar works :
 - import jQuery
 - import the teddybar script
 - import the teddybar stylesheet (or create your own stylesheet)
 - Create a teddybar module by calling ``teddybar()``
 
Then you need to create a HTML element e.g. a ``<div id="teddybar">``.

To define content regions that teddybar will be able to edit, you need to add the ``contenteditable`` attribute to any element/div.


Configuration : See how you can customize it !
----------------------------------------------

Open ``teddybar.js`` and change the config settings the way you need it.

.. code-block:: javascript

  var config = {
    document : document,
    menu : {
      //'Label_button': command
      'Bold': 'bold',
      'PrintDocument': 'print',
      'separator1': null
      'Font Name': ['fontname', {'Serif': 'serif', 'Sans-serif': 'sans-serif'}],
    },
    commands : {
      //'function_name': your_func()
      'print': function(){ alert('Print your document !') }
    }
  };


If you want to create a button, just put a simple key/value in the menu like ``'List': 'insertOrderedList'``

The key stands for the label whereas the value is the name of your function (it uses ``execCommand`` by default, but feel free to redefine your own functions). `Click here to see all the commands supported by execCommand <http://www.w3.org/TR/html5/dnd.html#execCommand>`_.

You can create a <select> element by defining an array like ``'Font Name': ['fontname', {'Serif': 'serif', 'Sans-serif': 'sans-serif'}]``

You can also create icon groups by using a separator. Simply set the value of your property to ``null``, e.g. ``'separator': null``.


Configure your functions on call
--------------------------------

When calling teddybar, you can add your own buttons and their functions:

.. code-block:: javascript

  $("#teddybar").teddybar({
    menu: {'Save':'save_func'},
    commands: {'save_func': function(){alert('Save your document !')}}
  });

If you want to see how it looks, see the `demo page </demo/demo.html>`_.
