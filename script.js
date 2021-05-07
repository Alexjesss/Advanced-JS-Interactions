// switch toggle //

let switchMode = document.getElementById('mode');
let body = document.body;

// carousel redoing it again...//





// collage //
let collageImages = document.querySelectorAll(".image");
let large = document.querySelector('.large');
let imageEnlarged = document.querySelector('.imageEnlarged');
let collageDescription = document.getElementById('description');


Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


switchMode.addEventListener('click', () => {
    body.classList.toggle('darkMode');
})

collageImages.forEach(el => {
    el.addEventListener("click", (e) => {
        large.style.display = 'block';
        imageEnlarged.src = e.target.src;
        collageDescription.innerHTML = e.target.alt;
        console.log(e.target.alt);
        console.log(e.target.src);
        console.log(imageEnlarged.src)
    });
});

// not finished yet! //

window.onclick = function(event) {
    if (event.target == body) {
        large.style.display = "none";
    }
}
