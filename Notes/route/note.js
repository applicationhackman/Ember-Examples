/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
  
  App.NoteRoute      = Em.Route.extend({
        needs        : "id", 
        model: function(param,id) {

            var note    =   this.store.find("notes",param.id);
            return note;
            
        }
    });
  
    
})(this,App);