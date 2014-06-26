//$Id$
(function (Src, Def){
    
    Def(
            [
                'application/main',                                             //No I18N    
                'text!templates/contacts/contacts.html',                        //No I18N    
                'text!templates/contacts/actionbar.html',                       //No I18N    
                'text!templates/contacts/contactslist.html'                     //No I18N    
            ],              
            function (App, contactsTemplate, actionbarTemplate, contactslistTemplate){
                
                
//                console.log("contactslistTemplate ",contactslistTemplate);
                
                App.ContactsView = Em.View.extend({
                    classNames      :   ['contactsMain'],
                    template :   Em.Handlebars.compile(contactsTemplate)
                    
                });
                
                
                App.ContactsView.ActionBarView = Em.View.extend({
                   
                    template :   Em.Handlebars.compile(actionbarTemplate)
                    
                });
                
                
                 App.ContactsView.ContactsListView = Em.View.extend({
                   classNames   :   ["contactsListMain"],
                    template :   Em.Handlebars.compile(contactslistTemplate)
                    
                });
                
                
                App.advanceReadiness();

       }
                    
                    
            
    );
    
})(this, define);