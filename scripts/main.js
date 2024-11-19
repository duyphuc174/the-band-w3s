const homeSliders = document.querySelectorAll('.home__slider');
const interval = 5000;
let index = 0;

function showSlider() {
    homeSliders[index].style.display = 'block';
    homeSliders.forEach((slider, i) => {
        if (i !== index) {
            slider.style.display = 'none';
        }
    })
    index++;
    if(index >= 3) {
        index = 0;
    }
}

showSlider();

setInterval(() => {
    showSlider();
}, interval);