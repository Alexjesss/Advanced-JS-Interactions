// switch toggle //

let switchMode = document.getElementById('mode');
let body = document.body;

// carousel //

let slides = document.getElementsByClassName('carousel-image');
let slidePosition = 0;
let previous = document.getElementById('button-prev');
let next = document.getElementById('button-next');
let totalSlides = slides.length;


// collage //
let collageImages = document.querySelectorAll(".image");
let collageDescriptions = document.querySelectorAll('.description');

let imagePosition = 0;

Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function updateSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-image--visible');
        slide.classList.add('carousel-image--hidden');
    }
    slides[slidePosition].classList.add('carousel-image--visible');
}

function movePrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlides()
}

function moveNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlides()
}

function resizeImage(e){

    if (imagePosition == 0){
        e.style.width = "620px";
        e.style.height = "500px";
        e.style.position = 'absolute';
        e.style.zIndex = '1';
        imagePosition = 1;
    }
    else {
        e.style.width = "310px";
        e.style.height = "250px";
        e.style.zIndex = '0';
        imagePosition = 0;
    }
    showText()
}

function showText(){
    for (let i = 0; i < collageDescriptions.length; i++) {
        collageDescriptions[i].classList.toggle('description-show');
    }
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

collageImages.forEach(e => {
    e.addEventListener("click", () => {
    resizeImage(e);
    })})
