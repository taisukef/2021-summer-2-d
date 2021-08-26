$(function(){
    $(window).scroll(function(){
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      
      $('.btn-items').each(function(){
        const itemTarget = $(this).offset().top;
        
        if (scrollAmount > itemTarget - wHeight + 20) {
          $(this).addClass("showup");
        }
      });
    });
  });