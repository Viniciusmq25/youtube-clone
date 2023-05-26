async function listaVideos(){
    const conexao = await fetch("https://json-youreka.vercel.app/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVideo(titulo, url){
    const conexao = await fetch("https://json-youreka.vercel.app/videos",{
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url:url,
        })
    });

    if(!conexao.ok){
        throw new Error("Volte para o inicio e veja se seu video foi postado!")
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`https://json-youreka.vercel.app/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
} 

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}
