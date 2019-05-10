// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//INITIALIZE SLICK SLIDER
$(document).ready(function() {
  $('.autoplay').slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '70px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1030,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000


      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false

      }
    }, {
      breakpoint: 500,
      settings: {
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px'


      }
    }]
  });
});
