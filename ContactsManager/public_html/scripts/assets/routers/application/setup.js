//$Id$
/*
 * Chandrasekar.g
 */

(function(Src, Def) {         
         
         App.Router.map(function() {
             
             this.resource(  
                 'setup',                                                                                                                     //No I18N         
                 {path: '/setup/:type'},                                                                                                            //No I18N    
                 function() {
                   
                      require([
                          'controllers/application/'+this.parent+'Controller',			//No I18N
                          'routes/application/'+this.parent+'Route',					//No I18N
                          'views/application/'+this.parent+'View'						//No I18N
                      ]);
                      
                 }
             );   
     
         });
          
    
})(this, define);