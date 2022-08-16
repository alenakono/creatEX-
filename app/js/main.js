$(document).ready(function () {
    $(".menu__mob").on("click", function (event) {
        $(".menu__mob, .header-bottom, .header-mob_top").toggleClass("_active");
        $("body").toggleClass("_lock");
    });
});