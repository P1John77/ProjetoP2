const API_BASE_URL = 'https://app-p2-js-a2fa67e2c96b.herokuapp.com';

function obterMensagens() {
    return $.ajax({
        url: `${API_BASE_URL}/mensagens`,
        method: 'GET',
        dataType: 'json'
    });
}

function inserirMensagem(mensagem) {
    return $.ajax({
        url: `${API_BASE_URL}/mensagens`,
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        contentType: 'application/json'
    });
}

function validarUsuario(objLoginSenha) {
    return $.ajax({
        url: `${API_BASE_URL}/usuarios/validar`,
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    });
}

// Função para verificar se o usuário está logado
function usuarioEstaLogado() {
    return localStorage.getItem('usuarioLogado') === 'true';
}

// Função para fazer logout
function fazerLogout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}