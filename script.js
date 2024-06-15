// script.js
document.addEventListener('DOMContentLoaded', function () {
    const wordsInputContainer = document.getElementById('words-input-container');
    const startLearningButton = document.getElementById('start-learning');
    const startTestButton = document.getElementById('start-test');
    const submitTestButton = document.getElementById('submit-test');
    const restartButton = document.getElementById('restart');

    let words = [];
    let testWords = [];

    // Generate input fields for 10 words
    for (let i = 0; i < 10; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Word ${i + 1}`;
        wordsInputContainer.appendChild(input);
    }

    // Start learning
    startLearningButton.addEventListener('click', function () {
        const inputs = wordsInputContainer.getElementsByTagName('input');
        words = Array.from(inputs).map(input => input.value.trim()).filter(word => word !== '');
        if (words.length !== 10) {
            alert('Please enter exactly 10 words.');
            return;
        }

        document.getElementById('input-words').style.display = 'none';
        document.getElementById('learn-words').style.display = 'block';
        const wordList = document.getElementById('word-list');
        wordList.innerHTML = '';
        words.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            wordList.appendChild(li);
        });
    });

    // Start test
    startTestButton.addEventListener('click', function () {
        document.getElementById('learn-words').style.display = 'none';
        document.getElementById('test-words').style.display = 'block';

        testWords = [...words].sort(() => Math.random() - 0.5);
        const testQuestions = document.getElementById('test-questions');
        testQuestions.innerHTML = '';
        testWords.forEach(word => {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = `Spell the word: ${word}`;
            const input = document.createElement('input');
            input.type = 'text';
            input.dataset.correct = word;
            div.appendChild(label);
            div.appendChild(input);
            testQuestions.appendChild(div);
        });
    });

    // Submit test
    submitTestButton.addEventListener('click', function () {
        const inputs = document.querySelectorAll('#test-questions input');
        let score = 0;
        inputs.forEach(input => {
            if (input.value.trim() === input.dataset.correct) {
                score++;
            }
        });
        document.getElementById('test-words').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        document.getElementById('score').textContent = `You scored ${score} out of 10.`;
    });

    // Restart game
    restartButton.addEventListener('click', function () {
        document.getElementById('results').style.display = 'none';
        document.getElementById('input-words').style.display = 'block';
        words = [];
        testWords = [];
        const inputs = wordsInputContainer.getElementsByTagName('input');
        Array.from(inputs).forEach(input => {
            input.value = '';
        });
    });
});
