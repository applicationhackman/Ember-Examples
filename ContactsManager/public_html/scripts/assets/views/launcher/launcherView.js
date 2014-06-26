//$Id$
(function (Src, Def){
    
    Def(
            ['application/main', "handlebars" ,'text!templates/launcher/launcherTemplate.html'],              //No I18N    
            function (App, handlebars , launcherView){
                
                
                App.LauncherView = Em.View.extend({
                   
                    defaultTemplate :   Em.Handlebars.compile(launcherView)
                    
                });
                App.advanceReadiness();
       }
                    
                    
            
    );
    
})(this, define);