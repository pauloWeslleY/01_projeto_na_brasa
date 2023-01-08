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
            breakpoint: 425,
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

$(function () {
   //!Slick Carousel Photo SteakHouse
   $(".carousel").slick({
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

$(function () {
   //! Fixa o NavBar
   $(window).scroll(function () {
      let position = $(this).scrollTop();

      if (position >= 718) {
         $(".navbar").addClass("navbar-background");
         $(".navbar").addClass("fixed-top");
      } else {
         $(".navbar").removeClass("navbar-background");
         $(".navbar").removeClass("fixed-top");
      }
   });
});

$(function () {
   $(window).scroll(function () {
      let position = $(this).scrollTop();

      if (position >= 718) {
         $("#back_to_top").addClass("scrollTop");
      } else {
         $("#back_to_top").removeClass("scrollTop");
      }
   });
});

//* Suavização do Scroll de Navegação
$(function () {
   $(".nav-item a, .btn__forward, #back_to_top, .navbar-brand").click(function (link){
      link.preventDefault();
      let target = $(this).attr("href");

      $("html, body").stop().animate({
         scrollTop: $(target).offset().top - 25,
      }, 1000);
   });
});
