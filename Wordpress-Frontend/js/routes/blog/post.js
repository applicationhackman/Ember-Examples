
(function(tar) {
       var loading = true;
       App.Blog1PostsPostRoute    = Em.Route.extend({
                        model: function(data, trans) {
                             var  record  =   this.store.find('posts',data.id);
                            return record;
                        },
                        renderTemplate      :   function(c,m) {
                                this._super(c,m);
                                this.render('Blog1PostComments',{
                                    outlet  :   'postComments',
                                    into    :   'Blog1Posts'
                                });                                
                                this.render('blog1PostAddComment',{
                                    outlet  :   'postAddComment',
                                    into    :   'Blog1Posts'
                                });                                
                        }
        });
        
        App.Blog1PostsPostController      = Em.Controller.extend({
                    commentsVisible       : false,     
                    actions               : {
                            showPostComments    :   function() {
                                    var model   =   this.model; 
                                     this.set('commentsVisible',!this.get('commentsVisible'));   
                                        
                                    if(model.get('hasComments')){
                                        sstore =    this.store;
//                                        var comments = this.store.find('post',model.id+'/comments');
                                    }
                            },
                            expandPostComments  :   function () {
                                    console.log("expandPostComments csk");
                            }
                            
                    }
        });
        
        
        App.Blog1PostCommentsView              =   Em.View.extend({
            classNames                  :   ['blog1PostComments'],
            classNameBindings           :   ['expandComments'],
            expandComments              :   false,
            templateName                :   'blog1PostComments',
            expandMe                    :   function(val) {                
                    console.log("CSK ",this.get('expandComments'));
                this.set('expandComments',this.get('controller.commentsVisible'));   
            }.observes('controller.commentsVisible'),
            render  :   function(buffer) {
                this._super(buffer);    
//                this.set('expandComments',true);
                
            }
        });
        
        
        App.blog1PostAddCommentView      = Em.View.extend({
              templateName                :   'blog1PostAddComment',
        });
        
        App.Blog1PostCommentsRoute  = Em.Route.extend({
            model: function() {
                return [{id:1}];
            }
    });
                
})(this);


