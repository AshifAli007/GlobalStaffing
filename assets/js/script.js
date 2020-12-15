
// -------------------------video javascript starts here-------------------------------------------
var video = document.getElementById("myVideo");

// Get the button
var btn = $(".mybtn");
var i = 0;
$(btn).on("click",function(){
    
    if(i%2==0){
        $(video).trigger("play");
        $(".myVideo").animate({
            // left: '250px',
            opacity: 1
            // height: '150px',
            // width: '150px'
          },1000);
        
          $("#landing-h").animate({
              opacity:0
          },1000);
        $(btn).text("Pause");
        i = i + 1;
        console.log("inside if");
    }else{
        console.log("inside else");
        $(video).trigger("pause");
        $(btn).text("Watch Now");
        $(".myVideo").animate({
            // left: '250px',
            opacity: 0
            // height: '150px',
            // width: '150px'
          },1000);
          $("#landing-h").animate({
            opacity:1
        },1000);
          i = i + 1;
    }
  
});
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// -------------------------video javascript ends here-------------------------------------


// <!-- -----------------------------------servics carousal code here------------------------------------------------- -->
$(function() {
    $('.carousel').carousel({
                interval: false
    })

    $('#responsive-carousel').slick({
                dots: true,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 6,
                //prevArrow: '.slick-prev',
                //nextArrow: '.slick-next',
                responsive: [{
                                        breakpoint: 960,
                                        settings: {
                                                    slidesToShow: 5,
                                                    slidesToScroll: 5
                                        }
                            }, {
                                        breakpoint: 768,
                                        settings: {
                                                    slidesToShow: 4,
                                                    slidesToScroll: 4
                                        }
                            }, {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1,
                                            dots: false,
                                            arrows: false,
                                        }
                            }
                            // You can unslick at a given breakpoint now by adding:
                            // settings: "unslick"
                            // instead of a settings object
                ]
    });

    $('#responsive-carousel input').on('change', function() {
        $('#responsive-carousel .radio-inline').removeClass('selected');
        $(this).closest('.radio-inline').addClass('selected');
    });

    var filterString = '';

    $('.letter-filter a').on('click', function(event) {
        event.preventDefault();
        $('#responsive-carousel').slick('slickUnfilter');
        var filterString = $(this).attr('data-filter-by');
        console.log(filterString);
        $('#responsive-carousel').slick('slickFilter', '[data-first-letter="'+filterString+'"]');
        //$(this).text('Unfilter Slides');
        filtered = true;
    });
    $('.select-filter select').on('change', function(event) {
        var filterString = $(this).val();
        console.log(filterString);
        if( filterString == "reset") {
            $('#responsive-carousel').slick('slickUnfilter');
        } else {
            $('#responsive-carousel').slick('slickFilter', '[data-first-letter="'+filterString+'"]');
        }
        
        
    });
    $('.reset').on('click', function(event) {
        event.preventDefault();
        $('#responsive-carousel').slick('slickUnfilter');
        filtered = false;
    });
});

// <!-- -----------------------------------servics carousal code end here------------------------------------------------- -->

// -------------------------carousal javascript ends here-------------------------------------
$(".gallery-cell img").on("click", function(){
    // console.log();
    // serviceName =  $(this).attr("name");
    // div = $("div[name="+serviceName+"]")[0];
    // $(div).toggleClass("changebg");
        $(this).toggleClass("changebg");
    
});


// -------------------------carosal javascript ends here-------------------------------------