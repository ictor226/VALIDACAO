
// Validação do Nome
function verificarNome() {
    const nome = document.getElementById("nome").value;
    const nomeError = document.getElementById('mensagem-erro-nome');
    if (nome.length < 5) {
        nomeError.textContent = "Nome deve ter no mínimo 5 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

    } else if (nome.length > 60) {
        nomeError.textContent = "Nome deve ter no máximo 60 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

    } else if(nome === "") {
        nomeError.textContent = "O campo nome não pode estar vazio!";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();
       
    } else {
        nomeError.textContent = "OK";
        nomeError.style.color = "green";
    }
  }
  // Validação do E-mail
  
function verificarEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nome === "") {
        emailError.textContent = "E-mail é obrigatório.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length > 100) {
        emailError.textContent = "E-mail deve ter no máximo 100 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length < 5) {
        emailError.textContent = "E-mail deve ter no mínimo 5 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    }
     else if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else {
        emailError.textContent = "OK";
        emailError.style.color = "green";
    }
}

//Validar Senha

function validaSenha() {
    const senha = document.getElementById('senha').value;
    const SenhaError = document.getElementById('erro-senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        SenhaError.textContent = "Senha não pode ser vazia";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length > 60) {
        SenhaError.textContent = "Senha não pode ser maior que 60 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length < 8) {
        SenhaError.textContent = "Senha não pode ser menor que 8 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexMaiusculo.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Letras Maiúsculas";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
    
    }else if (!regexEspecial.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Caracter Especial";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexNumero.test(senha)) {
        SenhaError.textContent = "Senha tem que ter números";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else{
        SenhaError.textContent = "OK";
        SenhaError.style.color = "green";
    }


}


// Validação da Confirmação de Senha

function confirmarSenha() {
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenhaError = document.getElementById('mensagem-erro-confirmar-senha');
    
    if (confirmarSenha !== senha) {
        confirmarSenhaError.textContent = "As senhas não coincidem.";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
            
    } else if(confirmarSenha === "") {
        confirmarSenhaError.textContent = "Preencha o campo";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
    } else {    
        confirmarSenhaError.textContent = "OK";
        confirmarSenhaError.style.color = "green";
    }
}


// Telefone com Máscara
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: (XX)XXXXX-XXXX)
    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
  }
     

// Validação do Telefone com Máscara
function validatelefone() {
          
    const  telefone = document.getElementById('telefone').value;
    const  mensagemErroTelefone = document.getElementById('mensagem-erro-telefone');
                
    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        mensagemErroTelefone.textContent = 'Telefone inválido! Certifique-se de que o número tenha o formato correto (XX) XXXXX-XXXX.';
        mensagemErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
    } else {    
        mensagemErroTelefone.textContent = "OK";
        mensagemErroTelefone.style.color = "green";
    }    
}


    // Validação da Cidade

function validacidade() {
    const cidade = document.getElementById('cidade').value;
    const mensagemCidade = document.getElementById('mensagem-cidade');
    if (cidade.length < 2 || cidade.length > 30) {
        mensagemCidade.textContent = "A cidade deve ter entre 2 e 30 caracteres.";
        mensagemCidade.style.color = "red";
        document.getElementById("cidade").focus();
    } else{
        mensagemCidade.textContent = "OK";
        mensagemCidade.style.color = "green";
        }
}

// Validação do Estado 

function validaestado() {
    const estado = document.getElementById('estado').value;
    const mensagemEstado = document.getElementById('mensagem-estado');
    if (estado.length !== 2) {
        mensagemEstado.textContent = "O estado deve ter exatamente 2 caracteres.";
        mensagemEstado.style.color = "red";
        document.getElementById("estado").focus();
    } else{
        mensagemEstado.textContent = "OK";
        mensagemEstado.style.color = "green";
        }
}



   // CEP com Máscara
function aplicarMascaraCep(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres a 8
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }

    // Aplica a máscara (formato: 00000-000)
    if (valor.length <= 5) {
        valor = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    } else {
        valor = valor.replace(/(\d{5})(\d{3})/, "$1-$2");
    }

    input.value = valor;
}

// Validação do CEP com Máscara
function validateCep() {
    const cep = document.getElementById('cep').value;
    const mensagemErroCep = document.getElementById('mensagem-erro-cep');

    // Remove todos os caracteres não numéricos
    const valor = cep.replace(/\D/g, '');

    // Valida se o CEP tem exatamente 8 números
    if (valor.length !== 8) {
        mensagemErroCep.textContent = 'CEP inválido! Certifique-se de que o número tenha exatamente 8 números (XXXXX-XXX).';
        mensagemErroCep.style.color = 'red';
        document.getElementById("cep").focus();
    } else {
        mensagemErroCep.textContent = "OK";
        mensagemErroCep.style.color = "green";
    }
}


// Máscara para Número da Casa (limite de 5 dígitos)
function aplicarMascaraNumero(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres a 5
    if (valor.length > 5) {
        valor = valor.substring(0, 5);
    }

    // Atualiza o valor do campo
    input.value = valor;
}

