var todasPalavras = "";
var valorDoTextArea = document.getElementById("textAreaEnviarGifs");

function enviarMetro() {
    var palavraMetro = document.getElementsByClassName("DesGif")[0].innerText;
    todasPalavras += `${palavraMetro} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarOnibus() {
    var palavraOnibus = document.getElementsByClassName("DesGif")[1].innerText;
    todasPalavras += `${palavraOnibus} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarCafeComLeite() {
    var palavraCafeComLeite = document.getElementsByClassName("DesGif")[2].innerText;
    todasPalavras += `${palavraCafeComLeite} `;
    valorDoTextArea.value = `${todasPalavras}`;
}


function enviarFeijaoComArroz() {
    var palavraFeijaoComArroz = document.getElementsByClassName("DesGif")[3].innerText;
    todasPalavras += `${palavraFeijaoComArroz} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarEnfermeiro() {
    var palavraEnfermeiro = document.getElementsByClassName("DesGif")[4].innerText;
    todasPalavras += `${palavraEnfermeiro} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarProfessor() {
    var palavraProfessor = document.getElementsByClassName("DesGif")[5].innerText;
    todasPalavras += `${palavraProfessor} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarOla() {
    var palavraOla = document.getElementsByClassName("DesGif")[6].innerText;
    todasPalavras += `${palavraOla} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarOi() {
    var palavraOi = document.getElementsByClassName("DesGif")[7].innerText;
    todasPalavras += `${palavraOi} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarComoVai() {
    var palavraComoVai = document.getElementsByClassName("DesGif")[8].innerText;
    todasPalavras += `${palavraComoVai} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarBoaNoite() {
    var palavraBoaNoite = document.getElementsByClassName("DesGif")[9].innerText;
    todasPalavras += `${palavraBoaNoite} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarBoaTarde() {
    var palavraBoaTarde = document.getElementsByClassName("DesGif")[10].innerText;
    todasPalavras += `${palavraBoaTarde} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function enviarBomDia() {
    var palavraBomDia = document.getElementsByClassName("DesGif")[11].innerText;
    todasPalavras += `${palavraBomDia} `;
    valorDoTextArea.value = `${todasPalavras}`;
}

function ReceberValores() {
    todasPalavras = valorDoTextArea.value;
}

function enviarPalavras() {
    if (valorDoTextArea.value.length == 0) {
        alert("O campo de mensagem não pode estar vazio");
    } else {
        window.open(`https://api.whatsapp.com/send?text=${todasPalavras}`);  
    } 
}