var Backbone = require('backbone');
var templateHbs = require('../templates/home.template.hbs');
var RequestData = require('../collections/request.collection');

var HomeView = Backbone.View.extend({
	el: '#main',
	templateHbs: templateHbs,
	initialize: function() {
		var self = this;
		this.data = new RequestData({});
		this.data.fetch({
			success: (function () {
			}),
			error: (function (e) {
				self.render("Error, api not found");
			}),
			complete: (function (e) {
				self.render(e.responseJSON);
			})
		});
	},
	render: function(response) {
		if("Error, api not found" === response){
			this.$el.html(templateHbs(
				{error: response}
				)
			);		
		}
		this.$el.html(templateHbs(
			{arrayData: response}
			)
		);
	}
});

module.exports = HomeView;
