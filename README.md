UILink.js
=========
UILink is a small library, with whose help it is UI - can bring elements in conjunction with variables from objecten.
For example, you have a button in the DOM and have a object with a property "_UIButton1" then UILink cares about is deposited almost automatically behind the eigenscht really the button from the DOM. Next Below I show how you can use UILink.
UILink.js used JQuery and is for the Node.js module system Custom. 
But can also be used without module system (Webpack) and without event emitter, jquery in any case.

Using:
=========
This summary shows the handling of UILink. In the description I show how with a module system (Webpack - used the example in examples folder is a complete project in Webpack in the UILink) and ease of use without the module system.

Part 1:
The integrate jquery and UILink:
``` HTML
<html>
  <head>
    <title>UILink.js - Test</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/x.x/jquery.min.js"></script>
    <script type="text/javascript" src="lib/UIlink.js"></script>
  </head>
  <body>
  </body>
</html>
```` 

Part 2:
Create a object of UILink without event emitter:
``` Javascript
//If she is working with a module system or even as a Global event emitter to disposal have passed it this easy to intercept the constructer to events from UILink.
var myUILink = new UILink();
```

Part 3:
For illustrative purposes, we create a small class:
(For convenience, we put everything scripte simply in the body tag of the html file or in a <script> - Tag.)

``` Javascript
function Test()
{
  this._UIButton1 = null;
  this._UITextBox1 = null;
}
Test.prototype.OnButton1Click = function(sender){
  alert("The Contant of the Button is: " + sender.html());
};
Test.prototype.OnTextBoxInput = function(sender){
  this._UIButton1.html(sender.val());
};

```

License:
=========
Copyright (c) 2014 Sebastian Kreissl

MIT (http://www.opensource.org/licenses/mit-license.php)
