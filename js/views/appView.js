// Backbone View - App View for the whole app
var app = app || {};

// The overall app view
app.AppView = Backbone.View.extend({
	// Bind to existing container div
	el: '#container',
	
	// Underscore templated create in index.html
	mainTemplate: _.template( $('#view-template1').html()), 

	initialize: function () {
		this.render();
		console.log("App View initialized");
	},

	render: function () {
		this.$el.html("the view works");
	}
});