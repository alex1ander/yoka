var swiper = new Swiper(".blog-swiper", {
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
        el: ".blog-pagination",
    },
    navigation: {
        nextEl: ".blog-swiper-button-next",
        prevEl: ".blog-swiper-button-prev",
        
    },
});

document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', function (e) {
        if (e.target.closest('.close-pop-up')) {
            this.classList.remove('active');
            return;
        }
        document.querySelectorAll('.blog-card.active').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    });
});