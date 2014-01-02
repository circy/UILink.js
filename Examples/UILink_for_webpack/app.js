//EINBINDEN VON UILink
var uilink = require("./uilink");

//jquery
var $ = require("jquery");
//eein eventemitter (wird für uilink benötigt)
var events = require("events");
var eventEmitter = new events.EventEmitter();

//einbinden von 2 demo classen
var modul1 = require("./modul1");
var modul2 = require("./modul2");

var test1 = new modul1(eventEmitter,$("#modul1"));
var test2 = new modul2(eventEmitter,$("#modul2"));

var myUILink = new uilink(eventEmitter);
myUILink.AddUILink(test1,"_UI",$("#modul1"));
myUILink.AddUILink(test2,"_UI",$("#modul2"));

test1.print();
test2.print();

