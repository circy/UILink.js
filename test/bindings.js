var SandboxedModule = require('sandboxed-module');
SandboxedModule.registerBuiltInSourceTransformer("istanbul");

var should = require("should");

describe("bindings", function() {

	it("should bind a single event", function() {
		var AddUILink = SandboxedModule.require("../", {
			requires: {
				jquery: {}
			}
		});
		var testFunctionCalled = false, updateEventBound = false;
		var testObj = {
			testFunction: function(item, event) {
				item._fakeSender.should.be.eql(true);
				event._fakeEvent.should.be.eql(true);
				testFunctionCalled = true;
			}
		};
		AddUILink(testObj, {
			find: function(str) {
				String(str).should.be.eql("[data-uilinkname]");
				return {
					each: function(iterator) {
						iterator(0);
					},
					eq: function(idx) {
						Number(idx).should.be.eql(0);
						return {
							_fakeSender: true,
							data: function(str) {
								switch(str) {
									case "uilinkname": return "testname";
									case "uilinkevent": return "click";
									case "uilinkeventfunc": return "testFunction";
									default: throw new Error("Wrong inputs to .data()");
								}
							},
							on: function(event, callback) {
								String(event).should.be.eql("click");
								(typeof callback).should.be.eql("function");
								callback({
									_fakeEvent: true
								});
							}
						};
					}
				}
			},
			on: function(event, callback) {
				String(event).should.be.eql("UILinkUpdate");
				updateEventBound = true;
			}
		});
		testObj.should.have.property("_UILink");
		testObj._UILink.Update();

		testObj.should.have.property("_testname");
		testObj._testname.should.have.type("object");
		testObj._testname._fakeSender.should.be.eql(true);
		testFunctionCalled.should.be.eql(true);
		updateEventBound.should.be.eql(true);
	});
});