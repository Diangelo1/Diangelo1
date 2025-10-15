//a)Selecionar o elemento <h1> e alterar texto
let titulo =  document.getElementById('titulo');

titulo.innerText = "Bem vindo ao meu site.";

//b)Selecione elementos com classe texto e altere cores
let texto = document.getElementsByClassName('texto');
texto[0].style.color = "blue";
texto[1].style.backgroundColor = "green";
texto[1].style.color = "white";

//c)Selecionar o paragrafo e mudar o texto
let texto1 = document.querySelector('p');
texto1.innerText = "Este é um novo texto.";

//d)Selecionar todos os paragrafos e imprima a quantidade de paragrafos
let todosParagrafo = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafo.length} paragrafos por página.`);

//e)Criando um novo elemento <p>
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é um novo paragrafo.';

//e1)Adicionando o novo paragrafo ao elemento <div>
let novaDiv = document.getElementById('novaDiv');
novaDiv.appendChild(novoParagrafo);

//alterar atributos <a href>
let link = document.getElementById('link');
link.setAttribute('href', 'https://www.youtube.com/');
console.log(link.getAttribute('href'));

let paragrafo =  document.getElementById('paragrafoNovo');
paragrafo.classList.add('destaque');
paragrafo.classList.remove('destaque');

