import { renderizarRota } from "./routes.js";


/* =========================================================
   VARIÁVEIS GERAIS
========================================================= */

let temporizadorToast;
let elementoFocadoAntesDoModal = null;


/* =========================================================
   1. INICIALIZAÇÃO DA APLICAÇÃO
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
   2. NAVEGAÇÃO DA SPA
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
   3. MENU HAMBÚRGUER
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
            String(aberto)
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
   4. APÓS RENDERIZAR UMA ROTA
========================================================= */

document.addEventListener(
    "rotaRenderizada",
    () => {

        atualizarRotaAtual();

        prepararFormulario();

        const app =
            document.querySelector("#app");

        if (app) {
            app.focus();
        }

    }
);


/* =========================================================
   5. INDICAR ROTA ATUAL
   aria-current="page"
========================================================= */

function atualizarRotaAtual() {

    const rotaAtual =
        window.location.hash || "#inicio";

    const links =
        document.querySelectorAll(
            "[data-rota]"
        );


    links.forEach((link) => {

        const rotaDoLink =
            `#${link.dataset.rota}`;

        if (rotaDoLink === rotaAtual) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );

        }

    });

}


/* =========================================================
   6. DELEGAÇÃO DE EVENTOS
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


/* =========================================================
   7. EVENTOS DE TECLADO
========================================================= */

document.addEventListener("keydown", (evento) => {

    const modal =
        document.querySelector("#modal-sucesso");


    /* FECHAR COM ESC */

    if (evento.key === "Escape") {

        if (
            modal &&
            modal.classList.contains("ativo")
        ) {

            fecharModal();

        } else {

            fecharMenuMobile();

        }

    }


    /* MANTER O FOCO DENTRO DO MODAL */

    if (
        evento.key === "Tab" &&
        modal &&
        modal.classList.contains("ativo")
    ) {

        prenderFocoNoModal(
            evento,
            modal
        );

    }

});


/* =========================================================
   8. PREPARAR FORMULÁRIO
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

    const estado =
        formulario.querySelector("#estado");

    const contribuicao =
        formulario.querySelector("#contribuicao");

    const mensagem =
        formulario.querySelector("#mensagem");


    /* RESTAURAR PREFERÊNCIAS */

    restaurarPreferencias(
        contribuicao,
        mensagem
    );


    /* MÁSCARA CPF */

    if (cpf) {

        cpf.addEventListener(
            "input",
            aplicarMascaraCPF
        );

    }


    /* MÁSCARA TELEFONE */

    if (telefone) {

        telefone.addEventListener(
            "input",
            aplicarMascaraTelefone
        );

    }


    /* MÁSCARA CEP */

    if (cep) {

        cep.addEventListener(
            "input",
            aplicarMascaraCEP
        );

    }


    /* ESTADO EM MAIÚSCULO */

    if (estado) {

        estado.addEventListener(
            "input",
            () => {

                estado.value =
                    estado.value
                        .replace(
                            /[^a-zA-Z]/g,
                            ""
                        )
                        .toUpperCase()
                        .substring(0, 2);

            }
        );

    }


    /* LOCALSTORAGE */

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


    /* VALIDAÇÃO */

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


    /* ENVIO */

    formulario.addEventListener(
        "submit",
        enviarFormulario
    );


    /* LIMPAR */

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
   9. MÁSCARA CPF
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
   10. MÁSCARA TELEFONE
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
   11. MÁSCARA CEP
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
   12. VALIDAÇÃO
========================================================= */

function validarCampo(campo) {

    if (campo.checkValidity()) {

        campo.classList.remove(
            "campo-invalido"
        );

        campo.classList.add(
            "campo-valido"
        );

        campo.removeAttribute(
            "aria-invalid"
        );

    } else {

        campo.classList.remove(
            "campo-valido"
        );

        campo.classList.add(
            "campo-invalido"
        );

        campo.setAttribute(
            "aria-invalid",
            "true"
        );

    }

}


/* =========================================================
   13. ENVIO DO FORMULÁRIO
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

        campo.removeAttribute(
            "aria-invalid"
        );

    });

}


/* =========================================================
   14. LOCALSTORAGE
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

        contribuicao:
            contribuicao.value,

        mensagem:
            mensagem.value

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
   15. ABRIR MODAL
========================================================= */

function abrirModal() {

    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (!modal) {
        return;
    }


    /* GUARDA ONDE O FOCO ESTAVA */

    elementoFocadoAntesDoModal =
        document.activeElement;


    modal.classList.add(
        "ativo"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    const botaoFechar =
        modal.querySelector(
            ".modal-fechar"
        );


    if (botaoFechar) {

        botaoFechar.focus();

    }

}


/* =========================================================
   16. FECHAR MODAL
========================================================= */

function fecharModal() {

    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (
        !modal ||
        !modal.classList.contains("ativo")
    ) {
        return;
    }


    modal.classList.remove(
        "ativo"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    /* DEVOLVE O FOCO */

    if (
        elementoFocadoAntesDoModal &&
        typeof elementoFocadoAntesDoModal.focus
            === "function"
    ) {

        elementoFocadoAntesDoModal.focus();

    }


    elementoFocadoAntesDoModal =
        null;

}


/* =========================================================
   17. PRENDER FOCO DENTRO DO MODAL
========================================================= */

function prenderFocoNoModal(
    evento,
    modal
) {

    const elementosFocaveis =
        modal.querySelectorAll(`
            button:not([disabled]),
            a[href],
            input:not([disabled]),
            select:not([disabled]),
            textarea:not([disabled]),
            [tabindex]:not([tabindex="-1"])
        `);


    if (
        elementosFocaveis.length === 0
    ) {
        return;
    }


    const primeiroElemento =
        elementosFocaveis[0];


    const ultimoElemento =
        elementosFocaveis[
            elementosFocaveis.length - 1
        ];


    /* SHIFT + TAB */

    if (
        evento.shiftKey &&
        document.activeElement === primeiroElemento
    ) {

        evento.preventDefault();

        ultimoElemento.focus();

    }


    /* TAB */

    else if (
        !evento.shiftKey &&
        document.activeElement === ultimoElemento
    ) {

        evento.preventDefault();

        primeiroElemento.focus();

    }

}


/* =========================================================
   18. TOAST
========================================================= */

function mostrarToast(
    mensagem,
    tipo = "sucesso"
) {

    const toast =
        document.querySelector("#toast");


    if (!toast) {
        return;
    }


    clearTimeout(
        temporizadorToast
    );


    toast.textContent =
        mensagem;


    toast.classList.remove(
        "toast-sucesso",
        "toast-erro"
    );


    toast.classList.add(
        tipo === "erro"
            ? "toast-erro"
            : "toast-sucesso"
    );


    toast.classList.add(
        "ativo"
    );


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