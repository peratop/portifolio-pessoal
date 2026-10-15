import { Project } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Leonardo Pereira',
  title: 'Desenvolvedor Frontend & Backend | Freelancer',
  headline: 'Especialista em experiências web modernas e de alta performance.',
  email: 'dev.leopereira@gmail.com',
  whatsappNumber: '554199612282',
  whatsappMessage: 'Olá Leonardo! Vi seu portfólio profissional e gostaria de conversar sobre um projeto freelance.',
  github: 'https://github.com/peratop',
  githubUsername: 'peratop',
  linkedin: 'https://www.linkedin.com/in/pereiradelara/',
  bioShort:
    'Desenvolvedor frontend com sólida vivência em backend, focado em criar experiências web modernas, de alta performance e escaláveis para solucionar problemas reais de negócios e alavancar resultados para clientes como freelancer.',
  bioFull:
    'Com foco no ecossistema moderno da web, uno o rigor técnico da engenharia de software com a sensibilidade visual do design. Minha atuação vai desde o desenvolvimento de identidades visuais com Adobe Illustrator, Photoshop e Figma até o desenvolvimento de sistemas web com React, TypeScript, Vite, backend em Node.js, Python e Java, além de modelagem de bancos de dados relacionais estruturados em SQL (MySQL) e não-relacionais noSQL (Firebase/MongoDB).',
  capabilities: [
    { name: 'TypeScript', desc: 'Tipagem estática, contratos de dados rigorosos e código escalável' },
    { name: 'React', desc: 'Interfaces reativas modernas, componentização desacoplada e SPAs' },
    { name: 'Vite', desc: 'Build tool de altíssima performance para desenvolvimento ágil' },
    { name: 'Node.js', desc: 'Servidores rápidos, microsserviços e automações' },
    { name: 'Python', desc: 'Automação, processamento de dados e backends ágeis' },
    { name: 'Java', desc: 'Desenvolvimento backend robusto, arquitetura enterprise e APIs RESTful' },
    { name: 'Bancos SQL (MySQL)', desc: 'Modelagem relacional estruturada, integridade referencial e índices' },
    { name: 'Bancos NoSQL (Firebase)', desc: 'Bancos de dados flexíveis baseados em documentos e tempo real' },
    { name: 'Adobe Illustrator', desc: 'Criação de identidades visuais, vetorização de marcas e logotipos' },
    { name: 'Adobe Photoshop', desc: 'Edição gráfica avançada, pós-produção e mockups de alta resolução' },
    { name: 'Figma', desc: 'Wireframes, protótipos de alta fidelidade e design systems' },
    { name: 'Tailwind CSS', desc: 'Design responsivo utilitário moderno sem bloatware' },
    { name: 'APIs RESTful', desc: 'Arquitetura e consumo de endpoints seguros' },
    { name: 'Git & GitHub', desc: 'Versionamento seguro, CI/CD e colaboração ágil' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'joana-cortinas',
    title: 'Joana Cortinas Sob Medida · Landing Page & Integração NoSQL',
    category: 'Frontend',
    tag: 'Web & NoSQL',
    year: '2026',
    role: 'Desenvolvedor Frontend & Integração NoSQL',
    client: 'Joana Cortinas Sob Medida',
    summary:
      'Landing page moderna de alta conversão desenvolvida em TypeScript com Vite, estilizada com Tailwind CSS e integrada ao Firebase com banco de dados NoSQL.',
    fullDescription:
      'Desenvolvida para o ateliê Joana Cortinas Sob Medida, esta aplicação foca na conversão qualificada de orçamentos e apresentação impecável de portfólio. Construída com TypeScript e Vite para carregamento ultrarrápido, traz design refinado, acolhedor e responsivo. Conta com integração ao Firebase com banco de dados noSQL para persistência de dados e gatilhos diretos para atendimento personalizado via WhatsApp. O problema enfrentado aqui, foi justamente a modernidade, a Joana sempre trabalhou com o marketing boca-a-boca, e mesmo com uma qualidade excepcional isso pode deixar um trabalhador exímio afetado pela modernidade, então além de ser bonito ainda tem de ser intuitivo para os clientes em potencial e clientes antigos!',
    techStack: ['TypeScript', 'Vite', 'React', 'Firebase', 'Banco NoSQL', 'Tailwind CSS'],
    image: '/project_joana_cortinas_1792020530318.jpg',
    demoUrl: 'https://joana-cortinas-sobmedida.vercel.app',
    repoUrl: 'https://github.com/peratop/JoanaLandingPage',
    technicalHighlights: [
      'Frontend moderno com TypeScript e Vite garantindo Core Web Vitals excelentes e carregamento < 0.8s.',
      'Backend com integração do Firebase e banco de dados NoSQL para gerenciamento seguro de registros.',
      'Funil de conversão otimizado com rotas diretas para atendimento de orçamentos pelo WhatsApp.',
      'Design responsivo sob medida com tipografia editorial elegante e galeria de trabalhos em alta resolução.',
    ],
    architecture: {
      frontend: 'TypeScript + React + Vite + Tailwind CSS',
      backend: 'Integração do Firebase (Cloud Services & API)',
      database: 'Banco de Dados noSQL (Firebase Firestore)',
    },
  },
  {
    id: 'yeezus',
    title: 'Yeezus · Plataforma de Gestão & Consultoria Financeira',
    category: 'Full-Stack',
    tag: 'Full-Stack & Java/MySQL',
    year: '2026',
    role: 'Desenvolvedor Full-Stack (Frontend & Backend Java)',
    client: 'Yeezus Finance',
    summary:
      'Plataforma completa de inteligência e planejamento financeiro, desenvolvida com TypeScript/Vite no frontend, backend robusto em Java e banco relacional estruturado em MySQL.',
    fullDescription:
      'A plataforma Yeezus foi projetada para consultoria financeira, acompanhamento patrimonial e simulação de investimentos. No frontend, utiliza a mesma base ágil de TypeScript com Vite e Tailwind CSS, proporcionando uma experiência dark mode arrojada e imersiva. No backend, adota uma arquitetura em Java integrada a um banco de dados relacional estruturado em MySQL para controle estrito de transações e cálculos complexos de rentabilidade. (Projeto corporativo privado sem demonstração pública rodando).',
    techStack: ['TypeScript', 'Vite', 'React', 'Java', 'MySQL (Banco Estruturado)', 'Tailwind CSS'],
    image: '/project_yeezus_finance_1792020531045.jpg',
    repoUrl: 'https://github.com/peratop',
    technicalHighlights: [
      'Frontend reativo com yeBOT, central de relatórios, simulador de investimentos e controle de planejamento.',
      'Backend de alto rendimento em Java com modelagem de dados estruturada e endpoints RESTful.',
      'Banco de dados relacional MySQL com esquemas normalizados, constraints e consultas otimizadas.',
      'Design de interface escura arrojada com navegação por módulos e autenticação protegida.',
    ],
    architecture: {
      frontend: 'TypeScript + React + Vite + Tailwind CSS',
      backend: 'Java (Serviços de regras de negócio & APIs)',
      database: 'Banco de Dados Estruturado Relacional (MySQL)',
    },
  },
  {
    id: 'host-company',
    title: 'Host Company · Identidade Visual & Design Gráfico',
    category: 'Design Gráfico',
    tag: 'Design Gráfico',
    year: '2021',
    role: 'Designer Gráfico & Identidade Visual',
    client: 'Host Company',
    summary:
      'Projeto completo de identidade visual corporativa e branding, criado no Adobe Illustrator e Photoshop, com manual de marca, tipografia e papelaria institucional. Esse projeto foi criado para amigos que estavam começando uma marca de roupas.',
    fullDescription:
      'Projeto de design gráfico e branding corporativo publicado no Behance para a Host Company. Desenvolvido no Adobe Illustrator para concepção geométrica e vetorização precisa da marca e símbolos, e no Adobe Photoshop para composições de apresentação e mockups de papelaria institucional (cartões de visita, envelopes e papéis timbrados). Uma identidade limpa, moderna e memorável.',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Design Gráfico', 'Branding', 'Identidade Visual'],
    image: '/project_host_company_1792020530378.jpg',
    demoUrl: 'https://www.behance.net/gallery/124326251/Host-Company',
    repoUrl: 'https://www.behance.net/gallery/124326251/Host-Company',
    behanceUrl: 'https://www.behance.net/gallery/124326251/Host-Company',
    technicalHighlights: [
      'Criação vetorial de símbolo geométrico e tipografia corporativa no Adobe Illustrator.',
      'Desenvolvimento de variações de aplicação da marca (Primária, Invertida, Dark Grey e Wireframe).`',
      'Definição de paleta cromática de alta fidelidade e sistema tipográfico (Montserrat & Poppins).',
      'Composições fotorrealistas de papelaria institucional projetadas no Adobe Photoshop.',
    ],
    architecture: {
      frontend: 'Apresentação de Case no Behance com guidelines visuais',
      backend: 'Adobe Illustrator (Vetorização) + Adobe Photoshop (Mockups e Pós-produção)',
      database: 'Assets vetoriais em SVG, EPS, PDF e especificações de marca',
    },
  },
];

