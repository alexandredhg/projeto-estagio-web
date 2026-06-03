const logoutBtn = document.getElementById('logout-btn');
const divMensagem = document.getElementById("divMensagem");
logoutBtn.addEventListener('click', (event) => {
    event.preventDefault;
    divMensagem.textContent = "Encerrar a Sessão!";
    setTimeout(() => {
        localStorage.clear();
        window.location.replace("login.html");
    }, 10000);
});
export {};
//# sourceMappingURL=logout.js.map