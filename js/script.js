const formulario = document.querySelector("[data-formulario]");
const camposDoFomulario = document.querySelectorAll("[required]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "Email": e.target.elements["Email"].value,
        "Senha": e.target.elements["Senha"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = 'index.html'

})

camposDoFomulario.forEach((campo)=> {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'paternMismatch',
    'tooShort',
    'customError'
]

// mensagens dos erros
const mensagens = {

    nome: {
        valueMissing: "O campo de usuario não pode estar vazio.",
        tooShort: "Seu nome deve ter mais de 3 caracteres"
    },

    Email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },

    Senha: {
        valueMissing: "O campo de senha não pode estar vazio."
    }

}

function verificaCampo(campo) {
    let mensagem = "";
    tiposDeErro.forEach( erro =>{
        if(campo.validity[erro]){
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem
    } else{
        mensagemErro.textContent = ""
    }
}