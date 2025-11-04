const formRedefinicaoSenha = document.getElementById("formRedefinicaoSenha") as HTMLFormElement;
const txtSenha = document.getElementById("txtSenha") as HTMLInputElement;
const toggleSenhaBtn = document.getElementById('toggleSenha') as HTMLButtonElement;
const txtConfSenha = document.getElementById("txtConfSenha") as HTMLInputElement;
const toggleConfSenhaBtn = document.getElementById('toggleConfSenha') as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

toggleSenhaBtn.addEventListener('click', (mostrar) => {
    // Alterna o tipo do campo de senha
    const type = txtSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtSenha.setAttribute('type', type);
    // Altera o texto do botão para refletir a nova ação
    toggleSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

toggleConfSenhaBtn.addEventListener('click', (mostrar) => {
    // Alterna o tipo do campo de senha
    const type = txtConfSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    txtConfSenha.setAttribute('type', type);
    // Altera o texto do botão para refletir a nova ação
    toggleConfSenhaBtn.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

formRedefinicaoSenha.addEventListener("submit", (event) => {
    event.preventDefault();

    const senha = txtSenha.value;
    const confSenha = txtConfSenha.value;

    if(!senha){
        divMensagem.style.color = "red";
        divMensagem.textContent = "O Campo 'Senha' é obrigatório!";
        return;

    }else if(!confSenha){
        divMensagem.style.color = "red";
        divMensagem.textContent = "O Campo 'Confirmar Senha' é obrigatório!";
        return;

    }else if(senha.length < 4){
        divMensagem.style.color = "red";
        divMensagem.textContent = "A Senha Deve Conter no Mínimo 'Quatro' Caracteres!";
        return;

    }else if(senha.length > 6){
        divMensagem.style.color = "red";
        divMensagem.textContent = "A Senha Deve Conter no Máximo 'Seis' Caracteres!";
        return;

    }else if(senha != confSenha){
        divMensagem.style.color = "red";
        divMensagem.textContent = "As Senhas Informadas Precisam ser Iguais!";
        return;               

    }else{
        divMensagem.style.color = "green";
        divMensagem.textContent = "O Cadastro Foi Realizado Com Sucesso!";
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);     
        
        
    }

});
