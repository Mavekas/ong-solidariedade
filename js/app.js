import { renderizarRota } from "./routes.js";


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    iniciarMenu();

    const ultimaRota =
        localStorage.getItem("ultimaRotaONG");

    if (!window.location.hash) {

        window.location.hash =
            ultimaRota || "#inicio";

    } else {

        renderizarRota();

    }

});


/* =========================================================
   NAVEGAÇÃO SPA
========================================================= */

window.addEventListener("hashchange", () => {

    renderizarRota();

    fecharMenuMobile();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   MENU MOBILE
========================================================= */

function iniciarMenu() {

    const botaoMenu =
        document.querySelector(".menu-toggle");

    const menu =
        document.querySelector(".menu");

    if (!botaoMenu || !menu) {
        return;
    }


    botaoMenu.addEventListener("click", () => {

        const aberto =
            menu.classList.toggle("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto
        );

        botaoMenu.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );

        botaoMenu.textContent =
            aberto ? "✕" : "☰";

    });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 767) {
            fecharMenuMobile();
        }

    });

}


function fecharMenuMobile() {

    const botaoMenu =
        document.querySelector(".menu-toggle");

    const menu =
        document.querySelector(".menu");

    if (!botaoMenu || !menu) {
        return;
    }


    menu.classList.remove("ativo");

    botaoMenu.setAttribute(
        "aria-expanded",
        "false"
    );

    botaoMenu.setAttribute(
        "aria-label",
        "Abrir menu de navegação"
    );

    botaoMenu.textContent = "☰";
}


/* =========================================================
   APÓS RENDERIZAR UMA ROTA
========================================================= */

document.addEventListener(
    "rotaRenderizada",
    () => {

        prepararFormulario();

        const app =
            document.querySelector("#app");

        if (app) {
            app.focus();
        }

    }
);


/* =========================================================
   DELEGAÇÃO DE EVENTOS
========================================================= */

document.addEventListener("click", (evento) => {

    if (
        evento.target.closest(".modal-fechar") ||
        evento.target.closest(".modal-ok")
    ) {
        fecharModal();
    }


    if (
        evento.target.id === "modal-sucesso"
    ) {
        fecharModal();
    }

});


document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        fecharModal();
        fecharMenuMobile();

    }

});


/* =========================================================
   FORMULÁRIO
========================================================= */

function prepararFormulario() {

    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }


    const cpf =
        formulario.querySelector("#cpf");

    const telefone =
        formulario.querySelector("#telefone");

    const cep =
        formulario.querySelector("#cep");

    const contribuicao =
        formulario.querySelector("#contribuicao");

    const mensagem =
        formulario.querySelector("#mensagem");


    restaurarPreferencias(
        contribuicao,
        mensagem
    );


    if (cpf) {
        cpf.addEventListener(
            "input",
            aplicarMascaraCPF
        );
    }


    if (telefone) {
        telefone.addEventListener(
            "input",
            aplicarMascaraTelefone
        );
    }


    if (cep) {
        cep.addEventListener(
            "input",
            aplicarMascaraCEP
        );
    }


    if (contribuicao) {
        contribuicao.addEventListener(
            "change",
            salvarPreferencias
        );
    }


    if (mensagem) {
        mensagem.addEventListener(
            "input",
            salvarPreferencias
        );
    }


    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    campos.forEach((campo) => {

        campo.addEventListener(
            "blur",
            () => validarCampo(campo)
        );


        campo.addEventListener(
            "input",
            () => {

                if (
                    campo.classList.contains(
                        "campo-invalido"
                    )
                ) {
                    validarCampo(campo);
                }

            }
        );

    });


    formulario.addEventListener(
        "submit",
        enviarFormulario
    );


    formulario.addEventListener(
        "reset",
        () => {

            localStorage.removeItem(
                "preferenciasONG"
            );

            campos.forEach((campo) => {

                campo.classList.remove(
                    "campo-valido",
                    "campo-invalido"
                );

            });

        }
    );

}


/* =========================================================
   MÁSCARA CPF
========================================================= */

