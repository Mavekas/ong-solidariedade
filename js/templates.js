/* =========================================================
   DADOS DOS PROJETOS
========================================================= */

const projetos = [
    {
        titulo: "Voluntários em ação",

        descricao:
            "Os voluntários ajudam na organização das campanhas, separação de alimentos e realização de diversas atividades sociais.",

        imagem: "imagens/voluntarios.png",

        alt:
            "Voluntários organizando alimentos para uma ação social",

        status: "Projeto ativo",

        classeBadge: "badge-sucesso",

        classeBotao: "btn-secundario"
    },

    {
        titulo: "Campanha de doação",

        descricao:
            "Realizamos campanhas para arrecadar alimentos e outros recursos importantes para famílias e comunidades.",

        imagem: "imagens/doacao.png",

        alt:
            "Campanha de arrecadação de alimentos e produtos para doação",

        status: "Arrecadação aberta",

        classeBadge: "badge-alerta",

        classeBotao: "btn-destaque"
    },

    {
        titulo: "Ações comunitárias",

        descricao:
            "Desenvolvemos atividades que aproximam voluntários, doadores e comunidades, incentivando a solidariedade.",

        imagem: "imagens/principal.png",

        alt:
            "Grupo de voluntários participando de uma ação comunitária",

        status: "Em andamento",

        classeBadge: "badge-info",

        classeBotao: ""
    }
];


/* =========================================================
   TEMPLATE - PÁGINA INICIAL
========================================================= */

export function templateInicio() {

    return `

        <!-- HERO -->

        <section class="hero">

            <div class="container hero-conteudo">

                <div class="hero-texto">

                    <span class="badge badge-sucesso">
                        Transformando vidas
                    </span>

                    <h1>
                        Juntos por um futuro melhor
                    </h1>

                    <p>
                        Transformando vidas por meio da solidariedade,
                        do voluntariado e de ações que fazem a diferença.
                    </p>

                    <div class="card-acoes">

                        <a
                            href="#projetos"
                            class="btn btn-destaque"
                        >
                            Conheça nossos projetos
                        </a>

                        <a
                            href="#cadastro"
                            class="btn btn-secundario"
                        >
                            Seja voluntário
                        </a>

                    </div>

                </div>


                <div class="hero-imagem">

                    <img
                        src="imagens/principal.png"
                        alt="Voluntários unidos observando uma comunidade"
                    >

                </div>

            </div>

        </section>


        <!-- SOBRE A ONG -->

        <section class="secao">

            <div class="container">

                <div class="grid">

                    <div class="col-8">

                        <h2>
                            Sobre a ONG
                        </h2>

                        <p>
                            Nossa ONG trabalha para ajudar pessoas e
                            comunidades por meio de projetos sociais,
                            campanhas de arrecadação e atividades
                            realizadas por voluntários.
                        </p>

                        <p>
                            Nosso objetivo é incentivar a solidariedade
                            e criar oportunidades para que mais pessoas
                            possam contribuir com ações que fazem a
                            diferença.
                        </p>

                    </div>


                    <aside class="col-4">

                        <div class="alerta alerta-info">

                            <strong>
                                Nossa missão
                            </strong>

                            <p>
                                Aproximar pessoas dispostas a ajudar
                                de comunidades e projetos que precisam
                                de apoio.
                            </p>

                        </div>

                    </aside>

                </div>

            </div>

        </section>


        <!-- COMO AJUDAR -->

        <section class="secao">

            <div class="container">

                <div class="secao-titulo">

                    <h2>
                        Como ajudar
                    </h2>

                    <p>
                        Escolha uma forma de participar das nossas ações.
                    </p>

                </div>


                <div class="cards-grid">

                    <article class="card">

                        <div class="card-conteudo">

                            <span class="badge badge-sucesso">
                                Voluntariado
                            </span>

                            <h3>
                                Seja voluntário
                            </h3>

                            <p>
                                Participe das nossas atividades e ajude
                                diretamente no desenvolvimento dos
                                projetos sociais.
                            </p>

                            <div class="card-acoes">

                                <a
                                    href="#cadastro"
                                    class="btn btn-secundario"
                                >
                                    Quero ser voluntário
                                </a>

                            </div>

                        </div>

                    </article>


                    <article class="card">

                        <div class="card-conteudo">

                            <span class="badge badge-alerta">
                                Doações
                            </span>

                            <h3>
                                Faça uma doação
                            </h3>

                            <p>
                                Sua contribuição ajuda a manter nossos
                                projetos e permite que novas ações sejam
                                realizadas.
                            </p>

                            <div class="card-acoes">

                                <a
                                    href="#projetos"
                                    class="btn btn-destaque"
                                >
                                    Conheça as campanhas
                                </a>

                            </div>

                        </div>

                    </article>


                    <article class="card">

                        <div class="card-conteudo">

                            <span class="badge badge-info">
                                Projetos sociais
                            </span>

                            <h3>
                                Conheça nossas ações
                            </h3>

                            <p>
                                Veja os projetos desenvolvidos pela ONG
                                e acompanhe como voluntários e doadores
                                ajudam nossa comunidade.
                            </p>

                            <div class="card-acoes">

                                <a
                                    href="#projetos"
                                    class="btn"
                                >
                                    Ver projetos
                                </a>

                            </div>

                        </div>

                    </article>

                </div>

            </div>

        </section>

    `;
}


