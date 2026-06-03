const btnLogout = document.getElementById("btnLogout");
const divMensagemLogout = document.getElementById("divMensagemLogout");
// Evento de Clique no Botão de Logout
btnLogout.addEventListener("click", () => {
    // 1. Limpa os dados de sessão salvos no localStorage
    localStorage.removeItem("usuarioAutenticado");
    localStorage.removeItem("tipoUsuario");
    // Opcional: Se quiser apagar TUDO do localStorage, use a linha abaixo em vez das duas de cima:
    // localStorage.clear();
    // 2. Exibe a mensagem de feedback visual para o usuário
    if (divMensagemLogout) {
        divMensagemLogout.style.color = "blue"; // Ou a cor que preferir para o logout
        divMensagemLogout.textContent = "Efetuando logout... Até logo!";
    }
    // 3. Aguarda o tempo para o usuário ver a mensagem e redireciona para a tela de login
    setTimeout(() => {
        window.location.href = "login.html"; // Altere para o nome correto do seu arquivo de login
    }, 2000);
});
export {};
//# sourceMappingURL=teste.js.map