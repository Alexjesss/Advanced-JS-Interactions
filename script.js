// switch toggle //

let switchMode = document.getElementById('mode');
let body = document.body;

// carousel redoing it again...//




// collage //
let collageImages = document.querySelectorAll(".image");
let large = document.querySelector('.large');
let imageEnlarged = document.querySelector('.imageEnlarged');
let collageDescription = document.getElementById('description');

// circle chasing mouse //

let canvas = document.getElementById('canvas');
let chaser = document.querySelector('.chaser');

canvas.addEventListener('mousemove', moveCircle,true);
canvas.addEventListener('mouseleave', moveCircle,false);

let mouseX = 0;
let mouseY = 0;

function moveCircle(e){
    requestAnimationFrame(moveCircle);
    mouseX = e.pageX;
    mouseY = e.pageY;
        chaser.style.left = mouseX + "px";
        chaser.style.top = mouseY + "px";
}


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
    });
});

// not finished yet! //

window.onclick = function(event) {
    if (event.target == body) {
        large.style.display = "none";
    }
}

// pokemon hover //

function showImage(id) {
    document.getElementById(id).style.display="inline";
}

function hideImage(id) {
    document.getElementById(id).style.display="none";
}





