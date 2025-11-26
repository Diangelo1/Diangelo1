document.getElementById("botao_adicionar").addEventListener("click", function () {
    const clube = String(document.getElementById("times").value);

    // Verifica se os valores são válidos
    if(clube <= " ") {
    alert("Preencha o clube desejado!");
    return;
    }
    
    // Mostra os resultados nos spans
    document.getElementById("clubes").textContent = (clube);
});