import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

export default function constroiCard (titulo, url){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <p>${titulo}</p>
</div>`

    return video;
} 

async function listaVideos (){
    try{
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.url)))
    } catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de vídeos"</h2>`
    }
}

listaVideos();