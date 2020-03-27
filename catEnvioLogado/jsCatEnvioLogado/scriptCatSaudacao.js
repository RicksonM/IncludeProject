// BTN COPY
for (var index = 0; index < 3; index++) {
    var imagemCopy = document.createElement("img");
    imagemCopy.src = "/IncludeProject/img/icons/iconCopy.svg";
    imagemCopy.className = "fab";
    imagemCopy.title = "Copiar texto";
    document.getElementsByClassName("telaDeEnvio")[index].appendChild(imagemCopy);

    var inptext = document.createElement("input");
    inptext.type = "text";
    if (index == 0) {
        inptext.id = "txtGifUm";
    } else if (index == 1) {
        inptext.id = "txtGifDois";
    } else {
        inptext.id = "txtGifTres";
    } 
    inptext.className = "txtEscondido";
    document.getElementsByClassName("telaDeEnvio")[index].appendChild(inptext);
}

document.getElementsByClassName("fab")[2].addEventListener("click", copiarTextoUm);
document.getElementsByClassName("fab")[5].addEventListener("click", copiarTextoDois);
document.getElementsByClassName("fab")[8].addEventListener("click", copiarTextoTres);

function copiarTextoUm() {
    var textoDesGif = document.getElementsByClassName("DesGif")[0].innerText;
    var copyText = document.getElementById("txtGifUm");
    copyText.value = textoDesGif;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var divCopySucess = document.getElementsByClassName("textoCopy")[0];
    divCopySucess.style.display = "block";
    setTimeout(copySucess, 2000);
    function copySucess() {
        divCopySucess.style.display = "none";
    }
}

function copiarTextoDois() {
    var textoDesGif = document.getElementsByClassName("DesGif")[1].innerText;
    var copyText = document.getElementById("txtGifDois");
    copyText.value = textoDesGif;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var divCopySucess = document.getElementsByClassName("textoCopy")[1];
    divCopySucess.style.display = "block";
    setTimeout(copySucess, 2000);
    function copySucess() {
        divCopySucess.style.display = "none";
    }
}

function copiarTextoTres() {
    var textoDesGif = document.getElementsByClassName("DesGif")[2].innerText;
    var copyText = document.getElementById("txtGifTres");
    copyText.value = textoDesGif;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var divCopySucess = document.getElementsByClassName("textoCopy")[2];
    divCopySucess.style.display = "block";
    setTimeout(copySucess, 2000);
    function copySucess() {
        divCopySucess.style.display = "none";
    }
}

// INICIO ABRIR TELA DE ENVIO
window.onclick = function(event) {
    if (event.target == telaTransparenteUm) {
        telaTransparenteUm.style.display = "none";
    }
    if (event.target == telaTransparenteDois) {
        telaTransparenteDois.style.display = "none";
    }
    if (event.target == telaTransparenteTres) {
        telaTransparenteTres.style.display = "none";
    }
  } 
// GifOi
function abrirTelaGifOi() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOi() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteUm");
    exibirTelaEnvio.style.display = "none";
}

// GifOla
function abrirTelaGifOla() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifOla() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteDois");
    exibirTelaEnvio.style.display = "none";
}

// GifComoVai
function abrirTelaGifComoVai() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteTres");
    exibirTelaEnvio.style.display = "block";
}

function fecharTelaGifComoVai() {
    var exibirTelaEnvio = document.getElementById("telaTransparenteTres");
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