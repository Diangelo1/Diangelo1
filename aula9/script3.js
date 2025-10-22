document.getElementById("botao").addEventListener("click", function() {
  const buffet = (document.getElementById("buffet").value);
  const consumo = parseFloat(document.getElementById("consumo").value);

  // Verifica se os valores são válidos
  if (isNaN(buffet) || buffet <= 0 || isNaN(consumo) || consumo <= 0) {
    alert("Preencha o preço do buffet por quilo e a quantidade consumida!");
    return;
  }

  const valor_quilo = buffet / 1000;
  const pagar = valor_quilo * consumo;

  // Mostra os resultados nos spans
  document.getElementById("pagamento").textContent = `Valor à pagar: R$ ${pagar.toFixed(2)}.`;
});