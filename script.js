document.getElementById('startButton').addEventListener('click', () => {
    const minutes = parseInt(document.getElementById('minutes').value);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Por favor, insira uma duração válida.');
        return;
    }

    const totalSeconds = minutes * 60;
    const startTime = Date.now();
    const endTime = startTime + totalSeconds * 1000;

    const sequences = [
        'Chute frontal',
        '2',
        'Joelhada',
        'chute médio',
        '3',
        'Cotovelada',
        'Chute circular',
        '4',
        'Joelhada voadora',
        'Cotovelada descendente',
        'Chute na coxa',
        'Cotovelada giratória',
        '1',
        'Chute alto',
        '5'
    ];

    function speakSequence() {
        if (Date.now() >= endTime) return;

        const randomSequence = sequences.sort(() => 0.5 - Math.random()).slice(0, 2).join(' e ');

        // Exibir a sequência na tela
        const sequenceElement = document.getElementById('sequence');
        sequenceElement.textContent = randomSequence;

        // Falar a sequência
        const utterance = new SpeechSynthesisUtterance(randomSequence);
        utterance.onend = () => {
            setTimeout(speakSequence, 2000); // Aguarda 2 segundos antes de falar a próxima sequência
        };
        speechSynthesis.speak(utterance);
    }

    speakSequence();
});
