define([
	'jquery',
	'backbone',
	'../collections/todos',
	'common'
], function($, Backbone, Todos, Common) {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			Common.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			Todos.trigger('filter');
		}
	});

	return TodoRouter;
});
