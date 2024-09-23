const swiper = new Swiper(".swiper", {
  slidesPerView: 10,
  spaceBetween: 36,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
    slidesPerView: 4,
      spaceBetween: 18,
    },
    480: {
      spaceBetween: 36,
    },

    450: {
      slidesPerView: 10,
    },
  },
});
