/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
    
    App.NotesController     =    Em.Controller.extend({
        
            actions         :    {
                createNote  :    function (){
                    var note        =   this.store.createRecord("notes");
                    note.set("note","");
                    note.save();
                   this.transitionToRoute("note",note.get('id'));   
                }, 
                showNote        :   function (id){                    
                   this.transitionToRoute("note",id);                   
                },
                deleteNote      :   function (data, id){
                    console.log(data," Delete note ",id);
                    data.deleteRecord();
                    
                    data.save();
                    
                }
            }
           
    });
    
  
    
})(this,App);