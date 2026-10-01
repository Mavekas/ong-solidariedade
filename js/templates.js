/* =========================================================
   IMAGENS
   O uso de new URL(..., import.meta.url) permite que o Vite
   processe e copie corretamente as imagens para o build.
========================================================= */

const imagemVoluntarios = new URL(
    "../imagens/voluntarios.png",
    import.meta.url
).href;

const imagemDoacao = new URL(
    "../imagens/doacao.png",
    import.meta.url
).href;

const imagemPrincipal = new URL(
    "../imagens/principal.png",
    import.meta.url
).href;


/* =========================================================
   DADOS DOS PROJETOS
========================================================= */

const projetos = [
    {
        titulo: "Voluntários em ação",
        descricao:
            "Os voluntários ajudam na organização das campanhas, separação de alimentos e realização de diversas atividades sociais.",
        imagem: imagemVoluntarios,
        alt: "Voluntários organizando alimentos para uma ação social",
        badge: "Projeto ativo",
        badgeClasse: "badge-sucesso",
        botaoClasse: "btn-secundario"
    },
    {
        titulo: "Campanha de doação",
        descricao:
            "Realizamos campanhas para arrecadar alimentos e outros recursos importantes para famílias e comunidades.",
        imagem: imagemDoacao,
        alt: "Campanha de arrecadação de alimentos e produtos para doação",
        badge: "Arrecadação aberta",
        badgeClasse: "badge-aviso",
        botaoClasse: "btn-destaque"
    },
    {
        titulo: "Ações comunitárias",
        descricao:
            "Desenvolvemos atividades que aproximam voluntários, doadores e comunidades, incentivando a solidariedade.",
        imagem: imagemPrincipal,
        alt: "Grupo de voluntários participando de uma ação comunitária",
        badge: "Em andamento",
        badgeClasse: "badge-info",
        botaoClasse: "btn-primario"
    }
];


/* =========================================================
   TEMPLATE - INÍCIO
========================================================= */

