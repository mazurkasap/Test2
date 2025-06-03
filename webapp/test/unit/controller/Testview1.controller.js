/*global QUnit*/

sap.ui.define([
	"test1/controller/Testview1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Testview1 Controller");

	QUnit.test("I should test the Testview1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
