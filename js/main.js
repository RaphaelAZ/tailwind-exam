const suns = document.querySelectorAll('.spinningSun');

console.log(suns)

suns.forEach(sun => {
    sun.addEventListener('mouseenter', () => {
        suns.forEach(s => s.classList.add('rotate'));
    });

    sun.addEventListener('mouseleave', () => {
        suns.forEach(s => s.classList.remove('rotate'));
    });
})