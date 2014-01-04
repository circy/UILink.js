UILink.js
=========
UILink.js combines classes or objects with elements from the DOM, for example, Buttons, inputs and so on.
Classes or objects with extended members that are generated from the html and it can simple events are bound. It is required JQuery. It can be used as query plugin, but can also be integrated into different module systems.

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
Create a object of UILink:
``` Javascript
// If she is working with a module system or even as a Global event emitter to 
// disposal have passed it this easy to intercept the constructer to events from UILink.
var myUILink = new UILink();
```

Part 3:
For illustrative purposes, we create a small class:
(For convenience, we put everything scripte simply in the body tag of the html 
file or in a script - Tag.)

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

Part 4:
Announce the test object the UILink

``` Javascript
// Creat a object from the test Class
var testObject = new Test();
var elem = $("body");
// Add the object to UILink
// Param 1: the object 
// Param 2: Prefix the member variables in which the UI elements to be stored
// Param 3: In which area of ​​the DOM UI elements can occur. (JQuery - Selctorelement)
myUILink.AddUiLink(testObject,"_UI",elem);

```

Part 5:
Next, we make two ui elements in the dom

``` HTML
<body>
  <button data-uilinkname="_UIButton1" data-uilinkevent="click" data-uilinkeventfunc="OnButton1Click">MyButton</button>
  <input data-uilinkname="_UITextBox1" data-uilinkevent="input" data-uilinkeventfunc="OnTextBoxInput">MyInput</input>
</body>
```
data-uilinkname: is the name ob the member variables in which the UI elements to be stored.
In addition, you can also still the same events or even equal to either the appropriate funtion specify
data-uilinkevent: the event "click, input..." (jquery)
data-uilinkeventfunc: The name of a function in an object that is executed when the events occur

Part 6:
This UILink works you have to trigger an event to the selector object in our case the "body". This makes sense if you divide a page into different areas and regions for each object with a suitable template is ready. The display changes occur ui elemnte to or disappear and every time the word jquery function .Html() is called. Every time the function. Html () is called simply hangs .Trigger("UILinkUpdate") in it. or when working as in, for example only in the body one makes you simply. 

``` Javascript
elem.trigger("UILinkUpdate");
``` 

alternative you can also, if you do not want to trigger the dome event, in its Class object or a property to add the name "_UILink" this property provides a function called at disposal. "Update ()" can be called as soon as the object has been added to UILink.

``` Javascript
function Test()
{
  this._UIButton1 = null;
  this._UITextBox1 = null;
  
  //new Probertie
  this._UILink = null;
}
Test.prototype.OnButton1Click = function(sender){
  alert("The Contant of the Button is: " + sender.html());
};
Test.prototype.OnTextBoxInput = function(sender){
  this._UIButton1.html(sender.val());
};
// a function this wos called, if print in the dom
Test.prototype.Print = function(){
  this._UILink.Update();
};
```

[![Build Status](https://travis-ci.org/circy/UILink.js.png?branch=master)](https://travis-ci.org/circy/UILink.js)

License:
=========
Copyright (c) 2014 Sebastian Kreissl

MIT (http://www.opensource.org/licenses/mit-license.php)
