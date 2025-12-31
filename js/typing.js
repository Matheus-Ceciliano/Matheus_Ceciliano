const texts = [

    "Eu sou Matheus, Estudante de Sistema de Informação.",
    "<p>Olá Mundo</p>",
    "<h1>Hello World</h1>",
    "Em constante estudos e evoluções."

];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 50;
const pauseAfterTyping = 1800;
const pauseAfterDeleting = 600;

function typeLoop() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        // DIGITANDO
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, pauseAfterTyping);
        }

    } else {
        // APAGANDO
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;

            setTimeout(() => { }, pauseAfterDeleting);
        }
    }

    setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed);
}

typeLoop();


