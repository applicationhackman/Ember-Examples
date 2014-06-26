//$Id$
(function (Src, Def){
    
    
       Def(
		   ['application/main','ember'],  //No I18N    
		   function (App, Em){     
           
              
              
                 require(
                         
                    [
                     'routes/application/init',											//No I18N
                     'routers/contacts/contacts'												//No I18N
                     
                    ]
                         
                 ,function() {
                                    console.log("Application ready ");
                    });
         
           
        
           
                 
       });
    
    
})(this, define);