/* =========================================================
   GERAÇÃO DINÂMICA DOS CARDS
========================================================= */

function gerarCardsProjetos() {

    return projetos

        .map((projeto) => {

            return `

                <article class="card">

                    <img
                        class="card-imagem"
                        src="${projeto.imagem}"
                        alt="${projeto.alt}"
                    >

                    <div class="card-conteudo">

                        <span
                            class="badge ${projeto.classeBadge}"
                        >
                            ${projeto.status}
                        </span>

                        <h3>
                            ${projeto.titulo}
                        </h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                        <div class="card-acoes">

                            <a
                                href="#cadastro"
                                class="btn ${projeto.classeBotao}"
                            >
                                Participar
                            </a>

                        </div>

                    </div>

                </article>

            `;

        })

        .join("");
}


/* =========================================================
   TEMPLATE - PROJETOS
========================================================= */

export function templateProjetos() {

    return `

        <!-- APRESENTAÇÃO -->

        <section class="hero">

            <div class="container">

                <div class="hero-texto">

                    <span class="badge badge-info">
                        Nossas ações
                    </span>

                    <h1>
                        Conheça nossos projetos
                    </h1>

                    <p>
                        Nossos projetos buscam ajudar pessoas e
                        comunidades por meio de ações solidárias,
                        campanhas de doação e trabalho voluntário.
                    </p>

                </div>

            </div>

        </section>


        <!-- CARDS GERADOS PELO JAVASCRIPT -->

        <section class="secao">

            <div class="container">

                <div class="secao-titulo">

                    <h2>
                        Projetos em destaque
                    </h2>

                    <p>
                        Conheça algumas das iniciativas desenvolvidas
                        pela ONG Solidariedade.
                    </p>

                </div>


                <div
                    id="lista-projetos"
                    class="cards-grid"
                >
                    ${gerarCardsProjetos()}
                </div>

            </div>

        </section>


        <!-- DOAÇÕES -->

        <section class="secao">

            <div class="container">

                <div class="grid">

                    <div class="col-6">

                        <h2>
                            O que pode ser doado?
                        </h2>

                        <p>
                            As campanhas recebem diferentes tipos
                            de materiais conforme as necessidades
                            das comunidades atendidas.
                        </p>

                        <div class="alerta alerta-info">

                            <strong>
                                Principais itens
                            </strong>

                            <p>
                                Alimentos não perecíveis, produtos de
                                higiene pessoal, roupas em bom estado
                                e materiais escolares.
                            </p>

                        </div>

                    </div>


                    <div class="col-6">

                        <h2>
                            Como fazer uma doação
                        </h2>

                        <p>
                            Entre em contato com nossa equipe para
                            receber informações sobre os pontos de
                            coleta e campanhas disponíveis.
                        </p>

                        <div class="alerta alerta-sucesso">

                            <p>
                                <strong>E-mail:</strong>
                                contato@ongsolidariedade.org
                            </p>

                            <p>
                                <strong>Telefone:</strong>
                                (83) 99999-9999
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    `;
}


/* =========================================================
   TEMPLATE - CADASTRO
========================================================= */

