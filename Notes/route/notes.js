/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
  
  App.NotesIndexRoute      = Em.Route.extend({
        needs        : "id", 
        model: function(param,id) {

            var notes = this.get("store").find("notes");
        }
    });
  
    
})(this,App);