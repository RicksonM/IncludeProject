
// Btn Copy
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
// var imagemCopyUm = document.createElement("img");
// imagemCopyUm.src = "/IncludeProject/img/icons/iconCopy.svg";
// imagemCopyUm.className = "fab";
// imagemCopyUm.title = "Copiar texto";
// document.getElementsByClassName("telaDeEnvio")[0].appendChild(imagemCopyUm);

// var inptextUm = document.createElement("input");
// inptextUm.type = "text";
// inptextUm.id = "txtGifUm";
// inptextUm.setAttribute("style", "position: relative; z-index: -1; opacity: 0;");
// document.getElementsByClassName("telaDeEnvio")[0].appendChild(inptextUm);

// imagemCopyUm.addEventListener("click", copiarTextoUm);

// function copiarTextoUm() {
//     var textoDesGif = document.getElementsByClassName("DesGif")[0].innerText;
//     var copyText = document.getElementById("txtGifUm");
//     copyText.value = textoDesGif;
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
// }

// // Btn CopyDois
// var imagemCopyDois = document.createElement("img");
// imagemCopyDois.src = "/IncludeProject/img/icons/iconCopy.svg";
// imagemCopyDois.className = "fab";
// imagemCopyDois.title = "Copiar texto";
// document.getElementsByClassName("telaDeEnvio")[1].appendChild(imagemCopyDois);

// var inptextDois = document.createElement("input");
// inptextDois.type = "text";
// inptextDois.id = "txtGifDois";
// inptextDois.setAttribute("style", "position: relative; z-index: -1; opacity: 0;");
// document.getElementsByClassName("telaDeEnvio")[1].appendChild(inptextDois);

// imagemCopyDois.addEventListener("click", copiarTextoDois);

// function copiarTextoDois() {
//     var textoDesGif = document.getElementsByClassName("DesGif")[1].innerText;
//     var copyText = document.getElementById("txtGifDois");
//     copyText.value = textoDesGif;
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     alert("Copied the text: " + copyText.value);
// }

// INICIO ABRIR TELA DE ENVIO 
window.onclick = function (event) {
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