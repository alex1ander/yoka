const aboutUsSwiper = new Swiper(".about-us-swiper", {
    slidesPerView: "auto",
    spaceBetween: 60,
    pagination: {
        el: ".about-us-pagination",
    },
    navigation: {
        nextEl: ".about-swiper-button-next",
        prevEl: ".about-swiper-button-prev",
        
    },
});

document.querySelectorAll('.photo-review').forEach(card => {
    card.addEventListener('click', function () {

        const parent = this.closest('.review-photo-card');

        // если уже активен — выключаем всё
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            parent?.classList.remove('active');
            return;
        }

        // снимаем у всех
        document.querySelectorAll('.photo-review.active')
            .forEach(c => c.classList.remove('active'));

        document.querySelectorAll('.review-photo-card.active')
            .forEach(p => p.classList.remove('active'));

        // включаем текущий
        this.classList.add('active');
        parent?.classList.add('active');
    });
});