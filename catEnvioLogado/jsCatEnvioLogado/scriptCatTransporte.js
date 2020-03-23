// BTN COPY
for (var index = 0; index < 2; index++) {
    var imagemCopy = document.createElement("img");
    imagemCopy.src = "/IncludeProject/img/icons/iconCopy.svg";
    imagemCopy.className = "fab";
    imagemCopy.title = "Copiar texto";
    document.getElementsByClassName("telaDeEnvio")[index].appendChild(imagemCopy);

    var inptext = document.createElement("input");
    inptext.type = "text";
    if (index == 0) {
        inptext.id = "txtGifUm";
    } else {
        inptext.id = "txtGifDois";
    } 
    inptext.className = "txtEscondido";
    document.getElementsByClassName("telaDeEnvio")[index].appendChild(inptext);
}

document.getElementsByClassName("fab")[2].addEventListener("click", copiarTextoUm);
document.getElementsByClassName("fab")[5].addEventListener("click", copiarTextoDois);

function copiarTextoUm() {
    var textoDesGif = document.getElementsByClassName("DesGif")[0].innerText;
    var copyText = document.getElementById("txtGifUm");
    copyText.value = textoDesGif;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function copiarTextoDois() {
    var textoDesGif = document.getElementsByClassName("DesGif")[1].innerText;
    var copyText = document.getElementById("txtGifDois");
    copyText.value = textoDesGif;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

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