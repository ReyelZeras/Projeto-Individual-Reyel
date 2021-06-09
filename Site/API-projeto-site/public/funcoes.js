let usuario_usuario;
let email_usuario;

let nome_usuario;
let dataNasc_usuario;
let jogadorFavorito_usuario;
let sexo_usuario;
let idUsuario_usuario;




function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    
    usuario_usuario = sessionStorage.usuario_usuario_meuapp;
    email_usuario = sessionStorage.email_usuario_meuapp;
    sexo_usuario = sessionStorage.sexo_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    idUsuario_usuario = sessionStorage.idUsuario_usuario_meuapp;
    dataNasc_usuario = sessionStorage.dataNasc_usuario_meuapp;
    jogadorFavorito_usuario = sessionStorage.jogadorFavorito_usuario_meuapp;
    
    
    if (usuario_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_user.innerHTML = usuario_usuario;
        b_nome.innerHTML = nome_usuario;
        b_dataNasc.innerHTML = dataNasc_usuario;
        if (sexo_usuario == "masculino") {
            div_img1.innerHTML = `<img src="imagens/generos/man.svg" alt="" class="img_usuario">`;
        }
        if (sexo_usuario == "feminino") {
            div_img1.innerHTML = `<img src="imagens/generos/woman.svg" alt="" class="img_usuario">`;
        }
        if (sexo_usuario == "outro") {
            div_img1.innerHTML = `<img src="imagens/generos/outro.svg" alt="" class="img_usuario">`;
        }


        // link_perfil.style.display = "block";

        
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${email_usuario}`, {cache:'no-store'}); 
}