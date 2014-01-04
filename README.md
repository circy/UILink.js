UILink.js
=========
UILink.js combines classes or objects with elements from the DOM, for example, Buttons, inputs and so on.
Classes or objects with extended members that are generated from the html and it can simple events are bound. It is required JQuery. It can be used as query plugin, but can also be integrated into different module systems.

Include & Test
=========
Install or include by HTML-Tag:
``` HTML
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/x.x/jquery.min.js"></script>
  <script type="text/javascript" src="lib/UIlink.js"></script>
```` 

Install from npm (Package manager. Installs, publishes and manages node programs.): 
``` javascript
  npm install uilink.js
```

Test:
``` javascript
  npm test
```

Using:
=========
To demonstrate the usage of uilink, I will show here a small example.

Step 1:
``` HTML
<html>
  <head>
    <title>UILink.js - simpleTest</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/x.x/jquery.min.js"></script>
    <script type="text/javascript" src="lib/UIlink.js"></script>
  </head>
  <body>
  
  <div id="Modul1">
    <button 
    data-uilinkname="Button1" 
    data-uilinkevent="click" 
    data-uilinkeventfunc="OnButton1Click">
    Click me...
    </button>
    
    <input 
    data-uilinkname="TextBox1" 
    data-uilinkevent="input" 
    data-uilinkeventfunc="OnTextBox1Input">
    ...
    </input>
  </div>
  
  <div id="Modul2">
    <button data-uilinkname="Button1" >
    Click me...
    </button>
    
    <input data-uilinkname="TextBox1">
    ...
    </input>
  </div>
  
  <script>
  // Here comes our javascript...
  </script>
  
  </body>
</html>
```

Other stuff:
=========

[![Build Status](https://travis-ci.org/circy/UILink.js.png?branch=master)](https://travis-ci.org/circy/UILink.js)

License:
=========
Copyright (c) 2014 Sebastian Kreissl

MIT (http://www.opensource.org/licenses/mit-license.php)
