const logoutBtn = document.getElementById('logout-btn') as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

logoutBtn.addEventListener('click', (event) => {
  event.preventDefault;

  divMensagem.textContent = "Encerrar a Sessão!"

  setTimeout(() => {
    localStorage.clear();
    window.location.replace("login.html");
  }, 10000);


});