const diaSemana = document.getElementById("Dia-Semana");
const diaMesAno = document.getElementById("Dia-Mes-Ano");
const tempo = document.getElementById("Tempo");
const Ponto = document.getElementById("button-bater-ponto");
const dialog = document.getElementById("dialog-ponto");
const ConfirmarHorario = document.getElementById("confirmar-horario");

function updateDateTime() {
    diaMesAno.textContent = getCurrentDate();
    tempo.textContent = getCurrentTime();
    diaSemana.textContent = getWeekDay();
}

function getCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function getWeekDay() {
    const date = new Date();
    const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    return days[date.getDay()];
}

setInterval(updateDateTime, 1000);

Ponto.addEventListener("click", () => {
    dialog.showModal();
});
