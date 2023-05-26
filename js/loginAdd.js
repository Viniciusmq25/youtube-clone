const usuario = document.querySelector("[data-usuario]")

var objeto = localStorage.getItem("cadastro");
var jsonObjeto = JSON.parse(objeto);
var nome = jsonObjeto.nome;

usuario.textContent = nome.substring(0, 1);

if(usuario.textContent !== 'Login'){
    usuario.classList.toggle("Login")
}   else{
    usuario.classList.remove('Login');
}

