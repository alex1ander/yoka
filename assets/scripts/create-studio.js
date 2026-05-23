const createSwiper = new Swiper(".create-swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".create-swiper-button-next",
        prevEl: ".create-swiper-button-prev",
        
    },
});