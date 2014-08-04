(function(tar) {
    
    App.BlogsRoute   = Em.Route.extend({
        model: function() {
            var blogslist =   [
                {
                    id      :   1,
                    title   :   'Front End'
                },
                {
                    id      :   2,
                    title   :   'Server Side'
                }
            ];
            
            return blogslist;
            
        }
    });
    
})(this);


