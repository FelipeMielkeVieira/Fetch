let tela = document.querySelector('body');

let head = document.querySelector('head');

let username1 = document.location.search;
let username2 = username1.replace('?', '');

let imagem = document.createElement('img');
let nomeuser = document.createElement('p');
let usuario = document.createElement('p');

let titulo = document.createElement('title');
titulo.innerText = username2;
head.appendChild(titulo);

let private;
let updated;

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

                private = data.private;
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

                data.forEach(a => {

                    let linha = document.createElement('div');
                    linha.className = 'linharep';

                    let nomer = document.createElement('p');
                    let nomea = document.createElement('a');
                    nomea.className = 'nomea';
                    nomea.href = 'https://github.com/' + username2 + '/' + a.name;

                    nomer.appendChild(nomea);

                    nomea.innerText = a.name;
                    nomer.className = 'nomer';

                    let pripub = document.createElement('div');
                    pripub.className = 'private';

                    private = a.private;

                    let descricao = document.createElement('span');
                    descricao.innerText = a.description;
                    descricao.className = 'descricao';

                    let lang = document.createElement('span');
                    lang.innerText = a.language;
                    lang.className = 'lang';

                    if(lang.innerText != '') {
                        lang.style.marginRight = '30px';
                    }

                    let data1 = a.updated_at;
                    let data2 = new Date(data1);

                    let dia = data2.getDay();
                    let ano = data2.getFullYear();
                    let mes = data2.getMonth();

                    let horas = data2.getHours();

                    let horasupd = (dia * 24) + (mes * 30.5 * 24) + (ano * 365 * 24) + horas;


                    let dataa = new Date();
                    let diaa = dataa.getDay();
                    let anoa = dataa.getFullYear();
                    let mesa = dataa.getMonth();
                    let horasa = dataa.getHours();

                    let horasatuais = (diaa * 24) + (mesa * 30.5 * 24) + (anoa * 365 * 24) + horasa;

                    let ultimoup = Math.sqrt((horasatuais - horasupd) * (horasatuais - horasupd));
                    let horaoudia;

                    if(ultimoup > 24) {
                        ultimoup = ultimoup % 24;
                        horaoudia = 'days';
                    } else {
                        horaoudia = 'hours';
                    }

                    updated = document.createElement('span');
                    updated.className = 'updated';
                    updated.innerText = 'Updated ' + ultimoup + ' ' + horaoudia + ' ago';

                    if (private == false) {
                        pripub.innerText = 'Public';
                    } else {
                        pripub.innerText = 'Private';
                    }

                    let divlinha1 = document.createElement('div');
                    divlinha1.className = 'divlinha1';

                    let divlinha2 = document.createElement('div');
                    divlinha2.className = 'divlinha3';

                    let divlinha3 = document.createElement('div');
                    divlinha3.className = 'divlinha3';

                    linha.appendChild(divlinha1);
                    linha.appendChild(divlinha2);
                    linha.appendChild(divlinha3);
                    divlinha1.appendChild(nomer);
                    divlinha1.appendChild(pripub);
                    divlinha2.appendChild(descricao);
                    divlinha3.appendChild(lang);
                    divlinha3.appendChild(updated);
                    direita.appendChild(linha);
                });
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

}

criarpagina();