const wrapper = document.querySelector('.days-wrapper');
const days = Array.from(document.querySelectorAll('.day'));
const fill = document.querySelector('.days-progress__fill');

const itemDuration = 0.8; // 0.5 сек на карточку
const totalDuration = days.length * itemDuration; // общая длительность

let startTime = null;

function loop(timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = (timestamp - startTime) / 1000; // в секундах

    // нормализованный прогресс 0..1
    let progress = elapsed / totalDuration;

    if (progress > 1) {
        progress = 0;
        startTime = timestamp;
        days.forEach(d => d.classList.remove('active'));
    }

    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

    // 1. плавный скролл (без накопления ошибок)
    const scrollX = maxScroll * progress;
    wrapper.scrollLeft = scrollX;

    // 2. прогресс бар
    fill.style.width = (progress * 100) + '%';

    // 3. появление карточек по времени (НЕ по scroll)
    const itemsToShow = Math.floor(progress * days.length);

    days.forEach((day, index) => {
        if (index <= itemsToShow) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
        }
    });

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);