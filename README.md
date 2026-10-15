# Leonardo Pereira | Portfolio Profissional

Portfolio pessoal e profissional desenvolvido para apresentar solucoes web modernas, arquitetura de software e projetos desenvolvidos como desenvolvedor frontend e backend freelancer.

Repositorio oficial: https://github.com/peratop

---

## Sobre o Projeto

Esta aplicacao web foi concebida para oferecer uma experiencia visual solida, veloz e sem sobrecarga cognitiva. Abandonando o modelo tradicional de pagina unica de rolagem infinita, a navegacao e dividida em sessoes dedicadas e objetivas:

- Sobre Mim (Apresentacao profissional, principios tecnicos e trajetoria)
- Projetos (Casos reais de producao com arquitetura detalhada e links oficiais)
- Capacidades (Matriz estatica de habilidades tecnicas em frontend, backend e design)
- Contato (Envio direto de propostas para email e integracao com WhatsApp)

A identidade visual adota uma estetica brutalista e geometrica, com cantos retos (sem arredondamentos), contraste elevado em modo escuro e paleta de destaque ambar (#ffa200).

---

## Tecnologias e Ferramentas

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

### Backend e Integracoes
- Node.js
- Python
- Java (APIs RESTful)
- FormSubmit AJAX (Processamento direto de mensagens via formulario)
- Integracao de contato com WhatsApp

### Bancos de Dados
- MySQL (Modelagem relacional estruturada, integridade referencial e consultas SQL)
- Firebase Firestore (Banco de dados NoSQL orientado a documentos e sincronizacao em tempo real)

### Design e Direcao de Arte
- Adobe Illustrator (Vetorizacao, marcas e identidade visual)
- Adobe Photoshop (Composicao de imagens, pos-producao e pecas visuais)
- Figma (Prototipagem de interfaces, wireframes e design systems)

---

## Projetos em Destaque

### 1. Joana Cortinas Sob Medida
- Escopo: Landing page comercial de alta conversao para atelier especializado.
- Stack: TypeScript, React, Vite, Tailwind CSS e Firebase (banco NoSQL).
- Destaques: Carregamento veloz, design responsivo sob medida, captura de leads e redirecionamento para atendimento via WhatsApp.
- Demonstracao: https://joana-cortinas-sobmedida.vercel.app
- Codigo-fonte: https://github.com/peratop/JoanaLandingPage

### 2. Yeezus Finance
- Escopo: Painel de analise, conciliacao e gestao financeira empresarial.
- Stack: TypeScript, React, Vite no frontend; backend estruturado em Java e banco de dados relacional MySQL.
- Destaques: Arquitetura com integridade transacional, relatorios detalhados e separacao estrita entre camadas de servico e persistencia.

### 3. Host Company - Identidade Visual
- Escopo: Criacao de logotipo, identidade visual corporativa e material de comunicacao visual.
- Ferramentas: Adobe Illustrator e Adobe Photoshop.
- Publicacao no Behance: https://www.behance.net/gallery/124326251/Host-Company

---

## Arquitetura do Codigo

```
├── public/
│   ├── maps.xml              # Sitemap XML para indexacao em motores de busca
│   ├── sitemap.xml           # Alias padrao do mapa do site
│   └── robots.txt            # Regras de rastreamento para crawlers
├── src/
│   ├── assets/
│   │   └── images/           # Imagens e ativos visuais dos projetos
│   ├── components/
│   │   ├── Header.tsx        # Cabecalho fixo com navegacao entre visoes
│   │   ├── HeaderLogo.tsx    # Logotipo vetorial em SVG customizavel
│   │   ├── HomeView.tsx      # Pagina principal e secao Sobre Mim
│   │   ├── ProjectsView.tsx  # Catalogo de projetos com filtros e detalhes
│   │   ├── ProjectModal.tsx  # Modal de aprofundamento tecnico de cada projeto
│   │   ├── CapabilitiesView.tsx # Cards estaticos de competencias tecnicas
│   │   ├── ContactView.tsx   # Formulario com envio direto e canal WhatsApp
│   │   ├── WhatsAppBlock.tsx # Componente de acao e copia de link do WhatsApp
│   │   ├── ResumeModal.tsx   # Visualizador e impressao do curriculo profissional
│   │   └── Footer.tsx        # Rodape com creditos e links de redes
│   ├── data/
│   │   └── portfolioData.ts  # Contratos de dados centralizados e configuracoes
│   ├── types/
│   │   └── portfolio.ts      # Tipagens TypeScript para projetos e itens do curriculo
│   ├── App.tsx               # Gerenciador de estado de visoes e modais
│   ├── main.tsx              # Ponto de montagem da aplicacao React
│   └── index.css             # Diretivas do Tailwind CSS e fontes tipograficas
├── index.html                # Documento base com metatags SEO e Schema.org JSON-LD
├── metadata.json             # Metadados de identificacao da aplicacao
├── package.json              # Dependencias e scripts de automacao
├── tsconfig.json             # Configuracoes do compilador TypeScript
└── vite.config.ts            # Configuracao do empacotador Vite
```

---

## Instrucoes de Execucao Local

### Pre-requisitos
- Node.js (versao 18 ou superior)
- Gerenciador de pacotes npm, yarn ou bun

### Instalacao

1. Clone o repositorio:
```bash
git clone https://github.com/peratop/portfolio.git
cd portfolio
```

2. Instale as dependencias do projeto:
```bash
npm run dev
```
ou `npm install` seguido de `npm run dev`.

### Scripts Disponiveis

- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Compila o codigo TypeScript e gera o pacote estatico de producao no diretorio `dist/`.
- `npm run preview`: Executa localmente o pacote de producao gerado.
- `npm run lint`: Valida o projeto em busca de inconsistencias de tipagem (`tsc --noEmit`).

---

## Otimizacao para Motores de Busca (SEO)

O projeto incorpora boas praticas tecnicas de SEO e indexacao:
- Metatags OpenGraph completas para pre-visualizacao em redes sociais (LinkedIn, Twitter, Discord).
- Dados estruturados Schema.org no formato JSON-LD com definicao do tipo `Person`.
- Arquivo `robots.txt` permitindo indexacao de rotas principais.
- Arquivo `maps.xml` (e `sitemap.xml`) contendo o mapeamento de todas as sessoes do portfolio.

---

## Contato e Redes Profissionais

- Email: dev.leopereira@gmail.com
- WhatsApp: Disponivel atraves do botao direto na pagina de contato
- LinkedIn: https://www.linkedin.com/in/pereiradelara/
- GitHub: https://github.com/peratop
- Behance: https://www.behance.net/gallery/124326251/Host-Company

---

## Licenca

Este projeto e disponibilizado sob a licenca MIT.
