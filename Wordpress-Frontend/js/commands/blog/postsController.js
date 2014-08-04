(function(tar) {
            App.Blog1Controller    = Em.Controller.extend({
                    actions :   {
                        renderView  :   function() {
                                $('.postListParent').toggleClass('reverseHView');
                        }
                    }
                
            });
            
            
            App.Blog1PostsController    = Em.Controller.extend({
                    id      :   0,    
                    actions :   {
                        gotoPost    :   function(data, trans) {
                            this.transitionToRoute('Blog1Posts.post',data.id);
                        },
                        reverseHView    :   function() {
                            this.set('hviewtype','reverseHView');
                        }
                    }
                
            });
            
            App.BlogPostItemController  = Em.Route.extend({
        
            });
            
            
})(this);


