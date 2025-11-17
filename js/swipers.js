"use strict";
window.addEventListener("load", () => {
    const swiper = new Swiper(".about__swiper.swiper", {
      speed: 2000,
      grabCursor: true,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: ".about__swiper-button-next",
        prevEl: ".about__swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 26,
        },
      },
    });
  
  const testimonialsSwiper = new Swiper(".testimonials__swiper.swiper", {
    speed: 2000,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 18.5,
      },
    },
  });

   const pricelistSwiper = new Swiper(".pricelist__swiper.swiper", {
     speed: 2000,
     slidesPerView: "auto",
     //  centeredSlides: true,
     centerInsufficientSlides: true,
     spaceBetween: 19,
     initialSlide: 1,
     grabCursor: true,

     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       type: "bullets",
     },

     breakpoints: {
       // when window width is >= 320px
       320: {
        //  loop: true,
        //  centeredSlides: true,
         //  slidesPerView: 1,
         //  spaceBetween: 10,
       },
       480: {
         //  loop:true,
         // slidesPerView: 2.5,
       },
       1430: {
         loop: false,
         centerInsufficientSlides: true,
       },
     },
   });
})