export const SERVICES = [
  {
    title: 'Landing Pages & Alta Conversão',
    tagline: 'Velocidade, elegância e integração direta com WhatsApp',
    desc: 'Criação de páginas modernas e velozes com TypeScript e Vite, integração com Firebase e bancos NoSQL para captação de leads qualificados.',
    skills: ['TypeScript', 'Vite', 'Firebase', 'Banco NoSQL', 'Tailwind CSS'],
  },
  {
    title: 'Aplicações Web & Sistemas Sob Medida',
    tagline: 'Do frontend reativo a backends robustos',
    desc: 'Desenvolvimento completo de SPAs e plataformas com TypeScript no frontend e backends estruturados em Java, Node.js ou Python com bancos relacionais MySQL.',
    skills: ['Full-Stack', 'Java', 'MySQL', 'TypeScript', 'Node.js', 'Python'],
  },
  {
    title: 'Integração de APIs RESTful & Bancos de Dados',
    tagline: 'Conexão segura e persistência estruturada',
    desc: 'Modelagem e integração de bancos relacionais (MySQL) e não-relacionais (Firebase/NoSQL), aliando autenticação, rotinas seguras e APIs padronizadas.',
    skills: ['MySQL', 'Firebase', 'Java', 'Node.js', 'APIs RESTful'],
  },
  {
    title: 'Design Gráfico & Identidade Visual',
    tagline: 'Marcas memoráveis e materiais institucionais',
    desc: 'Criação profissional de identidades visuais no Adobe Illustrator e Adobe Photoshop, desde logotipos e manuais de marca até mockups e prototipagem no Figma.',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Branding', 'Design Gráfico'],
  },
];
