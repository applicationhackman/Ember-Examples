(function(tar) {
       Ember.Handlebars.helper('renderHTML', function(content) {
          return new Handlebars.SafeString(content);
       });
             
})(this);


