(function(tar) {
           
  
      App.Scrolling = Em.Mixin.create({
          
        bindScroll    :   function() {
            
            var scroll;
            onscroll      =   function (e) {
                if(this.viewScroll !== undefined){
                    return this.viewScroll(e);
                }
            };
            
            $('#'+this.elementId).bind('scroll',onscroll.bind(this));
            
        }

      });
      
      
      App.ModelLoading   =  Em.Mixin.create({
         
            bindModelLoading    :   function() {
                onModelLoad     =   function(e) {
                    if(this.modelChange !== undefined){
                         return this.modelChange(e);
                    }
                };
                
                $(window).on('hashchange', onModelLoad.bind(this));  
                $(document).ready(onModelLoad.bind(this));
            }
            
      });
  
      App.Blog1PostsView = Em.View.extend({
            classNames  :   ['postListParent'],
            click   :   function (e) {

                
            },
            viewScroll  :   function(e) {
                console.log("CSK view getting scroll here ",e);
                
            }
            
            
        });
        
        
        App.BlogPostItemView    =   Em.View.extend(App.ModelLoading,{
            classNames          :   ['postCard'],
            classNameBindings   :   ['SelectExpandPost'],
            SelectExpandPost    :   false,
            didInsertElement     :   function(data) {
                            this.bindModelLoading();
            },
            click               :   function(e) {      
                $('.select-expand-post').removeClass('select-expand-post');
                $('#'+this.elementId).addClass('select-expand-post');
            },
            modelChange :   function(data) {
                var hashes =          window.location.hash.split('/');
                var id     =   hashes[hashes.length-1];
                this.set('id',id);
                
                
                
                if(this.get('_context.id') === id){
                    this.set('SelectExpandPost',true);
//                    $('.PostCardsList').children().eq($('.PostCardHeader .postCard').attr('cindex')).after($('.select-expand-post'));
                     setTimeout(function () {
                        $('.postCardContentView').removeClass('pconnectedViewSetOne');
                    },0);
                }
                
                 setTimeout(function () {
                    $('.postCardContentView').addClass('pconnectedViewSetOne');
                },200);
            }
            
        });
        
        
        App.BlogPostCardsListView   =   Em.View.extend(App.Scrolling,{
                postPrevT           :   0,
                classNames          :   ['PostCardsList'],
                didInsertElement    :   function() {
                        this.bindScroll();
                },
                viewScroll          :   function(e) {
                        
                        if($('.select-expand-post').length > 0){
                            
                            console.log($(e.target).scrollTop()+$('.select-expand-post').height()," prevTop ",this.get('postPrevT')," exact bottom ",$('.select-expand-post').offset().top);
                            if($(e.target).scrollTop() < this.get('postPrevT')){
                                $(e.target).children().eq($('.select-expand-post').attr('cindex')).after($('.select-expand-post'));
                            }
                            
                            if($('.select-expand-post').parent().hasClass('PostCardsList')){
                                    this.set('postPrevT',$(e.target).scrollTop());
                                    $('.select-expand-post').attr('cindex',$('.select-expand-post').index()-1);
                             }
//                             console.log($('.PostCardsList').height() - $(e.target).scrollTop() ," CSK ", $('.select-expand-post').offset().top+$('.select-expand-post').height());
                             
                            if($('.select-expand-post').offset().top < 25){
//                                $('.select-expand-post').appendTo($('.PostCardHeader'));
                            }
                            
                            
                            if($('.PostCardsList').height() < $('.select-expand-post').offset().top+$('.select-expand-post').height()){
//                                $('.select-expand-post').appendTo($('.PostCardFooter'));
                            }
                            
                        }
                        
                }
        });   
        
        
        
            
})(this);


