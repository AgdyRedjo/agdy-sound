export function initLoginCarousel() {
const images = document.querySelectorAll('.img-carousel img');
const dotsContainer = document.querySelector('.dots');
const progress = document.querySelector('.progress');

let index = 0;
let interval;

images.forEach((_, i) => {

    const dot = document.createElement('div');

    dot.classList.add('dot');

    if(i === 0){
        dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
        showImage(i);
        restartAutoSlide();
    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll('.dot');

function showImage(i){

    images[index].classList.remove('active');
    dots[index].classList.remove('active');

    index = i;

    images[index].classList.add('active');
    dots[index].classList.add('active');

    startProgress();
}

function nextImage(){

    let next = (index + 1) % images.length;
    showImage(next);

}

function prevImage(){

    let prev = (index - 1 + images.length) % images.length;
    showImage(prev);

}

document.querySelector('.next')
.addEventListener('click', () => {

    nextImage();
    restartAutoSlide();

});

document.querySelector('.prev')
.addEventListener('click', () => {

    prevImage();
    restartAutoSlide();

});

function startProgress(){

    progress.style.transition = 'none';
    progress.style.width = '0%';

    setTimeout(() => {

        progress.style.transition = 'width 5s linear';
        progress.style.width = '100%';

    }, 50);

}

function restartAutoSlide(){

    clearInterval(interval);

    interval = setInterval(nextImage, 5000);

    startProgress();

}

restartAutoSlide();
}