export function templateInicio() {
    return `
        <section class="hero">
            <div class="container hero-conteudo">
                <div class="grid">

                    <div class="col-7 hero-texto">
                        <span class="badge badge-info">
                            Solidariedade que transforma
                        </span>

                        <h1>Juntos por um futuro melhor</h1>

                        <p>
                            A ONG Solidariedade conecta pessoas dispostas a
                            ajudar com projetos que fazem a diferença na vida
                            de famílias e comunidades.
                        </p>

                        <div class="acoes">
                            <a href="#projetos"
                               class="btn btn-primario">
                                Conhecer projetos
                            </a>

                            <a href="#cadastro"
                               class="btn btn-secundario">
                                Quero participar
                            </a>
                        </div>
                    </div>

                    <div class="col-5 hero-imagem">
                        <img
                            src="${imagemPrincipal}"
                            alt="Pessoas participando de uma ação solidária"
                            loading="eager"
                        >
                    </div>

                </div>
            </div>
        </section>


        <section class="secao" aria-labelledby="titulo-sobre">
            <div class="container">

                <div class="grid">

                    <div class="col-6">
                        <span class="badge badge-info">
                            Quem somos
                        </span>

                        <h2 id="titulo-sobre">
                            Sobre a ONG Solidariedade
                        </h2>

                        <p>
                            A ONG Solidariedade foi criada com o objetivo de
                            incentivar ações sociais, promover o voluntariado
                            e apoiar comunidades por meio de campanhas e
                            projetos solidários.
                        </p>

                        <p>
                            Nosso trabalho depende da participação de pessoas
                            que acreditam que pequenas atitudes podem gerar
                            grandes transformações.
                        </p>
                    </div>

                    <div class="col-6">
                        <img
                            src="${imagemVoluntarios}"
                            alt="Voluntários trabalhando juntos em uma ação social"
                            loading="lazy"
                            class="imagem-responsiva"
                        >
                    </div>

                </div>

            </div>
        </section>


        <section class="secao secao-alternativa"
                 aria-labelledby="titulo-ajudar">

            <div class="container">

                <header class="secao-cabecalho">
                    <span class="badge badge-sucesso">
                        Faça parte
                    </span>

                    <h2 id="titulo-ajudar">
                        Como você pode ajudar
                    </h2>

                    <p>
                        Existem diversas formas de contribuir com as nossas
                        iniciativas.
                    </p>
                </header>


                <div class="grid cards-grid">

                    <article class="card col-4">
                        <div class="card-conteudo">
                            <span class="badge badge-sucesso">
                                Voluntariado
                            </span>

                            <h3>Doe seu tempo</h3>

                            <p>
                                Participe das atividades da ONG e ajude na
                                organização de campanhas, eventos e ações
                                comunitárias.
                            </p>

                            <a href="#cadastro"
                               class="btn btn-secundario">
                                Ser voluntário
                            </a>
                        </div>
                    </article>


                    <article class="card col-4">
                        <div class="card-conteudo">
                            <span class="badge badge-aviso">
                                Doações
                            </span>

                            <h3>Contribua com recursos</h3>

                            <p>
                                Alimentos, roupas e outros recursos podem
                                ajudar famílias e comunidades atendidas pelos
                                nossos projetos.
                            </p>

                            <a href="#projetos"
                               class="btn btn-destaque">
                                Ver campanhas
                            </a>
                        </div>
                    </article>


                    <article class="card col-4">
                        <div class="card-conteudo">
                            <span class="badge badge-info">
                                Divulgação
                            </span>

                            <h3>Compartilhe nossas ações</h3>

                            <p>
                                Divulgue os projetos da ONG e ajude mais
                                pessoas a conhecerem e participarem das nossas
                                iniciativas.
                            </p>

                            <a href="#projetos"
                               class="btn btn-primario">
                                Conhecer projetos
                            </a>
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

export function gerarCardsProjetos() {
    return projetos
        .map(
            (projeto) => `
                <article class="card projeto-card col-4">

                    <img
                        src="${projeto.imagem}"
                        alt="${projeto.alt}"
                        class="card-imagem"
                        loading="lazy"
                    >

                    <div class="card-conteudo">

                        <span class="badge ${projeto.badgeClasse}">
                            ${projeto.badge}
                        </span>

                        <h3>${projeto.titulo}</h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                        <a
                            href="#cadastro"
                            class="btn ${projeto.botaoClasse}"
                        >
                            Participar
                        </a>

                    </div>

                </article>
            `
        )
        .join("");
}


/* =========================================================
   TEMPLATE - PROJETOS
========================================================= */

export function templateProjetos() {
    return `
        <section class="hero hero-interno">
            <div class="container">

                <span class="badge badge-info">
                    Nossas ações
                </span>

                <h1>Conheça nossos projetos</h1>

                <p>
                    Nossos projetos buscam ajudar pessoas e comunidades por
                    meio de ações solidárias, campanhas de doação e trabalho
                    voluntário.
                </p>

            </div>
        </section>


        <section class="secao"
                 aria-labelledby="titulo-projetos">

            <div class="container">

                <header class="secao-cabecalho">

                    <h2 id="titulo-projetos">
                        Projetos em destaque
                    </h2>

                    <p>
                        Conheça algumas das iniciativas desenvolvidas pela
                        ONG Solidariedade.
                    </p>

                </header>


                <div class="grid cards-grid">
                    ${gerarCardsProjetos()}
                </div>

            </div>
        </section>


        <section class="secao secao-alternativa"
                 aria-labelledby="titulo-doacao">

            <div class="container">

                <div class="grid">

                    <div class="col-6">

                        <span class="badge badge-aviso">
                            Campanhas
                        </span>

                        <h2 id="titulo-doacao">
                            Sua contribuição faz diferença
                        </h2>

                        <p>
                            As doações recebidas ajudam a manter os projetos
                            sociais e permitem ampliar o atendimento às
                            comunidades.
                        </p>

                        <p>
                            Você pode contribuir participando das campanhas,
                            tornando-se voluntário ou ajudando na divulgação
                            das nossas ações.
                        </p>

                        <a href="#cadastro"
                           class="btn btn-destaque">
                            Quero ajudar
                        </a>

                    </div>


                    <div class="col-6">

                        <img
                            src="${imagemDoacao}"
                            alt="Itens arrecadados durante uma campanha de doação"
                            loading="lazy"
                            class="imagem-responsiva"
                        >

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
        <section class="hero hero-interno">
            <div class="container">

                <span class="badge badge-sucesso">
                    Participe
                </span>

                <h1>Faça parte da ONG Solidariedade</h1>

                <p>
                    Preencha o formulário para participar das nossas ações
                    como voluntário, doador ou apoiador.
                </p>

            </div>
        </section>


        <section class="secao"
                 aria-labelledby="titulo-cadastro">

            <div class="container">

                <header class="secao-cabecalho">

                    <h2 id="titulo-cadastro">
                        Cadastro
                    </h2>

                    <p>
                        Os campos marcados com * são obrigatórios.
                    </p>

                </header>


                <div class="alerta alerta-info"
                     role="status">

                    <strong>Acessibilidade:</strong>
                    todos os campos possuem identificação e podem ser
                    preenchidos utilizando apenas o teclado.

                </div>


                <form
                    id="form-cadastro"
                    class="formulario"
                    novalidate
                >

                    <div class="grid">

                        <div class="campo col-6">
                            <label for="nome">
                                Nome completo *
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                minlength="3"
                                autocomplete="name"
                                placeholder="Digite seu nome"
                            >
                        </div>


                        <div class="campo col-6">
                            <label for="email">
                                E-mail *
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                autocomplete="email"
                                placeholder="exemplo@email.com"
                            >
                        </div>


                        <div class="campo col-4">
                            <label for="nascimento">
                                Data de nascimento *
                            </label>

                            <input
                                type="date"
                                id="nascimento"
                                name="nascimento"
                                required
                                autocomplete="bday"
                            >
                        </div>


                        <div class="campo col-4">
                            <label for="cpf">
                                CPF *
                            </label>

                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                required
                                inputmode="numeric"
                                maxlength="14"
                                autocomplete="off"
                                placeholder="000.000.000-00"
                            >
                        </div>


                        <div class="campo col-4">
                            <label for="telefone">
                                Telefone *
                            </label>

                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                required
                                inputmode="tel"
                                maxlength="15"
                                autocomplete="tel"
                                placeholder="(00) 00000-0000"
                            >
                        </div>


                        <div class="campo col-3">
                            <label for="cep">
                                CEP *
                            </label>

                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                required
                                inputmode="numeric"
                                maxlength="9"
                                autocomplete="postal-code"
                                placeholder="00000-000"
                            >
                        </div>


                        <div class="campo col-3">
                            <label for="estado">
                                Estado *
                            </label>

                            <input
                                type="text"
                                id="estado"
                                name="estado"
                                required
                                maxlength="2"
                                autocomplete="address-level1"
                                placeholder="UF"
                            >
                        </div>


                        <div class="campo col-6">
                            <label for="cidade">
                                Cidade *
                            </label>

                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                required
                                autocomplete="address-level2"
                                placeholder="Digite sua cidade"
                            >
                        </div>


                        <div class="campo col-12">
                            <label for="endereco">
                                Endereço *
                            </label>

                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                required
                                autocomplete="street-address"
                                placeholder="Rua, número e bairro"
                            >
                        </div>


                        <div class="campo col-12">

                            <label for="contribuicao">
                                Como deseja contribuir? *
                            </label>

                            <select
                                id="contribuicao"
                                name="contribuicao"
                                required
                            >

                                <option value="">
                                    Selecione uma opção
                                </option>

                                <option value="voluntario">
                                    Trabalho voluntário
                                </option>

                                <option value="doador">
                                    Fazer doações
                                </option>

                                <option value="divulgacao">
                                    Ajudar na divulgação
                                </option>

                                <option value="outro">
                                    Outra forma de contribuição
                                </option>

                            </select>

                        </div>


                        <div class="campo col-12">

                            <label for="mensagem">
                                Mensagem
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="5"
                                maxlength="500"
                                placeholder="Conte um pouco sobre como você gostaria de participar"
                            ></textarea>

                        </div>

                    </div>


                    <div class="acoes-formulario">

                        <button
                            type="reset"
                            class="btn btn-secundario"
                        >
                            Limpar
                        </button>

                        <button
                            type="submit"
                            class="btn btn-primario"
                        >
                            Enviar cadastro
                        </button>

                    </div>

                </form>

            </div>
        </section>


        <!-- MODAL DE CONFIRMAÇÃO -->

        <div
            id="modal-confirmacao"
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
                    aria-label="Fechar janela de confirmação"
                >
                    ×
                </button>

                <h2 id="modal-titulo">
                    Cadastro enviado!
                </h2>

                <p>
                    Obrigado pelo interesse em participar da
                    ONG Solidariedade.
                </p>

                <button
                    type="button"
                    class="btn btn-primario modal-ok"
                >
                    Entendi
                </button>

            </div>

        </div>


        <!-- TOAST DE FEEDBACK -->

        <div
            id="toast"
            class="toast"
            role="status"
            aria-live="polite"
            aria-atomic="true"
        ></div>
    `;
}