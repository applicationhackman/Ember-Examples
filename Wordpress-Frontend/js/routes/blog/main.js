(function(tar) {
    
       App.Blog1Route   = Em.Route.extend({           
            renderTemplate  :   function() {
                this.render();
                this.render('Blog1Topbar',{outlet:'Blog1Topbar',into:'blog1'});
            }
            
        });
        
    
})(this);


