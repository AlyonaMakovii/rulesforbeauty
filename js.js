$(function() {      
  var width=$('.slider-box').width();                     
      interval = 4000;                                    
 
  $('.slider img:last').clone().prependTo('.slider');     
  $('.slider img').eq(1).clone().appendTo('.slider');       
  $('.slider').css('margin-left', -width);                
    setInterval('nextSlide()',interval);                    
});
function nextSlide(){
 
  var margin = parseInt($('.slider').css('marginLeft'));  
      width=$('.slider-box').width(),                     
      slidersAmount=$('.slider').children().length;       
  if(margin!=(-width*(slidersAmount-1)))                  
  {
    margin=margin-width;                                  
  }else{                                                  
    $('.slider').css('margin-left', -width);              
    margin=-width*2;         
  }
  $('.slider').animate({marginLeft:margin},1000);         
};




$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top-100}, 1500);
    });
});


