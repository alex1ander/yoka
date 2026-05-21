const section = document.querySelector('#cap');

const bg = section.querySelector('.bg');
const shards = section.querySelector('.shards');
const trophy = section.querySelector('.trophy');

section.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    // инвертированный эффект
    bg.style.transform = `
        translate(${x * -5}px, ${y * -5}px)
    `;

    shards.style.transform = `
        translate(${x * 60}px, ${y * 30}px)
    `;

    trophy.style.transform = `
        translate(${x * -20}px, ${y * -5}px)
    `;
});

section.addEventListener('mouseleave', () => {
    bg.style.transform = `translate(0,0)`;
    shards.style.transform = `translate(0,0)`;
    trophy.style.transform = `translate(0,0)`;
});