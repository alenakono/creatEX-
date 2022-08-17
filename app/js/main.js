$(document).ready(function () {
    $(".menu__mob").on("click", function (event) {
        $(".menu__mob, .header-bottom, .header-mob_top").toggleClass("_active");
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