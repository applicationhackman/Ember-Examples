//$Id$

/*
 * Chandrasekar.g
 */
    
(function(Src, Def) {
    
    
   App.SetupController  =   Em.Controller.extend({
       actions              :   {
           
            skip            :   function (data, view){
                                
                                 this.transitionToRoute('setup',data);	//No I18N
                                 
            },
            next            :   function(data) {
                                this.transitionToRoute('setup',data);	//No I18N
            },
            assaignee       :   function(data) {
                
                                console.log("data on assaignee ",data);
                                 this.send(data.title, data.action); 
                
            }
       },
       
    });
   
    
})(this, define);