(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        root.UILink = factory(root.jQuery);
    }
}(this, function ($) {
	function AddUILink(toParseObject, area) {
		var elements = area.find("[data-uilinkname]");
		elements.each(function(idx) {
			var item = elements.eq(idx);
			var name = item.data("uilinkname");
			var upperCaseName = name.substr(0, 1).toUpperCase() + name.substr(1);
			var event = item.data("uilinkevent");

			toParseObject["_" + name] = item;

			if(event) {
				var functionName = item.data("uilinkeventfunc");
				if(functionName) {
					bindEvent(toParseObject, event, functionName);
				} else {
					throw new Error("No data-uilinkeventfunc attribute found");
				}
			} else {
				for(var propertyName in toParseObject) {
					if(/^[oO]n/.test(propertyName) && propertyName.substr(-name.length) === upperCaseName) {
						event = propertyName.substr(2, propertyName.length - name.length - 2).toLowerCase();
						bindEvent(toParseObject, event, propertyName);
					}
				}
			}
			function bindEvent(toParseObject, eventName, propertyName) {
				item.on(eventName, function(event) {
					toParseObject[propertyName](item, event);
				});
			}
		});
	}

	$.fn.uiLink = function(toParseObject) {
		AddUILink(toParseObject, this);
	};

	return function(toParseObject, area) {
		var item = {};
		area.on("UILinkUpdate", item.Update = function() {
			AddUILink(toParseObject, area);
		});
		toParseObject._UILink = item;
		return item;
	}
}));