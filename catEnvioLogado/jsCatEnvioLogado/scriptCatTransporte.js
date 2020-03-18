// INICIO ABRIR TELA DE ENVIO
window.onclick = function(event) {
    if (event.target == telaTransparenteUm) {
        telaTransparenteUm.style.display = "none";
    }
    if (event.target == telaTransparenteDois) {
        telaTransparenteDois.style.display = "none";
    }
  }  
// GifCafe
function abrirTelaGifMetro() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifMetro() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "none";
}

// GifFeijao
function abrirTelaGifOnibus() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOnibus() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "none";
}
// FIM ABRIR TELA DE ENVIO 

// Gif Metro
function enviarMensWhatsMetro() {
    window.open('https://api.whatsapp.com/send?text=Metrô');
}

// Gif Onibus
function enviarMensWhatsOnibus() {
    window.open('https://api.whatsapp.com/send?text=Ônibus');
}