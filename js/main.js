const suns = document.querySelectorAll('.spinningSun');
const pollo = document.getElementById('sunGif');

suns.forEach(sun => {
    sun.addEventListener('mouseenter', () => {
        suns.forEach(s => s.classList.add('rotate'));
    });

    sun.addEventListener('mouseleave', () => {
        suns.forEach(s => s.classList.remove('rotate'));
    });
})

//rien à voir ici
const image=document.getElementById("icon");const gear=document.querySelector("iconify-icon[icon='akar-icons:gear']");gear.addEventListener("click", () => {image.classList.remove("hidden");image.classList.add("block");image.requestFullscreen();setTimeout(() => {image.classList.add("hidden");image.classList.remove("block");document.exitFullscreen()}, 1525)})

document.addEventListener('keydown', function (event) {
    if (event.key === 'F9') {
        pollo.classList.toggle('hidden');
    }
});