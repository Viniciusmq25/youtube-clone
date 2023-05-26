const botaoSair = document.querySelector(".sair")

botaoSair.addEventListener("click", () =>{
    localStorage.clear();

    window.location.href = "index.html";
})