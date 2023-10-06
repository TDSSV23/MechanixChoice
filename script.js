// INICIO BUTTON SIDEBAR

// OPACIDADE AO CLICAR NO BUTTON
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
// FIM DO EFEITO DE OPACIDADE NO BUTTON
 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
  // FIM BUTTON SIDEBAR

  // Obtém o botão "Abrir" e a janela modal
var openButton = document.getElementById("openModal");
var modal = document.getElementById("myModal");

// Quando o botão "Abrir" é clicado, exibe a janela modal
openButton.addEventListener("click", function() {
  modal.style.display = "block";
});

// Para fechar a janela modal
function closeModal() {
  modal.style.display = "none";
}

// Você pode adicionar um evento de clique fora da janela modal para fechá-la
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});