// Exer5: 10 pessoas com idade, peso, sexo
const dataset = [
  {idade: 25, peso: 78.5, sexo: 'M'},
  {idade: 30, peso: 65.2, sexo: 'F'},
  {idade: 22, peso: 70.0, sexo: 'M'},
  {idade: 28, peso: 58.1, sexo: 'F'},
  {idade: 45, peso: 90.3, sexo: 'M'},
  {idade: 33, peso: 62.0, sexo: 'F'},
  {idade: 40, peso: 85.4, sexo: 'M'},
  {idade: 26, peso: 55.0, sexo: 'F'},
  {idade: 19, peso: 68.0, sexo: 'M'},
  {idade: 37, peso: 59.5, sexo: 'F'}
];

const homens = dataset.filter(p => p.sexo === 'M');
const mulheres = dataset.filter(p => p.sexo === 'F');

const totalHomens = homens.length;
const totalMulheres = mulheres.length;

const mediaIdadeHomens = totalHomens > 0 ? homens.reduce((s,p) => s + p.idade,0)/totalHomens : 0;
const mediaPesoMulheres = totalMulheres > 0 ? mulheres.reduce((s,p) => s + p.peso,0)/totalMulheres : 0;

console.log(`Total de homens: ${totalHomens}`);
console.log(`Total de mulheres: ${totalMulheres}`);
console.log(`Média das idades dos homens: ${mediaIdadeHomens.toFixed(2)}`);
console.log(`Média dos pesos das mulheres: ${mediaPesoMulheres.toFixed(2)} kg`);
