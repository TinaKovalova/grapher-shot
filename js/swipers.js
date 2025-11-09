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
})