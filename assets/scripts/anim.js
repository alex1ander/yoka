const elements = document.querySelectorAll('#hero, #marketing, #create-studio, #workflow'); // сюда добавляй свои id

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim');
    } else {
      // entry.target.classList.remove('anim'); // если нужно убирать класс
    }
  });
}, {
  rootMargin: '-45% 0px -45% 0px',
  threshold: 0
});

elements.forEach((el) => observer.observe(el));