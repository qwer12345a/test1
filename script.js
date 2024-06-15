// script.js

const initialWords = [
    { word: "Apple", meaning: "A fruit that grows on trees." },
    { word: "Car", meaning: "A vehicle used for transportation." },
    { word: "Book", meaning: "A set of written or printed pages." },
    // Add more initial words as needed
];

let customWords = []; // 사용자가 추가한 단어 배열
let gameStarted = false; // 게임 시작 여부를 나타내는 변수

const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const startLearningButton = document.getElementById('start-learning-btn');

function startLearning() {
    gameStarted = true;
    showNextWord();
    startLearningButton.style.display = 'none'; // 학습 시작 버튼 숨기기
}

function showNextWord() {
    const words = customWords.length > 0 ? customWords : initialWords;
    const randomIndex = Math.floor(Math.random() * words.length);
    wordElement.textContent = words[randomIndex].word;
    meaningElement.textContent = words[randomIndex].meaning;
}

startLearningButton.addEventListener('click', startLearning);

// 초기에 학습 시작 버튼 보이기
startLearningButton.style.display = 'block';
