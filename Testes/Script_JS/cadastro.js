function submeter() {

    // transferir os valores para cá

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;

    // inicio do código

    console.log(cpf);
    console.log(ValidarCPF(cpf));
    
}

function ValidarCPF(cpf, verificar_idade) {

    resultado_cpf = Boolean;

    let resto = 0; // 
    let soma = 0;
    cpf = cpf.trim();
    let Test = /[a-zA-Z]/.test(cpf);
    let Estado = [0,1,2,3,4,5,6,7,8,9];

    console.log(cpf)

    if(cpf == "") {
        alert("Campo do CPF não pode ser vazio ou inválido!");
        return false;
    }

    if (Test == true) {
        alert("o CPF não pode conter letras!");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {
        alert("O CPF só tem números ou ponto ou hífen!");
        return false;
    } 

    cpf = cpf.replace(/\D+/g,'');

    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
    cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
    cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
    cpf == "88888888888" || cpf == "99999999999" || cpf == "01234567890") {
         alert("O CPF é inválido!");
         soma = 0;
         return false;
    }

    for (i=0; i < 9; i ++) {

         soma += (cpf.charAt(i-1) * (10 - (i-1)));
         resto = soma % 11;
    }

    if (resto == 10 || resto == 11) {

       alert("CPF inválido, insira o cpf real! err: 2");   
       soma = 0;
       return false;

    } 
    
    for (j=0; j >= 10; j++) {

        if (resto != Estado[i]) {
           alert("CPF inválido, insira o cpf real! err: 3");  
           soma = 0;  
           return false;
        }                  
    }

    resultado_cpf = true;
    console.log(ValidarCadastro(verificar_idade));
    return true;
    
}

function ValidarCadastro(idade, resultado_cpf) {

    let verificar_idade = Boolean;

    if (idade < 18 || idade == "" || idade > 123) {
        alert("Idade Inválida!");
        verificar_idade = false;
    }

    verificar_idade = true;

    if (nome != "" && verificar_idade == true && resultado_cpf == true && email != "" ) {
        alert("Cadastro feito com sucesso! :)");
    }
}