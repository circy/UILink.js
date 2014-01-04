var $ = require("jquery");
var template = require("./modul1.jade");

function Modul1(area)
{
    this._area = area;

    this._UILink = "null";
}

Modul1.prototype.print = function(){
  this._area.html(template);
  this._UILink.Update();
  this._UIButton2.on("click",function() {
      alert($(this).html());
  });
  this._UITextBox1.val("Gib was ein");
};

Modul1.prototype.OnButton1Click = function (sender) {
    alert(sender.data("uilinkevent"))
    this._UIButton1.html("enter text in modul1");
};

Modul1.prototype.OnTextBox1 = function(sender){
    this._UIButton2.html(sender.val());
};

module.exports = Modul1;