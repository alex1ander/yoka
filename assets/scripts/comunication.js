const elements = document.querySelectorAll('#comunication');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tableInter = entry.target.querySelector('.table-inter');

            // Добавляем класс чуть позже, чтобы браузер успел зафиксировать начальное состояние
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    entry.target.classList.add('anim');
                });
            });
        }
    });
}, {
    root: null,
    threshold: 0,
    rootMargin: '-50% 0px -50% 0px'
});

elements.forEach(el => observer.observe(el));