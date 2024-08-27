const diaSemana = document.getElementById("Dia-Semana");
const DiaMesAno = document.getElementById("Dia-Mes-Ano");
const Tempo = document.getElementById("Tempo");

DiaMesAno.textContent = getCurrentDate();
Tempo.textContent = GetCurrentTime();
diaSemana.textContent = GetWeekDay();

function getCurrentDate() {
    const date = new Date(); 
    return date.getDate() + "/" + (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMont(+1)) + "/" + date.getFullYear();
}

function GetCurrentTime() {
    const hours = new Date();
    return hours.getHours() + ":" + hours.getMinutes() + ":" + hours.getSeconds();
}

function printCurrentTime() {
    Tempo.textContent = GetCurrentTime();
}
 
function GetWeekDay() {
    const date = new Date();
    let days = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]
    return days[date.getDay()]
}

setInterval(printCurrentTime, 1000);

function Register() {
    // colocar dialog <dialog>
}