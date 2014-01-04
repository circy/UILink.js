//EINBINDEN VON UILink
var AddUILink = require("../../");

//jquery
var $ = require("jquery");

//einbinden von 2 demo classen
var modul1 = require("./modul1");
var modul2 = require("./modul2");

var test1 = new modul1($("#modul1"));
var test2 = new modul2($("#modul2"));

AddUILink(test1, $("#modul1"));

test1.print();
test2.print();

