// script.js

const wordForm = document.getElementById('word-form');
const addWordButton = document.getElementById('add-word-btn');
const startLearningButton = document.getElementById('start-learning-btn');
const startLearningButton2 = document.getElementById('start-learning-btn2');
const wordListContainer = document.getElementById('word-list-container');
const wordList = document.getElementById('word-list');
const learnTheseWordsContainer = document.getElementById('learn-these-words');
const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const nextWordButton = document.getElementById('next-word-btn');

let words = []; // 입력된 단어들을 저장할 배열
let currentIndex = -1; // 현재 표시 중인 단어 인덱스

// 단어 추가 함수
function addWord(event) {
    event.preventDefault(); // 폼의 기본 동작 방지

    const wordInput = document.getElementById('word');
    const meaningInput = document.getElementById('meaning');

    const word = wordInput.value.trim();
    const meaning = meaningInput.value.trim();

    if (word === '' || meaning === '') {
        alert('영어 단어와 한글 뜻을 모두 입력해주세요.');
        return;
    }

    words.push({ word, meaning });

    // 단어 목록에 추가
    const li = document.createElement('li');
    li.textContent = `${word} - ${meaning}`;
    wordList.appendChild(li);

    wordInput.value = '';
    meaningInput.value = '';

    // 입력된 단어 개수 표시
    updateWordCount();

    // 단어 추가 후, 시작하기 버튼 활성화
    startLearningButton.disabled = false;
    startLearningButton2.disabled = false;
}

// 시작하기 버튼 클릭 시
function startLearning() {
    if (words.length === 0) {
        alert('적어도 하나의 단어를 입력해야 합니다.');
        return;
    }

    currentIndex = -1; // 인덱스 초기화
    showNextWord(); // 첫 번째 단어 보여주기

    // 학습 페이지 보이기
    wordListContainer.style.display = 'none';
    learnTheseWordsContainer.style.display = 'block';
}

// 다음 단어 보기 함수
function showNextWord() {
    currentIndex = (currentIndex + 1) % words.length; // 다음 단어 인덱스 계산
    wordElement.textContent = words[currentIndex].word;
    meaningElement.textContent = words[currentIndex].meaning;
}

// 단어 개수 업데이트 함수
function updateWordCount() {
    const wordCount = words.length;
    const wordCountText = `입력된 단어 수: ${wordCount}`;
    document.getElementById('word-count').textContent = wordCountText;
}

// Add Word 버튼 클릭 이벤트 리스너 등록
addWordButton.addEventListener('click', addWord);

// 시작하기 버튼 클릭 이벤트 리스너 등록
startLearningButton.addEventListener('click', function() {
    startLearning();
    startLearningButton.style.display = 'none'; // 시작하기 버튼 숨기기
    startLearningButton2.style.display = 'none'; // 시작하기 버튼 숨기기
});

startLearningButton2.addEventListener('click', function() {
  startLearning();
  startLearningButton.style.display = 'none'; // 시작하기 버튼 숨기기
  startLearningButton2.style.display = 'none'; //
