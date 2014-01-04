var $ = require("jquery");
var template = require("./modul2.jade");
require("../../");

function Modul2(area)
{
    this._area = area;

    this._UIButton1 = "null";
    this._UIButton2 = "null";
    this._UITextBox1 = "null";
}

Modul2.prototype.print = function(){
    this._area.html(template).uiLink(this);
    this._UIButton2.on("click",function() {
        alert($(this).html());
    });
    this._UITextBox1.val("enter text in modul2");
};

Modul2.prototype.OnButton1Click = function (sender) {
    alert(sender.data("uilinkevent"))
    this._UIButton1.html("Hallo from modul2");
};

Modul2.prototype.OnTextBox1 = function(sender){
    this._UIButton2.html(sender.val());
};

module.exports = Modul2;