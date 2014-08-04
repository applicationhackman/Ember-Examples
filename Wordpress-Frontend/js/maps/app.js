(function(tar) {
    
     App.Router.map(function() {
            
             this.resource
            (
                    "blogs",   /* front end blog*/
                    {path: "/blogs"},
                    function() {
                       
                    }
            ); 
    
         
            this.resource
            (
                    "blog1",   /* front end blog*/
                    {path: "/blog1"},
                    function() {
                        this.resource('Blog1Posts',{path:'/posts'},function() {
                            this.route('post',{path:'post/:id'}); 
                            this.route('comments',{path:'post/:id/comment'}); 
                        });
                    }
            ); 
    
            this.resource
            (
                    "me",   /* front end blog*/
                    {path: "/me"},
                    function() {
                       
                    }
            ); 
    
    
            
    
    
        });
})(this);


