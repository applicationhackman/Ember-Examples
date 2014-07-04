/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var App  = Em.Application.create({
});

(function (){
    
    
    App.NotesAdapter    =   DS.LSAdapter.extend({
      namespace       :   "Rich Notes"
    });
    
    App.ApplicationRoute     =  Em.Route.extend({
        controllerName       :  "notes",
        model               :   function (){
            var notes       =   this.store.find("notes");
//            console.log(notes," notes ",notes.get("content"));
//            console.log("notes ",notes.items('firstObject'));
            return  notes;
        }
        
    });
    
   
    
    Ember.Handlebars.helper('firstLine', function(string) {
        return string.substr(0, string.indexOf("\n"));
    });
    
    Ember.Handlebars.helper('trim', function(string) {
        return string.trim();
    });
    
    
})();

    
    
    
    
    
   
        


