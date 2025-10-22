document.getElementById("botao").addEventListener("click", function() {
  const veiculo = document.getElementById("veiculo").value;
  const preco = parseFloat(document.getElementById("preco").value);

  // Verifica se os valores são válidos
  if (veiculo.trim() === "" || isNaN(preco) || preco <= 0) {
    alert("Preencha o nome do veículo e o preço corretamente!");
    return;
  }

  const entrada = preco / 2;
  const parcelas = entrada / 12;

  // Mostra os resultados nos spans
  document.getElementById("promocao").textContent = `Promoção: ${veiculo}`;
  document.getElementById("entrada").textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
  document.getElementById("valor_parcela").textContent = `+ 12x de R$: ${parcelas.toFixed(2)}`;
});
