/*!
 * UILink.js v0.1
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

function UILink(eventHandeler)
{
    this._eventHandeler = eventHandeler;
    this._items = [];
}

UILink.prototype.AddUILink = function (toParseObject, varPrefix, area) {
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
};

UILinkItem.prototype.StartParsing = function () {
    var uiMembers = [];
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
                        this._toParseObject[temp.data("uilinkeventfunc")](temp);
                    }else
                    {
                        if(this._eventHandeler != undefined)
                            this._eventHandeler.emit("UILink_" + this.name + "_" + item + "_" + temp.data("UILinkEvent"), temp);
                    }
                }.bind(this)).bind(this);
            }
        this._toParseObject[item] = temp;
    }.bind(this));
    if(this._eventHandeler != undefined)
        this._eventHandeler.emit(this._eventNameParsingFinish);
};
