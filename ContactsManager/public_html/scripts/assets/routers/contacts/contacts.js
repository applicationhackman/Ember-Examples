//$Id$

/*
 * Chandrasekar.g
 */

(function(Src, Def) {

    App.Router.map(function() {

        this.resource(  
             "Contacts",                                                                                                                   //No I18N         
             {path: "/contacts"},                                                                                                          //No I18N    
             function(arguments) {
                  require([

                     "views/contacts/contactsView",                                                                                            //No I18N    
                     "routes/contacts/contactsRoute"                                                                                            //No I18N    

                 ]);

             }
         );   

    });
    
})(this, define)
