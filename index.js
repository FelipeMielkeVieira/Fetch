let tela = document.querySelector('body');

let botao = document.createElement("button");
botao.className = 'botao';
botao.innerText = 'Cadastre-se';
botao.onclick = modal;
tela.appendChild(botao);

let botao1 = document.createElement('button');
botao1.className = 'bt1';
botao1.innerText = 'Cadastrar';
botao1.onclick = cadastrar;

let botao2 = document.createElement('button');
botao2.className = 'bt1';
botao2.innerText = 'Cancelar';
botao2.onclick = voltar;

let caixa;
let mensagem = document.createElement("div");

let lista = [
    { name: 'Bruno Henrique Verbinnen de Carvalho', username: 'brunohvc'},
    { name: 'Vytor Augusto Rosa', username: 'K43RU'},
    { name: 'João Henrique Meirles da Silva', username: 'nihilth'},
    { name: 'Otavio Augusto dos Santos', username: 'SantOtavio'},
    { name: 'Camilly de Souza Pessotti', username: 'camillyPessotti'},
    { name: 'Thiago Marins Braga', username: 'ThiagoBrag'},
    { name: 'Ester Girelli', username: 'Esterzinha12'},
    { name: 'Gustavo Rebelatto Zapella', username: 'rebelattogustavo'},
    { name: 'Henrique Cole Fernandes', username: 'HenriqueCole'},
    { name: 'Kenzo Hideaky Ferreira Sato', username: 'Kenzohfs'},
    { name: 'Vinícius Bonatti Benner', username: 'viniciusz1'},
    { name: 'Leonardo Heitor Poglia', username: 'leopoglia'},
    { name: 'Felipe Mielke Vieira', username: 'FelipeMielkeVieira'},
    { name: 'Eduarda Bolgenhagen De Campos', username: 'eduardabolgenhagen'},
    { name: 'Matheus Franzener Hohmann', username: 'MatheusFranzener'},
    { name: 'Leonardo Giuseppe de Souza Rafaelli', username: 'LeonardoRafaelli'},
    { name: 'Diego Planinscheck', username: 'frst157'},
    { name: 'Camilly Vitoria da Rocha Goltz', username: 'VitoriaCamilly'},
    { name: 'Bruna Alves Mafra', username: 'BMafra'},
    { name: 'Otavio Matheus Neves', username: 'otavionvs'}
]

let nome = document.createElement('input');
nome.placeholder = 'Nome';
nome.className = 'nome';

let usernm = document.createElement('input');
usernm.placeholder = 'Username';
usernm.className = 'nome';

criartabela();


let divfiltro;
let finput;
let botaofiltro;
criarfiltro();
botaofiltro.onclick = filtrar;

finput.oninput = filtrar;

function criarfiltro() {
    
    divfiltro = document.createElement('div');
    divfiltro.className = 'divfiltro';

    finput = document.createElement('input');
    finput.className = 'finput';
    finput.placeholder = 'Filtrar';
    divfiltro.appendChild(finput);

    botaofiltro = document.createElement('button');
    botaofiltro.className = 'botaofiltro';
    botaofiltro.innerText = 'Buscar';
    divfiltro.appendChild(botaofiltro);

    tela.appendChild(divfiltro);
}

let filtrado;

function filtrar() {

    function buscar () {
        if (name == finput.value && value != '') {
            return value;
        } 
    }

    lista = lista.filter(buscar);

    criartabela();
}

function modal() {

    caixa = document.createElement("div");
    caixa.className = 'caixa'
    tela.appendChild(caixa);
    let caixap = document.createElement("div");
    caixap.className = 'caixamenor';
    let titulo = document.createElement("span");
    titulo.innerText = 'Cadastre-se';
    titulo.className = 'tit';
    let inferior = document.createElement('div');
    inferior.className = 'inferior';
    let senha = document.createElement('input');
    senha.placeholder = 'Senha';
    senha.type = 'password';
    senha.className = 'senha';
    let repsenha = document.createElement('input');
    repsenha.placeholder = 'Repetir Senha';
    repsenha.type = 'password';
    repsenha.className = 'nome';
    caixa.appendChild(titulo);
    caixa.appendChild(caixap);
    caixap.appendChild(nome);
    caixap.appendChild(usernm);
    caixap.appendChild(senha);
    caixap.appendChild(repsenha);
    caixap.appendChild(inferior);
    inferior.appendChild(botao1);
    inferior.appendChild(botao2);
    cont = 1;
}

function criartabela() {

    let tabelaAtual = document.querySelector('table');

    if (tabelaAtual) {
        tabelaAtual.remove();
        contagem = 0;
    }

    let tabela = document.createElement('table');
    let linha = document.createElement('tr');

    let headernome = document.createElement('th');
    let headeruser = document.createElement('th');
    
    headernome.innerText = 'Nome:'
    headeruser.innerText = 'Usuário:'

    linha.appendChild(headernome);
    linha.appendChild(headeruser);
    tabela.appendChild(linha);

    montarlinha(tabela);

    tela.appendChild(tabela);
}

function montarlinha(tabela) {

    lista.forEach(function (e) {
        let linha = document.createElement('tr');

        let colunanome = document.createElement('td');
        let colunauser = document.createElement('td');
        let colunabotao = document.createElement('td');
        let botaotabela = document.createElement('button');
        let redirecionamento = document.createElement('a');

        let usern = e.username;

        redirecionamento.href = './paginauser/index.html?' + usern;

        colunabotao.className = 'colunabotao';
        botaotabela.className = 'botaotabela';
    
        colunanome.innerText = e.name;
        colunauser.innerText = e.username;
        colunanome.style.paddingLeft = '10px';
        colunanome.style.paddingTop = '4px';
        colunanome.style.paddingBottom = '4px';
        colunauser.style.paddingLeft = '10px';
        colunauser.style.paddingTop = '4px';
        colunauser.style.paddingBottom = '4px';

        botaotabela.appendChild(redirecionamento);
        redirecionamento.innerText = 'Acessar';
    
        colunabotao.appendChild(botaotabela);
        linha.appendChild(colunanome);
        linha.appendChild(colunauser);
        linha.appendChild(colunabotao);

        tabela.appendChild(linha);
    })   
}

function alert(a) {

    if(a == 1) {

        mensagem.className = 'mensagem';
        mensagem.style.borderColor = 'rgb(141, 15, 15)'
        mensagem.style.backgroundColor = 'red';
        mensagem.innerText = 'Preencha todos os campos!';
        tela.appendChild(mensagem);

    } else {

        mensagem.className = 'mensagem';
        mensagem.style.borderColor = 'green';
        mensagem.style.backgroundColor = 'rgb(20, 161, 20)';
        mensagem.innerText = 'Cadastro realizado com sucesso!';
        tela.appendChild(mensagem);
        tela.removeChild(caixa);
        nome.value = '';
        usernm.value = '';
        criartabela();

    }

    setTimeout(tirarmensagem, 3000);

}

function tirarmensagem() {
    tela.removeChild(mensagem);
}

function voltar() {
    tela.removeChild(caixa);
    tela.style.opacity = '1';
    nome.value = '';
    sobrenome.value = '';
    data.value = '';
}

function cadastrar() {

    let nome2 = nome.value;
    let user = usernm.value;

    if(nome2 != '' && user != '') {

        let variavel = {
            name: nome2,
            username: user
        }
    
        lista.push(variavel);

        alert(2);

    } else {

        alert(1);

    }
}