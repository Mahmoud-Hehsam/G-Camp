const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate');

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
];

    generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});

