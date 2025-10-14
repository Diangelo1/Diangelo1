// Exer1: conjunto de 15 pessoas (altura em metros, sexo 'M' ou 'F')
const pessoas = [
  {altura: 1.70, sexo: 'M'},
  {altura: 1.62, sexo: 'F'},
  {altura: 1.85, sexo: 'M'},
  {altura: 1.54, sexo: 'F'},
  {altura: 1.78, sexo: 'M'},
  {altura: 1.60, sexo: 'F'},
  {altura: 1.92, sexo: 'M'},
  {altura: 1.68, sexo: 'F'},
  {altura: 1.73, sexo: 'M'},
  {altura: 1.59, sexo: 'F'},
  {altura: 1.81, sexo: 'M'},
  {altura: 1.66, sexo: 'F'},
  {altura: 1.55, sexo: 'F'},
  {altura: 1.74, sexo: 'M'},
  {altura: 1.63, sexo: 'F'}
];

// maior e menor altura
const alturas = pessoas.map(p => p.altura);
const maior = Math.max(...alturas);
const menor = Math.min(...alturas);

// média de altura das mulheres
const mulheres = pessoas.filter(p => p.sexo === 'F');
const mediaMulheres = mulheres.length > 0
  ? mulheres.reduce((s,p) => s + p.altura, 0) / mulheres.length
  : 0;

// número de homens
const numHomens = pessoas.filter(p => p.sexo === 'M').length;

console.log(`Maior altura: ${maior.toFixed(2)} m`);
console.log(`Menor altura: ${menor.toFixed(2)} m`);
console.log(`Média altura (mulheres): ${mediaMulheres.toFixed(2)} m`);
console.log(`Número de homens: ${numHomens}`);