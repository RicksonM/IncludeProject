
// INICIO ABRIR TELA DE ENVIO 
// GifOi
function abrirTelaGifOi() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOi() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOi");
    exibirTelaEnvio.style.display = "none";
}

// GifOla
function abrirTelaGifOla() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOla() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifOla");
    exibirTelaEnvio.style.display = "none";
}

// GifComoVai
function abrirTelaGifComoVai() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifComoVai");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifComoVai() {
    var exibirTelaEnvio = document.getElementById("telaDeEnvioGifComoVai");
    exibirTelaEnvio.style.display = "none";
}
// FIM ABRIR TELA DE ENVIO 

// Gif Oi
function enviarMensWhatsOi() {
    window.open('https://api.whatsapp.com/send?text=Oi');
}

// Gif Ola
function enviarMensWhatsOla() {
    window.open('https://api.whatsapp.com/send?text=Olá');
}

// Gif Como Vai
function enviarMensWhatsComoVai() {
    window.open('https://api.whatsapp.com/send?text=Como%20vai?');
}