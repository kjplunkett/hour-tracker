// Backbone View - App View for the whole app
var app = app || {};

"use strict";

app.AppView = Backbone.View.extend({

	// Bind to existing container div
	el: '#total-hours',
	
	// Underscore templated create in index.html
	mainTemplate: _.template( $('#view-template1').html()), 

	// Upon initializing tell bind relevant events
	initialize: function () {
		console.log("App View initialized");
		this.$timeIn = this.$('#timeIn').val();
		this.$timeOut = this.$('#timeOut').val();
		this.$submitButton = this.$('#submitButton');
		
		this.listenTo(app.payPeriod,'add',this.addDay());
	},
	
	// Render the updated hour total
	render: function () {
		this.$el.html("the view works");
	},

	// Add a day to the total 
	addDay: function () {
		console.log("Day added");
	}
});