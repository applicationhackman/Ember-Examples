(function(tar) {
    
    var  data   =   [
        {
            id          :   1,
            title       :   'It is me',
            description :   'Software Engineer',
            content     :   'This is chandra sekar, software Engineer '   
        }
    ];   
    
    App.MeRoute  = Em.Route.extend({
        model: function() {
            
            console.log(" About me ",$('.aboutCircle'));
            
            $('.aboutCircle').addClass('aboutBounce');
            
            
            return data;
        }
    });            
})(this);


