var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
Backbone.$.ajaxSetup({ ifModified: true });

var RequestData = Backbone.Model.extend({
    sync: function(method, model, options) {
        options || (options = {});
        switch (method) {
            case "read": 
                options.url = "https://jsonplaceholder.typicode.com/photos";
                break;
        }

        if (options.url){
            Backbone.sync(method, model, options);
        }
    }

});

module.exports = RequestData;