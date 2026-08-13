/* =========================
   LEITOR DE TEXTO
========================= */

function lerPagina() {

    // Cancela uma leitura anterior
    window.speechSynthesis.cancel();

    const texto = document.body.innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 0.95;
    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


/* =========================
   PARAR LEITURA
========================= */

function pararLeitura() {
    window.speechSynthesis.cancel();
}


/* =========================
   ALTO CONTRASTE
========================= */

function altoContraste() {
    document.body.classList.toggle("contrast");
}


/* =========================
   TAMANHO DA FONTE
========================= */

let tamanhoFonte = 100;

function aumentarFonte() {

    if (tamanhoFonte < 140) {
        tamanhoFonte += 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {

    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.documentElement.style.fontSize = tamanhoFonte + "%";
    }
}


/* =========================
   TECLADO
========================= */

document.addEventListener("keydown", function(event) {

    // Alt + L = leitura
    if (event.altKey && event.key.toLowerCase() === "l") {
        lerPagina();
    }

    // Esc = parar leitura
    if (event.key === "Escape") {
        pararLeitura();
    }

});