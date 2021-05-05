let switchMode = document.getElementById('mode');
let body = document.body;

let slides = document.getElementsByClassName('carousel-image');
let slidePosition = 0;
let previous = document.getElementById('button-prev');
let next = document.getElementById('button-next');
let totalSlides = slides.length;
console.log(slides);


Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function updateSlides(){
    for (let slide of slides){
        slide.classList.remove('carousel-image--visible');
        slide.classList.add('carousel-image--hidden');
    }
    slides[slidePosition].classList.add('carousel-image--visible');
}

function movePrevSlide(){
    if (slidePosition === 0){
        slidePosition = totalSlides -1;
    }
    else {
        slidePosition--;
    }
    updateSlides()
}

function moveNextSlide(){
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlides()
}

switchMode.addEventListener('click', () => {
    body.classList.toggle('darkMode');
})

previous.addEventListener('click', () => {
    movePrevSlide();
})

next.addEventListener('click', () => {
    moveNextSlide();
})

