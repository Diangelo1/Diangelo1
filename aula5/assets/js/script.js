/*
    aula de javascript
    coceitos basicos
*/

alert('texto externo');

//Variaveis
/*
    -tipagem dinamica
    -var e let >> a diferença é que o let pertence a um escopo. 
*/

/*var nome = 'Diangelo';

{
    var nome = 'Bett';
}

alert(nome)

let nome = 'Diangelo';

{
    let nome = 'Bett';
    alert(nome)
}
 
alert(nome)*/

const PI = 3.14;
const array = [3.147];
array[0]=5;
array[1]=3.147;
console.log(PI);
console.log(array);
let nome = 'Diangelo';// string "",'',`
let nome1 = "Diangelo";//string
console.log(nome1);
let sobrenome = 'Bett Vieira';
console.log(sobrenome);
let nome2 = `Diangelo ${sobrenome}`;//string
console.log(nome2);

let opcao = true;//boolean
let peso = 80.5;//float
let idade = 25;//inteiro

let idades = [42, 36, 7, 99]; //array
console.log(idades[0]);
console.log(idades[1]);
console.log(idades[2]);
idades[99] = 'ultimo';
console.log(idades);
let valores = [10, 'Diangelo', 5.66, true];
console.log(valores);

//objeto do html
let objeto = document.querySelector('h1');
console.log(objeto.textContent);
objeto.textContent = 'Novo texto';

//funcoes
function soma(n1=2, n2=3){

    console.log(`Soma: ${n1+n2}`);
}

soma(8, 10);
soma();

let valor1 = prompt('Digite o valor 1: ')
let valor2 = 20;

if (valor1 > valor2){
    console.log('Valor 1 é maior que Valor 2.');
}
else{
    console.log('Valor 2 é maior que Valor 1.')
}





