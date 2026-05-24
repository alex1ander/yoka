document.addEventListener("DOMContentLoaded", () => {
    const workflow = document.querySelector("#workflow");

    const wrapper = workflow.querySelector(".workflow-wrapper");
    const cardsWrapper = workflow.querySelector(".cards-wrapper");
    const timelineWrapper = workflow.querySelector(".timeline-wrapper");
    const playLine = workflow.querySelector(".player-line");

    const cards = [...workflow.querySelectorAll(".card-wrapper")];

    const LINE_OFFSET = 0;
    const EXIT_OFFSET = 0;
    const DURATION = 12000;

    let started = false;
    let animationId = null;
    let currentProgress = 0;

    let virtualStartTime = null;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartProgress = 0;
    let dragMoved = false;

    // =========================
    // LAYOUT PARAMS
    // =========================
    function getLayoutParams() {
        const lastCard = cards[cards.length - 1];
        const wrapperWidth = wrapper.offsetWidth;
        const contentWidth = lastCard.offsetLeft + lastCard.offsetWidth;
        const maxScroll = contentWidth - wrapperWidth;
        return { wrapperWidth, maxScroll };
    }

    // =========================
    // CORE RENDER
    // =========================
    function render(progress) {
        const { wrapperWidth, maxScroll } = getLayoutParams();
        const scroll = maxScroll * progress;

        cardsWrapper.style.marginLeft = `-${scroll}px`;
        timelineWrapper.style.marginLeft = `-${scroll}px`;

        const lineX = wrapperWidth * progress + LINE_OFFSET;
        playLine.style.left = `${lineX}px`;

        cards.forEach(card => {
            const start = card.offsetLeft - scroll;
            const end = start + card.offsetWidth;
            if (lineX >= start + EXIT_OFFSET && lineX <= end - EXIT_OFFSET) {
                card.classList.add("anim");
            } else {
                card.classList.remove("anim");
            }
        });

        currentProgress = progress;
    }

    // =========================
    // SEEK
    // =========================
    function seekTo(progress, now) {
        currentProgress = Math.max(0, Math.min(1, progress));
        render(currentProgress);
        virtualStartTime = now - currentProgress * DURATION;

        // Если перемотали назад — перезапускаем анимацию
        if (currentProgress < 1 && !animationId) {
            animationId = requestAnimationFrame(tick);
        }
    }

    // =========================
    // ANIMATION LOOP
    // =========================
    function tick(time) {
        if (!isDragging) {
            if (virtualStartTime === null) {
                virtualStartTime = time;
            }

            const elapsed = time - virtualStartTime;
            const progress = Math.min(elapsed / DURATION, 1);

            if (progress >= 1) {
                render(1);
                cancelAnimationFrame(animationId);
                animationId = null;
                return;
            }

            render(progress);
        }

        animationId = requestAnimationFrame(tick);
    }

    function startAnimation() {
        if (started) return;
        started = true;
        animationId = requestAnimationFrame(tick);
    }

    // =========================
    // DRAG TO SCROLL
    // =========================
    function onDragStart(clientX) {
        isDragging = true;
        dragMoved = false;
        dragStartX = clientX;
        dragStartProgress = currentProgress;
        wrapper.style.cursor = "grabbing";
    }

    function onDragMove(clientX, now) {
        if (!isDragging) return;

        const dx = clientX - dragStartX;
        if (Math.abs(dx) > 3) dragMoved = true;

        const { wrapperWidth } = getLayoutParams();
        const progressDelta = -dx / wrapperWidth;
        const newProgress = Math.max(0, Math.min(1, dragStartProgress + progressDelta));

        render(newProgress);
    }

    function onDragEnd(now) {
        if (!isDragging) return;
        isDragging = false;
        wrapper.style.cursor = "grab";

        virtualStartTime = now - currentProgress * DURATION;

        // Если дотащили до конца — не запускаем анимацию заново
        if (currentProgress >= 1) return;

        // Если анимация была остановлена — возобновляем
        if (!animationId) {
            animationId = requestAnimationFrame(tick);
        }
    }

    // Mouse
    wrapper.addEventListener("mousedown", (e) => onDragStart(e.clientX));
    window.addEventListener("mousemove", (e) => {
        if (isDragging) onDragMove(e.clientX, e.timeStamp);
    });
    window.addEventListener("mouseup", (e) => onDragEnd(e.timeStamp));

    // Touch
    wrapper.addEventListener("touchstart", (e) => {
        onDragStart(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
        if (isDragging) onDragMove(e.touches[0].clientX, e.timeStamp);
    }, { passive: true });

    window.addEventListener("touchend", (e) => onDragEnd(e.timeStamp));

    // Cursor
    wrapper.addEventListener("mouseenter", () => {
        if (!isDragging) wrapper.style.cursor = "grab";
    });
    wrapper.addEventListener("mouseleave", () => {
        if (!isDragging) wrapper.style.cursor = "";
    });

    // =========================
    // CLICK TO SEEK
    // =========================
    timelineWrapper.addEventListener("click", (e) => {
        if (dragMoved) return;

        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const { wrapperWidth } = getLayoutParams();
        const progress = Math.max(0, Math.min(1, clickX / wrapperWidth));

        seekTo(progress, performance.now());
    });

    // =========================
    // OBSERVER
    // =========================
    const observer = new MutationObserver(() => {
        if (workflow.classList.contains("anim")) {
            startAnimation();
        }
    });

    observer.observe(workflow, {
        attributes: true,
        attributeFilter: ["class"]
    });
});