/*!
 * UILink.js v0.3 - for Webpack ( https://github.com/webpack/webpack )
 *
 * This is a small library with their help you can HTML elements
 * in connection with properties in a class or bring object.
 *
 * For more information please go to GitHub "circy" and look at the documentation of "UILink"
 * https://github.com/circy/UILink.js
 *
 * Copyright (C) 2014 Sebastian Kreissl @gibthub circy
 * Licensed MIT
 * http://www.opensource.org/licenses/mit-license.php
 */

var $ = require("jquery");

function UILink(eventHandeler)
{
    this._eventHandeler = eventHandeler;
    this._items = [];
}

UILink.prototype.AddUILink = function (toParseObject, varPrefix, area) {

    if(toParseObject == undefined ||
       typeof toParseObject != "object" ||
       varPrefix == undefined ||
       varPrefix == "" ||
       area == undefined ||
       area == "")
    {
        console.log("With the given parameters, what is not true, it was not created a new UILink object.");
        return;
    }

    var ObjInfo;
    ObjInfo = {
        EventHandeler: this._eventHandeler,
        ToParseObject: toParseObject,
        VarPrefix: varPrefix,
        Area: area,
        Name: toParseObject.constructor.name
    };
    this._items.push(new UILinkItem(ObjInfo));
};

function UILinkItem(ObjInfo)
{
    this._eventHandeler = ObjInfo.EventHandeler;
    this._toParseObject = ObjInfo.ToParseObject;
    this._varPrefix = ObjInfo.VarPrefix;
    this._area = ObjInfo.Area;
    this._name = ObjInfo.Name;
    this._eventNameStartParsing = "null";
    this._eventNameParsingFinish = "null";
    this.Init();
}

UILinkItem.prototype.Init = function () {
    this._eventNameParsingFinish = "UILink_" + this._name + "_ParsingFinish";
    this._area.bind("UILinkUpdate",this.StartParsing.bind(this));

    if(this._toParseObject["_UILink"] != undefined)
    {
        this._toParseObject["_UILink"] = this;
    }
};

UILinkItem.prototype.Update = function(){
   this.StartParsing();
};

UILinkItem.prototype.StartParsing = function () {
    var uiMembers = [];

    if(this._toParseObject == undefined)
    {
        console.log("Object reference lost in " + this._name);
        return;
    }

    Object.getOwnPropertyNames(this._toParseObject).forEach(function(item) {
        if(item.length >= this._varPrefix.length && item.substr(0,this._varPrefix.length) == this._varPrefix) uiMembers.push(item);
    }.bind(this));
    uiMembers.forEach(function(item){
        var temp = null;
        temp = this._area.find('[data-uilinkname="' + item + '"]');
            if(temp.data("uilinkevent") != undefined)
            {
                temp.on(temp.data("uilinkevent"),function()
                {
                    if(temp.data("uilinkeventfunc") != undefined)
                    {
                        if(typeof this._toParseObject[temp.data("uilinkeventfunc")] == "function")
                        {
                            this._toParseObject[temp.data("uilinkeventfunc")](temp);
                        }else
                        {
                            console.log("The specified HTML function does not match any function from the object match. The tryed Functionname:: "
                                        + temp.data("uilinkeventfunc"));
                        }
                    }else
                    {
                        if(this._eventHandeler != undefined)
                        {
                            this._eventHandeler.emit("UILink_" + this.name + "_" + item + "_" + temp.data("UILinkEvent"), temp);
                        }else
                        {
                            console.log("No Eventhanderler in UILink configt.");
                        }
                    }
                }.bind(this)).bind(this);
            }
        this._toParseObject[item] = temp;

        if(item == "_UILink")
        {
            this._toParseObject[item] = this;
        }

    }.bind(this));
    if(this._eventHandeler != undefined)
    {
        this._eventHandeler.emit(this._eventNameParsingFinish);
    }else
    {
        console.log("No Eventhanderler in UILink configt.");
    }
};

module.exports = UILink;
