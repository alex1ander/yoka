const creategrowthSwiper = new Swiper(".growth-support-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".growth-swiper-button-next",
        prevEl: ".growth-swiper-button-prev",
    },
});

const creategrowthMainSwiper = new Swiper(".growth-main-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".growth-main-swiper-button-next",
        prevEl: ".growth-main-swiper-button-prev",
    },
});

// Связка двух слайдеров
creategrowthSwiper.controller.control = creategrowthMainSwiper;
creategrowthMainSwiper.controller.control = creategrowthSwiper;