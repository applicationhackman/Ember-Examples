//$Id$

/*
 * Chandrasekar.g
 */

/*
 *  This files totally covers the application's configurations.
 */

(function (Src, Def) {
    
    Def({
        
        /*  Creating the modules to load with the corresponding directory. */
        
        paths   :   {
            
            "application"       :   "scripts/application",                          //No I18N    
            "models"            :   "scripts/assets/models",                        //No I18N    
            "controllers"       :   "scripts/assets/controllers",                   //No I18N    
            "views"             :   "scripts/assets/views",                         //No I18N            
            "templates"         :   "templates",                                    //No I18N    
            "routers"           :   "scripts/assets/routers",                       //No I18N        
            "routes"            :   "scripts/assets/routes",                        //No I18N    
            
            
            "lib"               :   "lib",                                  //No I18N    
            "ember"             :   "lib/ember/ember_1_5_1/ember",                            //No I18N    
            "handlebars"        :   "lib/handlebars/handlebars_1_3_0/handlebars",                            //No I18N    
            "jquery"            :   "lib/jquery_2_0_3/jquery",                            //No I18N    
            
            
            text                :   "lib/requirejs/requirejs_2_0_12/text",                              //No I18N    
            
        },
        
        
        /*  Shim will handle module and It's dependency files. */
        
        shim    :   {
            handlebars  : {
                exports: 'Handlebars'									//No I18N
             },
            ember               :   {
                
                deps            :   ["jquery", "handlebars"],               //No I18N    
                exports         :   "Em"                                            //No I18N    
                
            }
            
        },
        
        /*  
         * Configuring the handlebars template file extension.
         * .html has file extension chosen to the due to availabil syntax highlighting  
         */
        
        hbs                     :   {
            helpers             :   true,
            i18n                :   false,      
            templateExtension   :   "html"                                            //No I18N    
        }
        
    });
    
})(this, define);