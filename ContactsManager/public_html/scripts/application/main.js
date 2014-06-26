//$Id$
/*
 * Chandrasekar.g
 * @param App
 */

/*
 * 
 *  Creating the Application
 *  Application properties such as debugging, Logging options  
 *  
 */

(function (Src, Def) {
    
    Def(
            ['application/app'],                                                //No I18N    
            function (AppSeed){
                
                 var App = AppSeed.create({
                 });
             
                 App.deferReadiness();
                 
                return App;    
            }
    );
    
    
})(this, define);