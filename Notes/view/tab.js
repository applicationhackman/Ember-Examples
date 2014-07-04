/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (win,App){
  
   App.TabView = Em.View.extend({
        classNames: ['tabsNavigationBar'],
        click     : function (e){

        },
        doubleClick    :   function (e){
            
        },
        focusOut        :   function (e, tar){
            var title        =   $(e.target).text();
            console.log("title ",title);
        }
    });
    
})(this,App);