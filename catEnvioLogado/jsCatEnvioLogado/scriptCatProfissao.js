// INICIO ABRIR TELA DE ENVIO 
// GifCafe
function abrirTelaGifEnfermeiro() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifEnfermeiro() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "none";
}

// GifFeijao
function abrirTelaGifProfessor() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifProfessor() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "none";
}
// FIM ABRIR TELA DE ENVIO 

// Gif Cafe com leite
function enviarMensWhatsEnfermeiro() {
    window.open('https://api.whatsapp.com/send?text=Enfermeiro');
}

// Gif Feijao
function enviarMensWhatsProfessor() {
    window.open('https://api.whatsapp.com/send?text=Professor');
}