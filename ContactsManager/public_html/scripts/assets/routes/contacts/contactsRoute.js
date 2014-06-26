(function(tar, def) {
    def(
            ['application/main'],
            function (App) {
                console.log("application is here ",App);
                
                App.ContactsRoute    = Em.Route.extend({
                    model: function() {
                        console.log("contact model route ");
                        var contacts    =   [
                            {
                                'id'  :   1,
                                'firstname'   : 'CSK',
                                'lastname'   : '88',
                                'contactno'  :  9767868183,
                                'address'     : 'No:18, SSK'   
                                
                            },
                            {
                                'id'  :   2,
                                'firstname'   : 'poke',
                                'lastname'   : '88',
                                'contactno'  :  9767868183,
                                'address'     : 'No:18, SSK'   
                                
                            },
                            {
                                'id'  :   3,
                                'firstname'   : 'yak',
                                'lastname'   : '88',
                                'contactno'  :  9767868183,
                                'address'     : 'No:18, SSK'   
                                
                            },
                            {
                                'id'  :   4,
                                'firstname'   : 'hack',
                                'lastname'   : '88',
                                'contactno'  :  9767868183,
                                'address'     : 'No:18, SSK'   
                                
                            }
                            
                            
                        ]
                        
                        return contacts;
                        
                        
                        
                    }
                });
            }
        )
    
})(this, define);