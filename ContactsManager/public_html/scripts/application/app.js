//$Id$

/*
 * Chandrasekar.g
 * @param Ember
 */

/*
 *  Extending the application 
 */

(function (Src, Def) {
    
     Def(
            ['ember'],                                                          //No I18N    
            function (Em){

                  var AppSeed = Em.Application.extend({});
                  return  AppSeed;

            }
        );

        
})(this, define);