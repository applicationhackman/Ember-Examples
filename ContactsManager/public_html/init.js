//$Id$
(function(Src, Def) {
    
    Def(
            
            ['scripts/conf/applicationConf'],                                   //No I18N
            
            function (conf){
                
                requirejs.config(conf);
                
                require(
                        
                        ['ember'],                               //No I18N
                        function (Em){

                            require(['application/main'], function (App){       //No I18N    
                               
                                                /* This app global variable has exposed temp will be removed */
                                                Src.App = App;  
                              
                                    require(
                                           [
                                                "routers/application/init"                //No I18N
                                            ],
                                           function (App){

                                           }
                                      );
                               
                                                        
                                
                            });
                                                            
                        }
                
                );

            }
            
    )
    
})(this, define);
