// Exer7: transforma "dd/mm/aaaa" -> "dd de mês de aaaa"
function dataPorExtenso(dataStr) {
  const meses = [
    'janeiro','fevereiro','março','abril','maio','junho',
    'julho','agosto','setembro','outubro','novembro','dezembro'
  ];
  const parts = dataStr.split('/');
  if (parts.length !== 3) return 'Formato inválido';
  const [dd, mm, aaaa] = parts;
  const dia = parseInt(dd, 10);
  const mesIndex = parseInt(mm, 10) - 1;
  if (isNaN(dia) || isNaN(mesIndex) || mesIndex < 0 || mesIndex > 11) return 'Data inválida';
  return `${dia} de ${meses[mesIndex]} de ${aaaa}`;
}

// Exemplos
console.log(dataPorExtenso('22/04/1983')); // "22 de abril de 1983"
console.log(dataPorExtenso('01/01/2025')); // "1 de janeiro de 2025"
