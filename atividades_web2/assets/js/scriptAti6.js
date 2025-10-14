// Exer6: calcular reajuste segundo faixa salarial
function reajuste(salario) {
  let perc;
  if (salario <= 280) perc = 20;
  else if (salario > 280 && salario <= 700) perc = 15;
  else if (salario > 700 && salario <= 1500) perc = 10;
  else perc = 5;

  const aumento = salario * (perc / 100);
  const novoSalario = salario + aumento;
  return {salario, perc, aumento, novoSalario};
}

// Exemplos
const exemplos = [250, 500, 1000, 2000];
exemplos.forEach(s => {
  const r = reajuste(s);
  console.log(`Salário atual: R$ ${r.salario.toFixed(2)} | Percentual: ${r.perc}% | Aumento: R$ ${r.aumento.toFixed(2)} | Novo salário: R$ ${r.novoSalario.toFixed(2)}`);
});
