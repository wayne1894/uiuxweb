$(document).on('ready', function() {
 var $status = $('.counter');
 var $slickElement = $('.top-banner');

 $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
 });

 $slickElement.slick({
        dots: true,
        arrows: false,
        infinite: true,
        variableWidth: true,
        speed: 600,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 4800,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            centerPadding: '0px',
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 });

});



//主站

$(".slider_banner").slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$(".rwdSlider").slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      centerPadding: '0px',
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: '80px',
      dots: true
    }
  },
  {
    breakpoint: 767,
    settings: {
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: '80px',
      dots: true
    }
  },
  {
    breakpoint: 480,
    settings: {
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      centerPadding: '0',
      dots: true
    }
  }],
});


/*
$('.areaPerformanceSlick').slick({
  dots: true,
  infinite: false,
  focusOnSelect: true,
  speed: 300,
  slidesToShow: 4.5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 9999,
        infinite: true,
        dots: true
      }
    }]
});*/


let container = document.querySelector(".scrollbarStyleJL");
if(container){
  container.addEventListener("wheel", (event) => {
  event.preventDefault();
  container.scrollLeft += event.deltaY;
});
}

