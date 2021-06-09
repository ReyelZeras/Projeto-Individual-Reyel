
let email_administracao;
let nome_administracao;
let idAdm_administracao;
let sexo_administracao;




function redirecionar_login() {
    window.location.href = 'loginAdm.html';
}

function verificar_autenticacao() {
    
    
    email_administracao = sessionStorage.email_administracao_meuapp;
    sexo_administracao = sessionStorage.sexo_administracao_meuapp;
    nome_administracao = sessionStorage.nome_administracao_meuapp;
    idAdm_administracao = sessionStorage.idadministracao_administracao_meuapp;
    // dataNasc_administracao = sessionStorage.dataNasc_administracao_meuapp;
    
    
    
    if (email_administracao == undefined)  {
        redirecionar_login();
    } else {
        b_user.innerHTML = email_administracao;
        b_nome.innerHTML = nome_administracao;
      
        if (sexo_administracao == "masculino") {
            div_img1.innerHTML = `<img src="imagens/generos/man.svg" alt="" class="img_usuario">`;
        }
        if (sexo_administracao == "feminino") {
            div_img1.innerHTML = `<img src="imagens/generos/woman.svg" alt="" class="img_usuario">`;
        }
        if (sexo_administracao == "outro") {
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
    fetch(`/administracoes/sessao/${email_administracao}`, {cache:'no-store'})
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
    fetch(`/administracao/sair/${email_administracao}`, {cache:'no-store'}); 
}