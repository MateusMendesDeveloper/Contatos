const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');

const nomeErro = document.getElementById('nomeErro');
const emailErro = document.getElementById('emailErro');
const mensagemErro = document.getElementById('mensagemErro');

nomeInput.addEventListener('blur', validarNome);
emailInput.addEventListener('blur', validarEmailInput);
mensagemInput.addEventListener('blur', validarMensagem);

function validarNome() {
    if (nome.value.trim() === '') {
        nomeErro.textContent = "Por favor, preencha o campo com seu nome.";
        nomeErro.classList.add("erro");
        nomeInput.style.border = "1px solid #dc3545"
        return false;
    } else if (nome.value.trim().length < 3) {
        nomeErro.textContent = "Seu nome deve conter ao menos 3 letras."
        nomeErro.classList.add("erro");
        nomeInput.style.border = "1px solid #dc3545"
        return false;
    } else {
        nomeErro.textContent = "";
        nomeErro.classList.remove("erro");
        nomeInput.style.border = "1px solid #ced4da";
        return true;
    }
}
function validarEmailInput() {
    if (email.value.trim() === '') {
        emailErro.textContent = "Por favor, preencha o campo de email.";
        emailErro.classList.add("erro");
        emailInput.style.border = "1px solid #dc3545"
        return false;
    } else if (!validarEmail(emailInput.value)) {
        emailErro.textContent = "isso não e um email valido."
        emailErro.classList.add("erro");
        emailInput.style.border = "1px solid #dc3545"
        return false;
    } else {
        emailErro.textContent = "";
        emailErro.classList.remove("erro");
        emailInput.style.border = "1px solid #ced4da";
        return true;
    }
}
function validarMensagem() {
    if (mensagem.value.trim() === '') {
        mensagemErro.textContent = "O que queria nos dizer?"
        mensagemErro.classList.add("erro");
        mensagemInput.style.border = "1px solid #dc3545"
        return false;
    } else {
        mensagemErro.textContent = "";
        mensagemErro.classList.remove("erro");
        mensagemInputInput.style.border = "1px solid #ced4da";
        return true;
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let camposValidos = true;
    if (!validarNome()) {
        camposValidos = false;
    }
    if (!validarEmailInput()) {
        camposValidos = false;
    }
    if (!validarMensagem()) {
        camposValidos = false;
    }

    if (camposValidos) {
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
})

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
