
const btn = document.querySelector("#btnCalcular");
const tabela = document.querySelector("#tabela tbody");

let numero1 = 10;
let numero2 = 5;

btn.addEventListener('click', () => {
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);

    if (!numero1 || !numero2 || numero2 === 0) {
        alert("Valores invalidos");
        return;
    }

    let soma = numero1 + numero2;
    let multiplica = numero1 * numero2;
    let divide = numero1 / numero2;
    let resto = numero1 % numero2;

    tabela.innerHTML = ""

    //Cria uma nova linha 
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
    <td>Soma</td>
    <td>${soma}</td>
    `;

    const linhaMulti = document.createElement('tr');
    linhaMulti.innerHTML = `
    <td>Multiplica</td>
    <td>${multiplica}</td>
    `;

    const linhaDivide = document.createElement('tr');
    linhaDivide.innerHTML = `
    <td>Divide</td>
    <td>${divide}</td> 
    `;

    const linhaResto = document.createElement('tr');
    linhaResto.innerHTML = `
    <td>Resto</td>
    <td>${resto}</td> 
    `;

    tabela.appendChild(novaLinha);
    tabela.appendChild(linhaMulti);
    tabela.appendChild(linhaDivide);
    tabela.appendChild(linhaResto);

})