export function templateCadastro() {

    return `

        <!-- APRESENTAÇÃO -->

        <section class="hero">

            <div class="container">

                <div class="hero-texto">

                    <span class="badge badge-sucesso">
                        Faça parte
                    </span>

                    <h1>
                        Cadastro de voluntário
                    </h1>

                    <p>
                        Preencha o formulário abaixo e faça parte
                        das ações da ONG Solidariedade.
                    </p>

                </div>

            </div>

        </section>


        <!-- FORMULÁRIO -->

        <section class="secao">

            <div class="container">

                <form
                    id="form-cadastro"
                    class="formulario"
                    novalidate
                >

                    <h2>
                        Informações pessoais
                    </h2>

                    <p>
                        Os campos marcados como obrigatórios devem
                        ser preenchidos corretamente.
                    </p>


                    <div class="form-grid">

                        <!-- NOME -->

                        <div class="campo campo-completo">

                            <label for="nome">
                                Nome completo *
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Digite seu nome completo"
                                minlength="3"
                                autocomplete="name"
                                required
                            >

                        </div>


                        <!-- E-MAIL -->

                        <div class="campo">

                            <label for="email">
                                E-mail *
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="exemplo@email.com"
                                autocomplete="email"
                                required
                            >

                        </div>


                        <!-- NASCIMENTO -->

                        <div class="campo">

                            <label for="nascimento">
                                Data de nascimento *
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                autocomplete="bday"
                                required
                            >

                        </div>


                        <!-- CPF -->

                        <div class="campo">

                            <label for="cpf">
                                CPF *
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                placeholder="000.000.000-00"
                                maxlength="14"
                                inputmode="numeric"
                                required
                            >

                        </div>


                        <!-- TELEFONE -->

                        <div class="campo">

                            <label for="telefone">
                                Telefone *
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                placeholder="(00) 00000-0000"
                                maxlength="15"
                                autocomplete="tel"
                                required
                            >

                        </div>


                        <!-- CEP -->

                        <div class="campo">

                            <label for="cep">
                                CEP *
                            </label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                placeholder="00000-000"
                                maxlength="9"
                                inputmode="numeric"
                                autocomplete="postal-code"
                                required
                            >

                        </div>


                        <!-- ESTADO -->

                        <div class="campo">

                            <label for="estado">
                                Estado *
                            </label>

                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                placeholder="PB"
                                maxlength="2"
                                autocomplete="address-level1"
                                required
                            >

                        </div>


                        <!-- ENDEREÇO -->

                        <div class="campo campo-completo">

                            <label for="endereco">
                                Endereço *
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                placeholder="Rua, avenida e número"
                                autocomplete="street-address"
                                required
                            >

                        </div>


                        <!-- CIDADE -->

                        <div class="campo campo-completo">

                            <label for="cidade">
                                Cidade *
                            </label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                placeholder="Digite sua cidade"
                                autocomplete="address-level2"
                                required
                            >

                        </div>


                        <!-- CONTRIBUIÇÃO -->

                        <div class="campo campo-completo">

                            <label for="contribuicao">
                                Como você deseja contribuir? *
                            </label>

                            <select
                                id="contribuicao"
                                name="contribuicao"
                                required
                            >

                                <option value="">
                                    Selecione uma opção
                                </option>

                                <option value="voluntariado">
                                    Trabalho voluntário
                                </option>

                                <option value="doacao">
                                    Doação
                                </option>

                                <option value="eventos">
                                    Apoio em eventos
                                </option>

                                <option value="divulgacao">
                                    Divulgação das campanhas
                                </option>

                            </select>

                        </div>


                        <!-- MENSAGEM -->

                        <div class="campo campo-completo">

                            <label for="mensagem">
                                Conte um pouco sobre como deseja ajudar *
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                placeholder="Escreva aqui como você gostaria de colaborar..."
                                minlength="10"
                                required
                            ></textarea>

                        </div>


                        <!-- BOTÕES -->

                        <div class="form-acoes">

                            <button
                                type="reset"
                                class="btn btn-secundario"
                            >
                                Limpar
                            </button>

                            <button
                                type="submit"
                                class="btn btn-destaque"
                            >
                                Enviar cadastro
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </section>


        <!-- AVISO -->

        <section class="secao">

            <div class="container">

                <div class="alerta alerta-info">

                    <strong>
                        Seus dados estão protegidos
                    </strong>

                    <p>
                        As informações fornecidas são utilizadas
                        somente para simulação da aplicação.
                        Dados pessoais não são armazenados no
                        localStorage.
                    </p>

                </div>

            </div>

        </section>


        <!-- MODAL -->

        <div
            id="modal-sucesso"
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            aria-hidden="true"
        >

            <div class="modal-conteudo">

                <button
                    type="button"
                    class="modal-fechar"
                    aria-label="Fechar mensagem"
                >
                    ×
                </button>


                <span class="badge badge-sucesso">
                    Cadastro recebido
                </span>


                <h2 id="modal-titulo">
                    Obrigado por participar!
                </h2>


                <p>
                    Seu cadastro foi preenchido com sucesso.
                    Nossa equipe entrará em contato quando houver
                    novas ações disponíveis.
                </p>


                <button
                    type="button"
                    class="btn btn-secundario modal-ok"
                >
                    Entendi
                </button>

            </div>

        </div>


        <!-- TOAST -->

        <div
            id="toast"
            class="toast"
            role="status"
            aria-live="polite"
            aria-atomic="true"
        >
        </div>

    `;
}