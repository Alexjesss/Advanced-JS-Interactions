// switch toggle //

let switchMode = document.getElementById('mode');
let body = document.body;

// carousel //

let slides = document.getElementsByClassName('carousel-image');
let slidePosition = 0;
let previous = document.getElementById('button-prev');
let next = document.getElementById('button-next');
let totalSlides = slides.length;
console.log(slides);

// collage //
let collageImages = document.querySelectorAll(".image");
let img = 0;
let otherImgs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    if (img==0){ //Basic function if no enlarged, enlarge click element
        e.style.width = "620px";
        e.style.height = "500px";
        e.style.position = 'absolute';
        img = 1;
        otherImgs[e] = 1
    }
    else if (img==1) { //If an image is enlarged, is it this one? If so, resize image
        e.style.width = "310px";
        e.style.height = "250px";
        e.style.position = 'absolute';
        img = 0;
        otherImgs[0] = 0
    }
    else if (img==1 && otherImgs==1)  { //if enlarged, which? Close other, open current element
        e.style.width = "310px";
        e.style.height = "250px";
        e.style.position = 'absolute';
        img = 1
        otherImgs[0] = 1
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
    e.addEventListener("click", () =>{resizeImage(e);})})
