document.addEventListener("DOMContentLoaded", () => {
    const workflow = document.querySelector("#workflow");

    const wrapper = workflow.querySelector(".workflow-wrapper");
    const cardsWrapper = workflow.querySelector(".cards-wrapper");
    const timelineWrapper = workflow.querySelector(".timeline-wrapper");
    const playLine = workflow.querySelector(".player-line");

    const cards = [...workflow.querySelectorAll(".card-wrapper")];

    const LINE_X = 0;

    // 🔥 лёгкий выход за последнюю карточку
    const LINE_OFFSET = 14;
    const EXIT_OFFSET = 14;

    let started = false;

    function startAnimation() {
        if (started) return;
        started = true;

        const lastCard = cards[cards.length - 1];

        const wrapperWidth = wrapper.offsetWidth;

        const contentWidth =
            lastCard.offsetLeft + lastCard.offsetWidth;

        const maxScroll = contentWidth - wrapperWidth;

        const duration = 12000;

        let startTime = null;

        function animate(time) {
            if (!startTime) startTime = time;

            const elapsed = time - startTime;

            // =========================
            // ПРОГРЕСС 0 → 1
            // =========================
            const progress = Math.min(elapsed / duration, 1);

            // =========================
            // СКРОЛЛ КАРТОЧЕК
            // =========================
            const scroll = maxScroll * progress;

            cardsWrapper.style.marginLeft = `-${scroll}px`;
            timelineWrapper.style.marginLeft = `-${scroll}px`;

            // =========================
            // ЛИНИЯ (+2px вперёд)
            // =========================
            const lineX = wrapperWidth * progress + LINE_OFFSET;

            playLine.style.left = `${lineX}px`;

            // =========================
            // АКТИВАЦИЯ КАРТОЧЕК
            // =========================
            cards.forEach(card => {
                const start = card.offsetLeft - scroll;
                const end = start + card.offsetWidth;

                if (
                    lineX >= start + EXIT_OFFSET &&
                    lineX <= end - EXIT_OFFSET
                ) {
                    card.classList.add("anim");
                } else {
                    card.classList.remove("anim");
                }
            });

            // =========================
            // LOOP
            // =========================
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

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