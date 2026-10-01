# ONG Solidariedade

Aplicação web desenvolvida para uma organização do terceiro setor, com o objetivo de divulgar projetos sociais, incentivar o voluntariado e facilitar o cadastro de pessoas interessadas em participar das ações da ONG.

## Visão geral

A aplicação foi desenvolvida como uma SPA (Single Page Application), utilizando HTML5, CSS3 e JavaScript ES6+.

O projeto possui páginas dinâmicas para apresentação da ONG, divulgação dos projetos e cadastro de voluntários e doadores.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- LocalStorage
- Git
- GitHub
- GitHub Actions
- GitHub Pages

## Funcionalidades

- Navegação SPA utilizando hash routes
- Templates HTML gerados dinamicamente
- Cards de projetos sociais
- Formulário de cadastro
- Validação de campos
- Máscaras para CPF, telefone e CEP
- Persistência de preferências com LocalStorage
- Menu responsivo
- Modal de confirmação
- Toasts de feedback
- Navegação por teclado
- Modo escuro automático
- Layout responsivo

## Acessibilidade

Foram implementadas melhorias com base nas diretrizes WCAG 2.1 nível AA, incluindo:

- HTML semântico
- Landmarks de navegação
- Labels associados aos campos
- Atributos WAI-ARIA
- `aria-current` para identificação da rota atual
- `aria-invalid` em campos inválidos
- Foco visível com `:focus-visible`
- Link "Pular para o conteúdo"
- Controle de foco no modal
- Fechamento do modal com a tecla Esc
- Feedback com `aria-live`
- Suporte a `prefers-reduced-motion`
- Suporte a `prefers-color-scheme`
- Contraste adequado entre texto e fundo

## Estrutura do projeto

```text
ONG/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── imagens/
│   ├── doacao.png
│   ├── principal.png
│   └── voluntarios.png
├── js/
│   ├── app.js
│   ├── routes.js
│   └── templates.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── style.css
└── vite.config.js