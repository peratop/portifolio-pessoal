import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageId } from './Header';

interface CapabilitiesViewProps {
  onNavigate: (page: PageId) => void;
}

export const CapabilitiesView: React.FC<CapabilitiesViewProps> = ({ onNavigate }) => {
  const capabilityGroups = [
    {
      category: 'Frontend & Interfaces Reativas',
      items: [
        {
          name: 'React',
          tag: 'Core Frontend',
          description:
            'Desenvolvimento de interfaces modernas, reativas e modulares. Domínio de hooks, arquitetura baseada em componentes, renderização otimizada e gestão de estado previsível.',
        },
        {
          name: 'TypeScript',
          tag: 'Linguagem Principal',
          description:
            'Tipagem estática estrita em todo o ecossistema frontend e backend. Reduz bugs em tempo de compilação, acelera refatorações e garante código robusto e documentado.',
        },
        {
          name: 'Vite',
          tag: 'Build Tool & Bundler',
          description:
            'Configuração e desenvolvimento com Vite para bundling de altíssima velocidade, HMR instantâneo e otimização precisa de pacotes para produção.',
        },
        {
          name: 'Tailwind CSS',
          tag: 'Estilização Moderna',
          description:
            'Criação de layouts responsivos sem bloatware de CSS. Total controle de microespaçamento, design responsivo para mobile/desktop e temas consistentes.',
        },
      ],
    },
    {
      category: 'Backend & APIs RESTful',
      items: [
        {
          name: 'Java',
          tag: 'Backend Enterprise',
          description:
            'Desenvolvimento backend estruturado e robusto em Java, garantindo confiabilidade transacional para regras de negócio críticas e APIs corporativas.',
        },
        {
          name: 'Node.js & Express',
          tag: 'Backend Runtime',
          description:
            'Construção de servidores rápidos, microsserviços e gateways de integração. Criação de rotas assíncronas, controle de erros centralizado e arquitetura limpa.',
        },
        {
          name: 'Python',
          tag: 'Automação & Serviços',
          description:
            'Desenvolvimento de scripts de automação, processamento de dados, rotinas agendadas e APIs modernas e tipadas com FastAPI.',
        },
        {
          name: 'Integração de APIs RESTful',
          tag: 'Conectividade',
          description:
            'Design e consumo de endpoints REST padronizados, autenticação JWT, validação de payload com sanitização de inputs e integração entre múltiplos serviços web.',
        },
      ],
    },
    {
      category: 'Bancos de Dados & Persistência',
      items: [
        {
          name: 'Bancos de Dados SQL (MySQL & PostgreSQL)',
          tag: 'Relacional Estruturado',
          description:
            'Modelagem relacional estruturada com integridade referencial estrita, consultas otimizadas através de índices e relacionamentos consistentes.',
        },
        {
          name: 'Bancos de Dados NoSQL (Firebase & MongoDB)',
          tag: 'Não-Relacional & Realtime',
          description:
            'Armazenamento flexível baseado em documentos noSQL com Firebase Firestore e MongoDB, ideal para captação ágil de dados e persistência em nuvem.',
        },
      ],
    },
    {
      category: 'Identidade Visual & UI/UX Design',
      items: [
        {
          name: 'Adobe Illustrator',
          tag: 'Design Gráfico Vetorial',
          description:
            'Criação profissional de identidades visuais completas, marcas, logotipos vetoriais com grids geométricos e manuais de identidade.',
        },
        {
          name: 'Adobe Photoshop',
          tag: 'Pós-Produção & Mockups',
          description:
            'Composições visuais de alta resolução, mockups de produtos e papelaria institucional, tratamento fotográfico e design promocional.',
        },
        {
          name: 'Figma',
          tag: 'Design de Interfaces',
          description:
            'Desenvolvimento de wireframes, design systems completos com biblioteca de componentes reutilizáveis e protótipos de alta fidelidade antes da codificação.',
        },
      ],
    },
    {
      category: 'Engenharia, Controle & DevOps',
      items: [
        {
          name: 'Git & GitHub',
          tag: 'Versionamento',
          description:
            'Fluxo de trabalho com branches semânticas, code reviews, versionamento seguro e gerenciamento de repositórios públicos e privados.',
        },
        {
          name: 'Web Performance & SEO',
          tag: 'Engenharia de Entrega',
          description:
            'Otimização de métricas Core Web Vitals (LCP, FID/INP, CLS), lazy loading de ativos, minificação de bundles e estrutura HTML semântica.',
        },
      ],
    },
  ];

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-zinc-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para Início</span>
          </button>
          <span className="text-zinc-600">/</span>
          <span className="text-[#ffa200] font-semibold">Capacidades Técnicas</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 border-b border-zinc-850 pb-10">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-4">
            MINHAS CAPACIDADES
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Minhas capacidades são: <strong className="text-white font-semibold">React, TypeScript, Node.js, Python, Java</strong> e
            bancos de dados <strong className="text-white font-semibold">SQL (MySQL) e noSQL (Firebase/MongoDB)</strong>. Com essas ferramentas, desenvolvo
            aplicações escaláveis e robustas conforme a necessidade. Tenho sólida experiência no desenvolvimento de identidades visuais
            com <strong className="text-white font-semibold">Adobe Illustrator, Photoshop e Figma</strong>, além de dominar a integração de <strong className="text-white font-semibold">APIs RESTful</strong> para sistemas integrados.
          </p>
        </div>

        {/* Static Cards Grid */}
        <div className="space-y-16">
          {capabilityGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              {/* Group Title */}
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider">
                  {group.category}
                </h2>
              </div>

              {/* Static Capability Cards (Sharp Square) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {group.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-7 rounded-none bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-24 p-8 sm:p-12 rounded-none bg-zinc-950 border border-zinc-850 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2">
              Pronto para aplicar essa stack no seu negócio?
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl">
              Seja para um novo produto do zero, landing pages de alta conversão, identidade visual ou desenvolvimento de backend escalável.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-none bg-zinc-900 text-zinc-200 text-xs font-bold uppercase tracking-wider border border-zinc-700 transition-colors cursor-pointer"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-none bg-[#ffa200] text-black text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Falar Comigo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
