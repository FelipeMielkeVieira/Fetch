let tela = document.querySelector('body');

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

criartabela();

function criartabela() {
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

        redirecionamento.href = './paginauser/index.html';

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