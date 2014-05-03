UILink.js
=========
UILink.js combines classes or objects with elements from the DOM, for example, Buttons, inputs and so on.
Classes or objects with extended members that are generated from the html and it can simple events are bound. It is required JQuery. It can be used as query plugin, but can also be integrated into different module systems.

Include & Test
=========
Install or 
include by HTML-Tag:
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

Step 2:

Now a few test modules.
The modules look different also as the above html but both modules have completely the same radio tina quality. It is only to show that you can write much but little, reaching into compounds with UILink.js the same. ;-)

``` Javascript
//Modul1 with probertis
function Modul1(){
  this._Button1;
  this._TextBox1;
}

Modul1.prototype.OnButton1Click = finction(sender){
  alert(sender.html());
  this._TextBox1.val(sender.html());
};

Modul1.prototype.OnTextBox1Input = finction(sender){
  this._Button1.html(sender.html());
};

//Modul2 without probertis
function Modul2(){
}

Modul2.prototype.OnButton1Click = finction(sender){
  alert(sender.html());
  this._TextBox1.val(sender.html());
};

Modul2.prototype.OnTextBox1Input = finction(sender){
  this._Button1.html(sender.html());
};
```

Step 3:

Using UILink.js! 
First way:
``` javascript
var test1 = new Modul1();
//and now UIlink
AddUILink(test1,$("#Modul1"));
```
and whit Jquery:
``` javascript
var test2 = new Modul2();
//and now UIlink
$("#Modul2").uiLink(test2);
```

That's it. Now both modules are on the same page and can respond to the evente that were set in the html.

Must be matched with the classes or objects If in addition there html new elements this again.

The first way in which class or object, a member named _UILink was created. And this can be called in the class or in the Object.
``` javascript
this._UILink.Update();
```
The next way is Jquery:
``` javascript
$("#Modul2").trigger("UILinkUpdate");
```

Other stuff:
=========

Auto Test:
[![Build Status](https://travis-ci.org/circy/UILink.js.png?branch=master)](https://travis-ci.org/circy/UILink.js)

NPM Repo:
[![NPM version](https://badge.fury.io/js/uilink.js.png)](http://badge.fury.io/js/uilink.js)

License:
=========

Copyright (c) 2014 Sebastian Kreissl

MIT (http://www.opensource.org/licenses/mit-license.php)
