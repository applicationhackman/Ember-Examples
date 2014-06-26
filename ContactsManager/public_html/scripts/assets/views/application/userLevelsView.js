//$Id$

/*
 * Chandrasekar.g
 */

(function (Src, Def){
    
    Def([
         'ember',																	//No I18N
         'application/main',                                                                                                                            //No I18N
         'text!templates/application/setup/userLevels.html',												//No I18N	
    ],function (Em, App, template){
        
            var UserLevelsView = Em.View.extend({
            classNames                                      :   ['flexrow-view'],    
            init                                            :   function(parameters) {
                        console.log(this," arg ",arguments);
            },
            willInsertElement                               :   function() {

                this.get('parentView').send('changeScreenType','fullscreen-page');

            },            
            template                                        :   Em.Handlebars.compile(template)
            
            }); 

            return  UserLevelsView;
    });
    
    
})(this, define);

