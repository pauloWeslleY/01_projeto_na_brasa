$(function () {

   //* Effect Smoke for Banner
   $(selector).ripples({
      dropRadius: 25,
      perturbance: 0.2,
    });

   //!BTN TOGGLE
   $('.navbar-toggler').on(function () {
      $('.navbar-toggler').toggleClass('change')
   });

   //!MagnificPopup => click img
   $(".parent-container").magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',

      gallery: {
        enabled: true
      }
   });
})