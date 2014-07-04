/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
  
    App.NoteController     =    Em.Controller.extend({
        init               :    function (){
            console.log("Note controller init ");  
        },
        
        actions            :    {
            
            updateNote     :    function (data, note){
                
                var note    =   this.get('model.note');
                var title   =   note.substr(0, note.indexOf("\n"));
                data.set('title',title);
                data.set('note',note);
                data.save();
            }   
            
        },
        setupController     :   function (c,m){
            console.log("Note this ",c," modle ",m);
        }
        
    });
    
})(this,App);