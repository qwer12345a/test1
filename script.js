// script.js

const wordForm = document.getElementById('word-form');
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

    wordInput.value = '';
    meaningInput.value = '';

    // 단어 추가 후, 단어 입력 폼을 숨기고 학습 페이지를 보이게 설정
    if (words.length > 0) {
        wordForm.style.display = 'none';
        learnTheseWordsContainer.style.display = 'block';
        startLearning();
    }
}

// 게임 시작 함수
function startLearning() {
    currentIndex = -1; // 인덱스 초기화
    showNextWord(); // 다음 단어 보여주기
}

// 다음 단어 보기 함수
function showNextWord() {
    currentIndex = (currentIndex + 1) % words.length; // 다음 단어 인덱스 계산
    wordElement.textContent = words[currentIndex].word;
    meaningElement.textContent = words[currentIndex].meaning;
}

// Next Word 버튼 클릭 이벤트 리스너 등록
nextWordButton.addEventListener('click', showNextWord);

// 단어 입력 폼 submit 이벤트 리스너 등록
wordForm.addEventListener('submit', addWord);
