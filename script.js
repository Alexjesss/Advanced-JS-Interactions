Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

let switchMode = document.getElementById('mode');
let body = document.body;

switchMode.addEventListener('click', () => {
     body.classList.toggle('darkMode');
})
