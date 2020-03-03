// INICIO ABRIR TELA DE ENVIO 
// GifCafe
function abrirTelaGifMetro() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifMetro() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "none";
}

// GifFeijao
function abrirTelaGifOnibus() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOnibus() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "none";
}
// FIM ABRIR TELA DE ENVIO 

// Gif Cafe com leite
function enviarMensWhatsMetro() {
    window.open('https://api.whatsapp.com/send?text=Metrô');
}

// Gif Feijao
function enviarMensWhatsOnibus() {
    window.open('https://api.whatsapp.com/send?text=Ônibus');
}