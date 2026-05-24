const contentWrapper = document.querySelector('.content-wrapper');
const wrapper = document.querySelector('.days-wrapper');
const days = Array.from(document.querySelectorAll('.day'));
const fill = document.querySelector('.days-progress__fill');
const progress = document.querySelector('.days-progress');


// SETTINGS
const loopEnabled = true;
const itemDuration = 0.8;
const pauseBeforeScroll = 1.2;
const animationSpeed = 0.8; // 0.5 = медленнее, 2 = быстрее


// TIMES
const scrollDuration = (days.length * itemDuration) / animationSpeed;
const totalDuration = scrollDuration + pauseBeforeScroll;

let startTime = null;
let finished = false;
let isRunning = false;
let rafId = null;


function resetState() {

    days.forEach(day => {
        day.classList.remove('active');
        day.classList.remove('anim');
    });

    wrapper.style.transform = `translate3d(0px,0,0)`;
    fill.style.width = `0%`;
}

function finishAnimation() {

    fill.style.width = `100%`;

    const wrapperWidth = wrapper.scrollWidth;
    const visibleWidth = contentWrapper.clientWidth;

    const maxTranslate = Math.max(0, wrapperWidth - visibleWidth);

    wrapper.style.transform = `translate3d(${-maxTranslate}px,0,0)`;

    days.forEach(day => {
        day.classList.add('active');
        day.classList.add('anim');
    });
}

function loop(timestamp) {

    if (!isRunning) return;

    if (!startTime) startTime = timestamp;

    const elapsed = (timestamp - startTime) / 1000;

    let cycleProgress = elapsed / totalDuration;

    // END
    if (cycleProgress >= 1) {

        if (loopEnabled) {

            cycleProgress = 0;
            startTime = timestamp;

            resetState();

        } else {

            finishAnimation();
            finished = true;
            isRunning = false;
            return;
        }
    }

    // PROGRESS LINE
    fill.style.width = `${cycleProgress * 100}%`;

    // DELAY BEFORE MOVE (только для скролла)
    let scrollProgress = 0;

    if (elapsed > pauseBeforeScroll) {
        scrollProgress = (elapsed - pauseBeforeScroll) / scrollDuration;
    }

    scrollProgress = Math.min(scrollProgress, 1);

    // Прогресс для классов — без задержки
    const classProgress = Math.min(elapsed / totalDuration, 1);

    // SIZES
    const wrapperWidth = wrapper.scrollWidth;
    const visibleWidth = contentWrapper.clientWidth;

    const maxTranslate = Math.max(0, wrapperWidth - visibleWidth);

    // MOVE
    const translateX = -(maxTranslate * scrollProgress);

    wrapper.style.transform = `translate3d(${translateX}px,0,0)`;

    // ACTIVE
    const itemsToShow = Math.floor(classProgress * days.length);

    days.forEach((day, index) => {

        if (index <= itemsToShow) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
            day.classList.remove('anim');
        }

    });

    // =========================
    // ANIM WHEN BAR == CARD
    // =========================

    const fillRect = fill.getBoundingClientRect();
    const lineX = fillRect.right;

    days.forEach(day => {

        const rect = day.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;

        if (lineX >= cardX) {
            if (!day.classList.contains('anim')) {
                day.classList.add('anim');
            }
        }

    });

    rafId = requestAnimationFrame(loop);
}

function startAnimation() {
    if (isRunning || finished) return;

    isRunning = true;
    startTime = null;
    rafId = requestAnimationFrame(loop);
}

function stopAnimation() {
    isRunning = false;

    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
}


// OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startAnimation();
        } else {
            // stopAnimation(); // раскомментить если нужно останавливать при выходе из экрана
        }
    });
}, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
});

observer.observe(contentWrapper);