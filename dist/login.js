const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail");
const txtSenha = document.getElementById("txtSenha");
const toggleSenhaBtn = document.getElementById('toggleSenha');
const divMensagem = document.getElementById("divMensagem");
// Alternar visibilidade da senha
toggleSenhaBtn.addEventListener('click', () => {
    const type = txtSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtSenha.setAttribute('type', type);
    toggleSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});
// Evento de Submit do Formulário
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtSenha.value;
    if (!email) {
        divMensagem.style.color = "red";
        divMensagem.textContent = "O Campo E-mail é Obrigatório!";
        return;
    }
    if (!senha) {
        divMensagem.style.color = "red";
        divMensagem.textContent = "O Campo Senha é Obrigatório!";
        return;
    }
    // Fluxo para Coordenação
    if ((email == "adm1@gmail.com" && senha == "123") || (email == "adm2@gmail.com" && senha == "321")) {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login Realizado com Sucesso!";
        // Define a sessão e o nível de acesso
        localStorage.setItem("usuarioAutenticado", "true");
        localStorage.setItem("tipoUsuario", "coordenacao");
        setTimeout(() => {
            window.location.href = "areaRestritaCoordenacao.html";
        }, 2500);
    }
    // Fluxo para Ambulatório
    else if (email == "sec@gmail.com" && senha == "456") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login Realizado com Sucesso!";
        // Define a sessão e o nível de acesso
        localStorage.setItem("usuarioAutenticado", "true");
        localStorage.setItem("tipoUsuario", "ambulatorio");
        setTimeout(() => {
            window.location.href = "areaAmbulatorio.html";
        }, 2500);
    }
    // Fluxo para Terapeuta
    else if (email == "tera@gmail.com" && senha == "789") {
        divMensagem.style.color = "green";
        divMensagem.textContent = "Login Realizado com Sucesso!";
        // Define a sessão e o nível de acesso
        localStorage.setItem("usuarioAutenticado", "true");
        localStorage.setItem("tipoUsuario", "terapeuta");
        setTimeout(() => {
            window.location.href = "areaTerapeuta.html";
        }, 2500);
    }
    else {
        divMensagem.style.color = "red";
        divMensagem.textContent = "Senha ou E-mail Inválido!";
    }
});
export {};
//# sourceMappingURL=login.js.map