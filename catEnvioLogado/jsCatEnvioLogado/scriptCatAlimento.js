
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
function abrirTelaGifCafe() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifCafe() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "none";
}

// GifFeijao
function abrirTelaGifFeijao() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifFeijao() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "none";
}
// FIM ABRIR TELA DE ENVIO 

// Gif Cafe com leite
function enviarMensWhatsCafe() {
    window.open('https://api.whatsapp.com/send?text=Café%20com%20leite');
}

// Gif Feijao
function enviarMensWhatsFeijao() {
    window.open('https://api.whatsapp.com/send?text=Feijão%20com%20arroz');
}