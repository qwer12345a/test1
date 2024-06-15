// script.js
const words = [
    { word: "Apple", meaning: "A fruit that grows on trees." },
    { word: "Car", meaning: "A vehicle used for transportation." },
    { word: "Book", meaning: "A set of written or printed pages." },
    // Add more words as needed
];

let currentIndex = -1;

function showNextWord() {
    currentIndex = Math.floor(Math.random() * words.length);
    const wordElement = document.getElementById('word');
    const meaningElement = document.getElementById('meaning');
    
    wordElement.textContent = words[currentIndex].word;
    meaningElement.textContent = words[currentIndex].meaning;
}

const nextWordButton = document.getElementById('next-word-btn');
nextWordButton.addEventListener('click', showNextWord);

// Initialize with the first word
showNextWord();
