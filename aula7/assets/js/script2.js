//a)

document.getElementById('titulo').innerText = "Bem-vindo ao meu site!";

//b)

document.getElementById('minhaDiv').innerHTML = "<p>Este é um novo parágrafo.</p>";

//c)

document.getElementById('meuLink').setAttribute('href', 'https://www.youtube.com.br');

//d)

document.getElementById('meuParagrafo').classList.add('destaque');

//e)

let novoParagrafo = document.createElement('p');
novoParagrafo.innnerText = "Este é outro parágrafo.";
document.body.appendChild(novoParagrafo);