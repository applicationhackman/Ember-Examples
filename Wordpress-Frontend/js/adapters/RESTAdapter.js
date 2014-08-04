
(function(tar) {
      
       var AppAdapt    =   DS.RESTAdapter.extend({
           url         :   'http://localhost:8080',
           namespace   :   'wordpress/wp-json'
       });


       /*
        * Creating store for Application Route 
        */
       App.ApplicationStore    =   DS.Store.extend({
           adapter             :   AppAdapt
       });


        App.Posts   =   DS.Model.extend({
            name    :   DS.attr(''),
            title   :   DS.attr(''),
            excerpt :   DS.attr(''),
            author  :   DS.attr(''),
            content :   DS.attr(''),
            meta    :   DS.attr(''),
            terms   :   DS.attr(''),
            hasComments :   DS.attr('boolean'),
            posts: DS.hasMany('post'),
        }); 

        App.Post   =   DS.Model.extend({
            comments    :   DS.hasMany('comment'),
            links    :   DS.attr('')
        });
        
         App.Comment   =   DS.Model.extend({
            post    :    DS.belongsTo('post'),
            content :   DS.attr(''),
            author  :   DS.attr(''),
            status  :   DS.attr(''),
            
        });
        
       
        
         App.PostSerializer  = DS.RESTSerializer.extend({
            primaryKey      :   'ID',
           
        });
        
         App.CommentSerializer   =   DS.RESTSerializer.extend({
            primaryKey      :   'ID'
        });
       
        
        
         
})(this);


