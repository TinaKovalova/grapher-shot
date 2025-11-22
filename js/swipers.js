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
     speed: 2500,
     spaceBetween: 10,
     grabCursor: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       type: "bullets",
       dynamicBullets: true,
       renderBullet: function (index, className) {
         return '<span class="' + className + '">' + "</span>";
       },
     },

     breakpoints: {
       320: {
         slidesPerView: 1,
         centeredSlides: true,
       },
       768: {
         slidesPerView: "auto",
         initialSlide: 1,
          centeredSlides: true,
       },

       1550: {
         slidesPerView: "auto",
         centerInsufficientSlides: true,
         initialSlide: 1,
         spaceBetween: 19,
       },
     },
   });
})