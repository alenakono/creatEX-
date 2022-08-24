$(document).ready(function () {
    $(".header__menu_mob").on("click", function (event) {
        $(".header__menu_mob, .header-nav_mob").toggleClass("_active");
        $("body").toggleClass("_lock");
    });
});
const swiperTeam = new Swiper('.team-swiper', {
    loop: true,
    navigation: {
      nextEl: '.team-swiper__next',
      prevEl: '.team-swiper__prev',
    },
    slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1230: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  }
});
const swiperReview = new Swiper('.review-swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.review-swiper__next',
      prevEl: '.review-swiper__prev',
    },
  
});
$(document).ready(function () {
  $(".footer-dropdown__title").on("click", function (event){
      $(this.nextElementSibling).toggleClass("_active");
  });
});