//mobile header menu
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
//footer dropdown
$(document).ready(function () {
  $(".footer-dropdown__title").on("click", function (event) {
    $(this.nextElementSibling).toggleClass("_active");
  });
});
//eventsLectures view
$(document).ready(function () {
  $(".eventsLectures-nav__type_tile").on("click", function (event) {
    $(".eventsLectures-nav__type").removeClass("_active");
    $(this).toggleClass("_active");
    $(".eventsLectures-block").toggleClass("_tile");
  });
  $(".eventsLectures-nav__type_list").on("click", function (event) {
    $(".eventsLectures-nav__type").removeClass("_active");
    $(this).toggleClass("_active");
    $(".eventsLectures-block").removeClass("_tile");
  });
});
//popup
const openPopupLogin = document.querySelectorAll('.popup-login__open');
const openPopupRegister = document.querySelector('.popup-register__open');
const closePopup = document.querySelectorAll('.popup__close');
const popupLogin = document.getElementById('popup-login');
const popupRegister = document.getElementById('popup-register');
const popups = document.querySelectorAll('.popup');
const popupForm = document.querySelectorAll('.popup__form');
const body = document.querySelector('body');

if (popups) {
  openPopupLogin.forEach(button => {
    button.addEventListener('click', () => {
      popupLogin.classList.add('_active');
      body.classList.add('_lock');
    });
  });
  openPopupRegister.addEventListener('click', () => {
    popupRegister.classList.add('_active');
    body.classList.add('_lock');
  });
  closePopup.forEach(close => {
    close.addEventListener('click', () => {
      popups.forEach(popup => {
        popup.classList.remove('_active');
        body.classList.remove('_lock');

      });
      popupForm.forEach(form => {
        form.reset();
      });
    });
  });
}