function aplicarMascaraCPF(evento) {

    let valor =
        evento.target.value
            .replace(/\D/g, "")
            .substring(0, 11);


    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );


    evento.target.value = valor;
}


/* =========================================================
   MÁSCARA TELEFONE
========================================================= */

function aplicarMascaraTelefone(evento) {

    let valor =
        evento.target.value
            .replace(/\D/g, "")
            .substring(0, 11);


    valor = valor.replace(
        /^(\d{2})(\d)/,
        "($1) $2"
    );


    if (valor.length > 13) {

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    }


    evento.target.value = valor;
}


/* =========================================================
   MÁSCARA CEP
========================================================= */

function aplicarMascaraCEP(evento) {

    let valor =
        evento.target.value
            .replace(/\D/g, "")
            .substring(0, 8);


    valor = valor.replace(
        /^(\d{5})(\d)/,
        "$1-$2"
    );


    evento.target.value = valor;
}


/* =========================================================
   VALIDAÇÃO
========================================================= */

function validarCampo(campo) {

    if (campo.checkValidity()) {

        campo.classList.remove(
            "campo-invalido"
        );

        campo.classList.add(
            "campo-valido"
        );

    } else {

        campo.classList.remove(
            "campo-valido"
        );

        campo.classList.add(
            "campo-invalido"
        );

    }

}


/* =========================================================
   ENVIO
========================================================= */

function enviarFormulario(evento) {

    evento.preventDefault();

    const formulario =
        evento.currentTarget;

    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    campos.forEach(validarCampo);


    if (!formulario.checkValidity()) {

        const primeiroInvalido =
            formulario.querySelector(":invalid");

        if (primeiroInvalido) {
            primeiroInvalido.focus();
        }


        mostrarToast(
            "Revise os campos destacados.",
            "erro"
        );

        return;
    }


    localStorage.removeItem(
        "preferenciasONG"
    );


    mostrarToast(
        "Cadastro enviado com sucesso!",
        "sucesso"
    );


    abrirModal();

    formulario.reset();


    campos.forEach((campo) => {

        campo.classList.remove(
            "campo-valido",
            "campo-invalido"
        );

    });

}


/* =========================================================
   LOCALSTORAGE
========================================================= */

function salvarPreferencias() {

    const contribuicao =
        document.querySelector("#contribuicao");

    const mensagem =
        document.querySelector("#mensagem");


    if (!contribuicao || !mensagem) {
        return;
    }


    const preferencias = {
        contribuicao: contribuicao.value,
        mensagem: mensagem.value
    };


    localStorage.setItem(
        "preferenciasONG",
        JSON.stringify(preferencias)
    );
}


function restaurarPreferencias(
    contribuicao,
    mensagem
) {

    const dadosSalvos =
        localStorage.getItem(
            "preferenciasONG"
        );


    if (!dadosSalvos) {
        return;
    }


    try {

        const preferencias =
            JSON.parse(dadosSalvos);


        if (contribuicao) {
            contribuicao.value =
                preferencias.contribuicao || "";
        }


        if (mensagem) {
            mensagem.value =
                preferencias.mensagem || "";
        }

    } catch (erro) {

        console.error(
            "Erro ao recuperar dados:",
            erro
        );


        localStorage.removeItem(
            "preferenciasONG"
        );

    }

}


/* =========================================================
   MODAL
========================================================= */

function abrirModal() {

    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (!modal) {
        return;
    }


    modal.classList.add("ativo");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function fecharModal() {

    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove("ativo");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* =========================================================
   TOAST
========================================================= */

let temporizadorToast;


function mostrarToast(
    mensagem,
    tipo = "sucesso"
) {

    const toast =
        document.querySelector("#toast");


    if (!toast) {
        return;
    }


    clearTimeout(temporizadorToast);

    toast.textContent = mensagem;


    toast.classList.remove(
        "toast-sucesso",
        "toast-erro"
    );


    toast.classList.add(
        tipo === "erro"
            ? "toast-erro"
            : "toast-sucesso"
    );


    toast.classList.add("ativo");


    temporizadorToast =
        setTimeout(
            () => {

                toast.classList.remove(
                    "ativo"
                );

            },
            3500
        );

}