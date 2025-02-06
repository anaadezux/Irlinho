const messages = [
    "Você tem certeza?",
    "Absoluta??",
    "Errou o botão?",
    "Nego pfvr...",
    "Só pensa direitinho sobre isso!",
    "Se vc continuar apertando, eu vou ficar triste...",
    "Muito triste...",
    "Triste pra caralho...",
    "Já entendi, não voou perguntar mais...",
    "Mentira, aperta logo no sim! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}