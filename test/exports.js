var SandboxedModule = require('sandboxed-module');
SandboxedModule.registerBuiltInSourceTransformer("istanbul");

var should = require("should");
describe("exports", function() {
	
	it("should add itself to the jquery prototype", function() {
		var fake$ = {
			fn: {}
		};
		SandboxedModule.require("../", {
			requires: {
				jquery: fake$
			}
		});
		(typeof fake$.fn.uiLink).should.be.eql("function");
	});

	it("should export a function", function() {
		var exports = SandboxedModule.require("../", {
			requires: {
				jquery: {}
			}
		});
		(typeof exports).should.be.eql("function");
	});
});
