document.addEventListener("DOMContentLoaded", () => {
    const tabelaPontos = document.getElementById("tabela-pontos");
    const pontos = obterPontosLocalStorage();
    pontos.forEach(ponto => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${ponto.data}</td>
            <td>${ponto.hora}</td>
            <td>${ponto.tipoPonto}</td>
        `;
        tabelaPontos.appendChild(linha);
    });
});

function obterPontosLocalStorage() {
    const pontos = localStorage.getItem("pontos");
    return pontos ? JSON.parse(pontos) : [];
}
