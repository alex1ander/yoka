    var swiper = new Swiper(".tf-swiper", {
        spaceBetween: 60,
        effect: 'slide',
        loop: true,
        freeMode: true,
        slidesPerView: "auto",
        speed: 5000,
        autoplay: {
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            waitForTransition: true,
            stopOnLastSlide: false,

        }
    });


    var swiper2 = new Swiper(".swiper-text-slider", {
    slidesPerView: "auto",
    pagination: {
        el: ".text-pagination",
    },
});






    (function () {
  const video = document.getElementById('tf-video');

  function drawClipped(canvas, clipPathId, w, h) {
    const ctx = canvas.getContext('2d');

    const combined = new Path2D();
    Array.from(document.querySelectorAll(`#${clipPathId} path`))
      .forEach(el => combined.addPath(new Path2D(el.getAttribute('d'))));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.clip(combined);
      ctx.drawImage(video, 0, 0, w, h);
      ctx.restore();
      requestAnimationFrame(draw);
    }

    draw();
  }

  function start() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      drawClipped(
        document.getElementById('canvas-mobile'),
        'video-mask-mobile',
        292, 529
      );
    } else {
      drawClipped(
        document.getElementById('canvas-desktop'),
        'video-mask-desktop',
        829, 349
      );
    }
  }

  // Принудительный play + старт
  video.play().catch(() => {});

  if (video.readyState >= 2) {
    start();
  } else {
    video.addEventListener('canplay', start);
  }
})();