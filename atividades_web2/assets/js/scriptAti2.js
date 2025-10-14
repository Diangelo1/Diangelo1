// Exer2: 15 espectadores com idade e opinião (3=ótimo,2=bom,1=regular)
const espect = [
  {idade: 20, opiniao: 3},
  {idade: 34, opiniao: 2},
  {idade: 18, opiniao: 1},
  {idade: 45, opiniao: 3},
  {idade: 27, opiniao: 2},
  {idade: 31, opiniao: 3},
  {idade: 22, opiniao: 1},
  {idade: 40, opiniao: 2},
  {idade: 50, opiniao: 3},
  {idade: 29, opiniao: 2},
  {idade: 37, opiniao: 1},
  {idade: 24, opiniao: 3},
  {idade: 33, opiniao: 2},
  {idade: 19, opiniao: 1},
  {idade: 28, opiniao: 2}
];

// média das idades que responderam "ótimo" (3)
const otimos = espect.filter(e => e.opiniao === 3);
const mediaOtimos = otimos.length > 0
  ? otimos.reduce((s,e) => s + e.idade, 0) / otimos.length
  : 0;

// quantidade que responderam "regular" (1)
const qtdRegular = espect.filter(e => e.opiniao === 1).length;

// porcentagem de "bom" (2) entre todos (15)
const qtdBom = espect.filter(e => e.opiniao === 2).length;
const porcentBom = (qtdBom / espect.length) * 100;

console.log(`Média de idades (ótimo): ${mediaOtimos.toFixed(2)}`);
console.log(`Quantidade que responderam regular: ${qtdRegular}`);
console.log(`Porcentagem que responderam bom: ${porcentBom.toFixed(2)}%`);