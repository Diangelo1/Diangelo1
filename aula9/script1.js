// Espera o botão ser clicado
document.getElementById("botao").addEventListener("click", function () {
    const titulo = document.getElementById("titulo").value;
    const duracao = parseInt(document.getElementById("duracao").value);

    if (isNaN(duracao) || duracao <= 0) {
        alert("Informe uma duração válida em minutos!");
        return;
    }

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    document.getElementById("filme").textContent = titulo;
    document.getElementById("tempo_de_duracao").textContent =
        `${horas} hora(s) e ${minutos} minuto(s)`;
});