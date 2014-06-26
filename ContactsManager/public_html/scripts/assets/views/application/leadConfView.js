//$Id$

/*
 * Chandrasekar.g
 */

(function (Src, Def){
    
    Def([
         'ember',																	//No I18N
         'application/main',                                                                                                                            //No I18N
         'text!templates/application/setup/leadConfiguration.html',                                                                                     //No I18N	
    ],function (Em, App, template){
        
            var LeadConfView = Em.View.extend({
            name                                            :   "LeadconfView",
            classNames                                      :   ['leadconf-form'],    
            willInsertElement                               :   function() {

                this.get('parentView').send('changeScreenType','fullscreen-page');

            },
            template                                        :   Em.Handlebars.compile(template)
            
            }); 

            return  LeadConfView;
    });
    
    
})(this, define);

