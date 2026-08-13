let isSpeaking = false;
let synth = window.speechSynthesis;

function toggleReadPage() {
  const readBtn = document.getElementById('btn-read-page');
  const readText = document.getElementById('read-text');
  const readIcon = document.getElementById('read-icon');

  if (!('speechSynthesis' in window)) {
    alert("Desculpe, o seu navegador não suporta a funcionalidade de leitura de voz.");
    return;
  }

  if (isSpeaking) {
    // Para a leitura
    synth.cancel();
    isSpeaking = false;
    readText.textContent = "Ouvir Página (Voz)";
    readIcon.textContent = "🔊";
    readBtn.classList.remove('speaking');
  } else {
    // Coleta o texto do conteúdo principal
    const mainContent = document.getElementById('main-content');
    const textToRead = mainContent.innerText;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0; // Velocidade normal da fala

    utterance.onend = function() {
      isSpeaking = false;
      readText.textContent = "Ouvir Página (Voz)";
      readIcon.textContent = "🔊";
      readBtn.classList.remove('speaking');
    };

    utterance.onerror = function() {
      isSpeaking = false;
      readText.textContent = "Ouvir Página (Voz)";
      readIcon.textContent = "🔊";
      readBtn.classList.remove('speaking');
    };

    synth.speak(utterance);
    isSpeaking = true;
    readText.textContent = "Parar Leitura";
    readIcon.textContent = "⏹️";
    readBtn.classList.add('speaking');
  }
}