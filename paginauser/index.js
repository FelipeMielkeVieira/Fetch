let tela = document.querySelector('body');

let username1 = document.location.search;
let username2 = username1.replace('?', '');

let imagem = document.createElement('img');
let nomeuser = document.createElement('p');
let usuario = document.createElement('p');

let listarep;

function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {

                console.log(data);

                imagem.src = data.avatar_url;
                imagem.className = 'avatar';

                nomeuser.innerText = data.name;
                nomeuser.className = 'nomeuser';
                
                usuario.innerText = data.login;
                usuario.className = 'username';
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
    });
}

function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
                listarep = data;
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
    });
}

getUserGithub(username2);
getUserReposGithub(username2);

let esquerda;
let direita;

function criarpagina() {

    esquerda = document.createElement('div');
    esquerda.className = 'esquerda';

    direita = document.createElement('div');
    direita.className = 'direita';

    tela.appendChild(esquerda);
    tela.appendChild(direita);

    partedireita();
    parteesquerda();
}

function partedireita() {

    let divdireita1 = document.createElement('div');
    divdireita1.className = 'divdireita1'

    let find = document.createElement('input');
    find.placeholder = 'Find a repository...'
    find.className = 'find';

    let type = document.createElement('button');
    type.innerText = 'Type';
    type.className = 'type';

    let language = document.createElement('button');
    language.innerText = 'Language';
    language.className = 'language';

    let sort = document.createElement('button');
    sort.innerText = 'Sort';
    sort.className = 'sort';

    let newr = document.createElement('button');
    newr.innerText = 'New';
    newr.className = 'newr';

    divdireita1.appendChild(find);
    divdireita1.appendChild(type);
    divdireita1.appendChild(language);
    divdireita1.appendChild(sort);
    divdireita1.appendChild(newr);
    direita.appendChild(divdireita1);

    repositorios();
}

function parteesquerda() {

    let nomeeuser = document.createElement('div');
    nomeeuser.className = 'nomeeuser';

    let edit = document.createElement('button');
    edit.innerText = 'Edit profile';
    edit.className = 'edit';

    esquerda.appendChild(imagem);

    nomeeuser.appendChild(nomeuser);
    nomeeuser.appendChild(usuario);
    nomeeuser.appendChild(edit);

    esquerda.appendChild(nomeeuser);
}

function repositorios() {

    listarep.forEach(a => {
        
        let linha = document.createElement('div');
        linha.className = 'linharep';

        let nomer = a.name;
        nomer.className = 'nomer';

        linha.appendChild(nomer);

        direita.appendChild(linha);
    });
}

criarpagina();