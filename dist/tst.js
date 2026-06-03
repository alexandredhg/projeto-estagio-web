// Seleciona o botão de logout pelo ID (certifique-se de ter esse botão no HTML das páginas restritas)
const btnLogout = document.getElementById("btnLogout");
// Verifica se o botão realmente existe na página atual antes de adicionar o evento
if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        // Se no futuro usar localStorage para controle de acesso, limpe aqui:
        // localStorage.removeItem("usuarioLogado");
        // Redireciona o usuário de volta para a tela de login
        window.location.href = "login.html"; // Substitua pelo nome correto do seu arquivo de login
    });
}
export {};
//# sourceMappingURL=tst.js.map