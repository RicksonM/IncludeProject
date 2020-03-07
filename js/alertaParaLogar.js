window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function abrirLogin() {
    document.getElementById("modal").style.display = "block";
}

function fecharLogin() {
    document.getElementById("modal").style.display = "none";
}