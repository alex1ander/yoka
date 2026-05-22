const wrapper = document.querySelector('.days-wrapper');
const days = document.querySelectorAll('.day');
const fill = document.querySelector('.days-progress__fill');

let progress = 0;
let speed = 0.4; // скорость движения

function loop() {
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

    // 1. авто-движение
    progress += speed;

    if (progress > maxScroll) {
        progress = 0;
    }

    wrapper.scrollLeft = progress;

    // 2. линия растёт слева направо (по прогрессу)
    const percent = (progress / maxScroll) * 100;
    fill.style.width = percent + '%';

    // 3. “проявление” карточек
    const wrapperRect = wrapper.getBoundingClientRect();
    const revealPoint = wrapperRect.left + (wrapper.clientWidth * percent / 100);

    days.forEach(day => {
        const rect = day.getBoundingClientRect();
        const dayCenter = rect.left + rect.width / 2;

        if (dayCenter < revealPoint) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
        }
    });

    requestAnimationFrame(loop);
}

loop();