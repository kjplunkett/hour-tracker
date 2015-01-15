// Backbone Collection - Pay Period
var app = app || {};

"use strict";

var PayPeriod = Backbone.Collection.extend ({

	// Reference to this Collection's model
	model: app.Day,

	// Save all days under the 'days-backbone' namespace.
	localStorage: new Backbone.LocalStorage('days-backbone')

});

// Create global Pay Period collection
app.payPeriod = new PayPeriod();