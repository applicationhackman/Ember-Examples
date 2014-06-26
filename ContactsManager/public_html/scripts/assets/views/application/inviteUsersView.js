//$Id$

/*
 * Chandrasekar.g
 */

(function (Src, Def){
    
    Def([
         'ember',																	//No I18N
         'application/main',                                                                                                                            //No I18N
         'text!templates/application/setup/inviteUsers.html',                                                                                           //No I18N	
    ],function (Em, App, template){
        
            var InviteUsersView = Em.View.extend({
            name                                            :   'InviteusersView',    
            template                                        :   Em.Handlebars.compile(template)
            
            }); 

            return  InviteUsersView;
    });
    
    
})(this, define);

