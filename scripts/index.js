$(function () {

   //* Effect Smoke fro Banner
   $(selector).ripples({
      dropRadius: 25,
      perturbance: 0.2,
    });

   //!BTN TOGGLE
   $('.navbar-toggler').on(function () {
      $('.navbar-toggler').toggleClass('change')
   })

})