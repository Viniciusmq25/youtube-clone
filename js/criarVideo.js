import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento){
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;

    try{
        await conectaApi.criaVideo(titulo, url);

        window.location.href = "index.html";
    } catch(e){
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));