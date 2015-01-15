// Backbone Model - Day
var app = app || {};

"use strict";

app.Day = Backbone.Model.extend ({

	// Each day has a user, timestamp, clock in, and clock out
	defaults: {
		user: 'Kris',
		timestamp: 'Current Date Object', //need to figure out date timestamp - get current time and store it in default timestamp
		clockIn: '9:00 AM', //need to convert to date object
		clockOut: '5:00 PM', //need to convert to date object
		completed: false
	},

	// Set the clockIn time
	setIn: function (timeIn) {
		this.set("clockIn",timeIn);
		console.log("Clock in set to "+ timeIn);
	},

	// Set the clockOut time
	setOut: function (timeOut) {
		this.set("clockOut", timeOut);
		console.log("Clock out set to "+timeOut);
	},

	// Sum hours for that day
	getTotal: function () {
		var sum = this.get("clockOut") - this.get("clockIn");
		console.log("Total for " + this.get("timestamp") + " = "+ sum + " hours");
		this.set("total",sum);
		return sum;
	},

	// 1. Connect to a button that submits hours to a new PayPeriod collection
	// 2. Set completed to false and go to "completion" page
	submit: function () {
		/* Figure out how to send total hours to a new PayPeriod Collection */
		this.set("completed", true);
		console.log(this.get("total")+ " hours submitted to current pay period");
	}
});