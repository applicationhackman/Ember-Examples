//$Id$

/*
 * Chandrasekar.g
 */

(function(Src, Def) {
    
        Def(
                [
                    'ember',																	//No I18N
                    'application/main',                                                                                                                         //No I18N
                    'handlebars',																//No I18N	
                    'text!templates/application/setup/setupTemplate.html',											//No I18N
                    'views/application/orgView',                                                                                                                //No I18N	
                    'views/application/userLevelsView',                                                                                                         //No I18N	
                    'views/application/inviteUsersView',                                                                                                        //No I18N	
                    'views/application/leadConfView'                                                                                                            //No I18N	
                ],
                function(Em, App, handlebars, setupTemplate, orgView, userLevelsView, inviteUserView, leadConfView) {


        App.SetupView                                           =   Em.View.extend({
                viewType                                        :   "compact-middle-center",
                classNames                                      :   'trans-setup',                                                                     //No I18N
                classNameBindings                               :   ['viewType'],						 //No I18N	
                template                                        :   Em.Handlebars.compile(setupTemplate),									
                actions                                         :   {
                    changeScreenType                                :   function (name) {
                            console.log("change view screen ",this.get('viewType'));
                            
                            this.set('viewType',name);
                    }
                }
                

        });

        for(var i in arguments){
            if(arguments[i].isClass){
                console.log("arguments on setupview ",arguments[i]);
            }
            
        }
                

         App.SetupView.OrgView                                  =   orgView;


         App.SetupView.UserlevelsView                           =   userLevelsView;


         App.SetupView.InviteusersView                          =   inviteUserView;


         App.SetupView.LeadconfView                             =   leadConfView;


         App.SetupView.DummyView                                =   Em.View.extend({

         });
         
        
    });
    
      
    
})(this, define);