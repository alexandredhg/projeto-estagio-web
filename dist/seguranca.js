// 1. GUARDA DE SEGURANÇA (Roda imediatamente ao carregar a página)
function verificarAutenticacao() {
    const estaAutenticado = localStorage.getItem("usuarioAutenticado");
    if (estaAutenticado !== "true") {
        // Se tentar acessar a URL direto sem logar, limpa resíduos e chuta para o login
        localStorage.clear();
        alert("Acesso restrito! Por favor, faça login para continuar.");
        window.location.href = "login.html"; // Altere para o nome do seu arquivo de login
    }
}
// Executa a verificação assim que o script é lido
verificarAutenticacao();
// 2. LÓGICA DO BOTÃO DE LOGOUT (Roda após o HTML carregar)
document.addEventListener("DOMContentLoaded", () => {
    const btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener("click", () => {
            // Limpa todos os dados salvos no localStorage (sessão e tipo de usuário)
            localStorage.clear();
            // Redireciona de volta para a tela de login
            window.location.href = "login.html";
        });
    }
});
export {};
//# sourceMappingURL=seguranca.js.map