// Validação do Número da Casa
function validanumero() {
    const numero = document.getElementById('numero').value;
    const mensagemErroNumero = document.getElementById('mensagem-numero-da-casa');

    // Verifica se o número tem entre 1 e 5 caracteres
    if (numero.length === 0) {
        mensagemErroNumero.textContent = 'Por favor, insira o número da casa.';
        mensagemErroNumero.style.color = 'red';
        document.getElementById("numero").focus();
    } else if (numero.length > 5) {
        mensagemErroNumero.textContent = 'Número da casa não pode ter mais de 5 caracteres.';
        mensagemErroNumero.style.color = 'red';
        document.getElementById("numero").focus();
    } else {
        mensagemErroNumero.textContent = "OK";
        mensagemErroNumero.style.color = "green";
    }
}


// Máscara para CPF (limite de 11 dígitos)
function aplicarMascaraCpf(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres a 11
    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    // Aplica a máscara (formato: 000.000.000-00)
    if (valor.length <= 3) {
        valor = valor.replace(/(\d{3})(\d{0,3})/, "$1.$2");
    } else if (valor.length <= 6) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3");
    } else {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
    }

    input.value = valor;
}

// Validação do CPF com Máscara
function validacpf() {
    const cpf = document.getElementById('cpf').value;
    const mensagemErroCpf = document.getElementById('mensagem-cpf');

    // Remove todos os caracteres não numéricos
    const valor = cpf.replace(/\D/g, '');

    // Valida se o CPF tem exatamente 11 números
    if (valor.length !== 11) {
        mensagemErroCpf.textContent = 'CPF inválido! Certifique-se de que o CPF tenha exatamente 11 números.';
        mensagemErroCpf.style.color = 'red';
        document.getElementById("cpf").focus();
    } else {
        mensagemErroCpf.textContent = "OK";
        mensagemErroCpf.style.color = "green";
    }
}


// Máscara para CNPJ (limite de 14 dígitos)
function aplicarMascaraCNPJ(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres a 14
    if (valor.length > 14) {
        valor = valor.substring(0, 14);
    }

    // Aplica a máscara (formato: 00.000.000/0000-00)
    if (valor.length <= 2) {
        valor = valor.replace(/(\d{2})(\d{0,3})/, "$1.$2");
    } else if (valor.length <= 5) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{0,3})/, "$1.$2.$3");
    } else if (valor.length <= 8) {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{0,4})/, "$1.$2.$3/$4");
    } else {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, "$1.$2.$3/$4-$5");
    }

    input.value = valor;
}

// Validação do CNPJ com Máscara
function validaCNPJ() {
    const cnpj = document.getElementById('CNPJ').value;
    const mensagemErroCNPJ = document.getElementById('mensagem-CNPJ');

    // Remove todos os caracteres não numéricos
    const valor = cnpj.replace(/\D/g, '');

    // Valida se o CNPJ tem exatamente 14 números
    if (valor.length !== 14) {
        mensagemErroCNPJ.textContent = 'CNPJ inválido! Certifique-se de que o CNPJ tenha exatamente 14 números.';
        mensagemErroCNPJ.style.color = 'red';
        document.getElementById("CNPJ").focus();
    } else {
        mensagemErroCNPJ.textContent = "OK";
        mensagemErroCNPJ.style.color = "green";
    }
}


// Máscara para Data de Nascimento (formato: DD/MM/YYYY)
function aplicarMascaraNascimento(event) {
    let input = event.target;
    let valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de caracteres a 8
    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }

    // Aplica a máscara (formato: DD/MM/YYYY)
    if (valor.length <= 2) {
        valor = valor.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    } else if (valor.length <= 4) {
        valor = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
    } else {
        valor = valor.replace(/(\d{2})(\d{2})(\d{4})(\d{0,0})/, "$1/$2/$3");
    }

    input.value = valor;
}

// Validação de Data de Nascimento
function validanascimento() {
    const nascimento = document.getElementById('DATA_NASCIMENTO').value;
    const mensagemErroNascimento = document.getElementById('mensagem-NASCIMENTO');

    // Remove todos os caracteres não numéricos
    const valor = nascimento.replace(/\D/g, '');

    // Verifica se a data tem exatamente 8 números (DDMMYYYY)
    if (valor.length !== 8) {
        mensagemErroNascimento.textContent = 'Data de nascimento inválida! Certifique-se de que a data tenha o formato correto (DD/MM/YYYY).';
        mensagemErroNascimento.style.color = 'red';
        document.getElementById("DATA_NASCIMENTO").focus();
    } else {
        // Verifica se a data é válida
        const dia = parseInt(valor.substring(0, 2));
        const mes = parseInt(valor.substring(2, 4));
        const ano = parseInt(valor.substring(4, 8));

        // Cria um objeto Date para validar a data
        const data = new Date(ano, mes - 1, dia);

        if (data.getDate() !== dia || data.getMonth() !== mes - 1 || data.getFullYear() !== ano) {
            mensagemErroNascimento.textContent = 'Data de nascimento inválida! Verifique a data inserida.';
            mensagemErroNascimento.style.color = 'red';
            document.getElementById("DATA_NASCIMENTO").focus();
        } else if (ano > 2007) {
            mensagemErroNascimento.textContent = 'VOCÊ DEVE SER MAIOR DE 18 ANOS.';
            mensagemErroNascimento.style.color = 'red';
            document.getElementById("DATA_NASCIMENTO").focus();
        } else {
            mensagemErroNascimento.textContent = "OK";
            mensagemErroNascimento.style.color = "green";
        }
    }
}
