const suns = document.querySelectorAll('.spinningSun');
const pollo = document.getElementById('sunGif');

suns.forEach(sun => {
    sun.addEventListener('mouseenter', () => {
        suns.forEach(s => s.classList.add('rotate'));
    });

    sun.addEventListener('mouseleave', () => {
        suns.forEach(s => s.classList.remove('rotate'));
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'F9') {
    pollo.classList.toggle('hidden');
    }
});