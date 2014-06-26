//$Id$
(function (Src, Def){
    
     Def(['application/main'], function (App){                           //No I18N    
                        
                App.ApplicationRoute    = Em.Route.extend({

                        model: function() {
                               
                        }
                });
                        
           
                 App.LauncherRoute    = Em.Route.extend({
                        model: function() {
                                return {"leads":["list"],"mail":["gmail","zmail"]};             //No I18N    
                        }
                 });
           
       });
    
})(this, define);