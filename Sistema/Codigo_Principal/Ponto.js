const RegistrarPonto = document.getElementById("Registrar_Ponto");
const verUltimoPonto = document.getElementById("ver-ultimo-ponto");
const verTodosPontos = document.getElementById("ver-todos-pontos");
const pontoSelect = document.getElementById("ponto");

RegistrarPonto.addEventListener("click", () => {
    const tipoPonto = pontoSelect.value;
    const data = getCurrentDate();
    const hora = getCurrentTime();
    const ponto = {
        data,
        hora,
        tipoPonto,
    };
    salvarPontoLocalStorage(ponto);
    dialog.close();
});

verUltimoPonto.addEventListener("click", () => {
    const pontos = obterPontosLocalStorage();
    if (pontos.length > 0) {
        const ultimoPonto = pontos[pontos.length - 1];
        alert(`Último ponto registrado:\nData: ${ultimoPonto.data}\nHora: ${ultimoPonto.hora}\nTipo: ${ultimoPonto.tipoPonto}`);
    } else {
        alert("Nenhum ponto registrado.");
    }
});

verTodosPontos.addEventListener("click", () => {
    window.location.href = "ver_pontos.html";
});

function salvarPontoLocalStorage(ponto) {
    const pontos = obterPontosLocalStorage();
    pontos.push(ponto);
    localStorage.setItem("pontos", JSON.stringify(pontos));
}

function obterPontosLocalStorage() {
    const pontos = localStorage.getItem("pontos");
    return pontos ? JSON.parse(pontos) : [];
}
