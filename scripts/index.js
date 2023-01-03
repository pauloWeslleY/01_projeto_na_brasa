$(function () {
   //* Effect Smoke for Banner
   // $(selector).ripples({
   //    dropRadius: 25,
   //    perturbance: 0.2,
   // });

   //!BTN TOGGLE
   $(".navbar-toggler").on(function () {
      $(".navbar-toggler").toggleClass("change");
   });
});

$(function () {
   //!MagnificPopup => click image
   $(".parent-container").magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
         enabled: true,
      },
   });
});

$(function () {
   //!Slick Carousel
   $(".carousel").slick({
      centerMode: true,
      mobileFirst: true,
      centerPadding: "60px",
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 1,
            },
         },
      ],
   });
});

$(function () {
   //!Slick Carousel Photo SteakHouse
   $(".photo__steakhouse").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 700,
      infinite: true,
      speed: 500,
      arrows: false,
      fade: true,
      cssEase: "linear",
   });
});