/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,app){
    
    App.Notes    = DS.Model.extend({
        title   : DS.attr('string'),
        note    : DS.attr('string')
    });
    
    
    
   
    
})(this,App);
