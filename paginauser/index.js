let tela = document.querySelector('body');

let username1 = document.location.search;
let username2 = username1.replace('?', '');

let imagem = document.createElement('img');
let nomeuser = document.createElement('p');

function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                imagem.src = data.avatar_url;

                nomeuser.innerText = data.name;
                console.log(data.name);
                
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
    });
}

function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
    });
}

getUserGithub(username2);
getUserReposGithub(username2);

function criarpagina() {

    let esquerda = document.createElement('div');
    esquerda.className = 'esquerda';

    let direita = document.createElement('div');
    direita.className = 'direita';

    tela.appendChild(esquerda);
    tela.appendChild(direita);

    partedireita(direita);
    parteesquerda(esquerda);
}

function partedireita(a) {

    let divdireita1 = document.createElement('div');
    divdireita1.className = 'divdireita1'

    let find = document.createElement('input');
    find.placeholder = 'Find a repository...'
    find.className = 'find';

    let type = document.createElement('button');
    type.placeholder = 'Type';
    type.className = 'type';

    divdireita1.appendChild(find);
    a.appendChild(divdireita1);
}

function parteesquerda(a) {

    a.appendChild(imagem);
    a.appendChild(nomeuser);
}

criarpagina();