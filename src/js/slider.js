(() => {
  $(".response-slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : 5,
   nav: true,
   navText: ["<img src='../img/sec-06/larr.png'>","<img src='../img/sec-06/rarr.png'>"],
   dots: false,
  });
})();

(() => {
  $(".sec-12__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : false,

   margin : 5,
   nav: true,
   navText: ["<img src='../img/sec-06/larr.png'>","<img src='../img/sec-06/rarr.png'>"],
   dots: false,

   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:true
       },
       768:{
           items:2,
           nav:true,
           margin: 10,
           dots: true
       },
       1024:{
           items:2,
           nav:false,
           margin: 5
       }
   }
  });
})();
