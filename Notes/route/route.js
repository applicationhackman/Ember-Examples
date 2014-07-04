/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
    
    App.Router.map(function() {
        this.resource
        (
                "notes",
                {path: "/"},
                function() {
                    console.log("Note  router is loading here ");
                    
                    this.resource(
                            "note",
                            {path:"/:id"},
                            function(){}
                    );
                    
                }
                        
        ); 
        
    });
   
    
})(this,App);