(function(tar, def) {

        App.Blog1PostsRoute    = Em.Route.extend({
            redirect            :   function(data) {
                    this.transitionTo('Blog1Posts.post',data.content[0].id);
            },
            model: function(data, trans) {
                    sstore = this.store.find('posts');
//                    sstore.content.forEach(function(a){
//                        console.log(a.get('terms.category')[0].name)
//                    });
                    return this.store.find('posts');
            }            
        });
        
        App.BlogPostItemRoute    = Em.Route.extend({
                model: function() {

                }
        });
        
    
})(this);


