import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";


const rotas = {
    "#inicio": templateInicio,
    "#projetos": templateProjetos,
    "#cadastro": templateCadastro
};


export function renderizarRota() {

    const app =
        document.querySelector("#app");

    if (!app) {
        return;
    }


    const rotaAtual =
        window.location.hash || "#inicio";


    const template =
        rotas[rotaAtual] || templateInicio;


    app.innerHTML = template();


    localStorage.setItem(
        "ultimaRotaONG",
        rotaAtual
    );


    document.dispatchEvent(
        new CustomEvent("rotaRenderizada")
    );
}