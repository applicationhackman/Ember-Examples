//$Id$

/*
 * Chandrasekar.g
 */

(function (Src, Def){
    
    Def([
         'ember',																	//No I18N
         'application/main',                                                                                                                            //No I18N
         'text!templates/application/setup/orgSetup.html'												//No I18N
    ],function (Em, App, template){
        
            var OrgView = Em.View.extend({
            name                                            :   'OrgView',    
            template                                        :   Em.Handlebars.compile(template)
            
            }); 

            return  OrgView;
    });
    
    
})(this, define);

