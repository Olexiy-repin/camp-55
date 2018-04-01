(() => {
  $(".response-slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : 5,
   nav: true,
   navText: ["<img src='../img/sec-06/larr.png'>","<img src='../img/sec-06/rarr.png'>"],
   dots: false
  });
})();
