
// -------------------------video javascript starts here-------------------------------------------

(function ($, window, document, undefined) {

    'use strict';


    $(function () {
        app.init();
    });

})($, window, document);

var app = {
  init: function(){
    console.log('Ready');
    
    var player = new Plyr($('#player'));
    
    $('.bd-example-modal-lg').on('hide.bs.modal', function (e) {
        player.stop();

      })
  }
}

// -------------------------video javascript ends here-------------------------------------


// <!-- -----------------------------------servics carousal code here------------------------------------------------- -->
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// <!-- -----------------------------------servics carousal code end here------------------------------------------------- -->