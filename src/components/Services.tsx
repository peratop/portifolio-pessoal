import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, Check, Clock, ShieldCheck, Zap } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const steps = [
    {
      num: '01',
      title: 'Briefing & Diagnóstico',
      desc: 'Entendimento profundo das metas do seu negócio, escopo das funcionalidades, prazos e expectativas técnicas.',
    },
    {
      num: '02',
      title: 'Design & Prototipagem',
      desc: 'Criação de wireframes e protótipos de alta fidelidade no Figma para validação visual prévia antes de qualquer linha de código.',
    },
    {
      num: '03',
      title: 'Desenvolvimento Ágil',
      desc: 'Construção com React, TypeScript, Node/Python e bancos de dados, com código limpo, testes e deploys parciais de acompanhamento.',
    },
    {
      num: '04',
      title: 'Deploy & Suporte Contínuo',
      desc: 'Publicação em ambiente de produção, otimização de velocidade (Core Web Vitals), entrega da documentação e garantia pós-lançamento.',
    },
  ];

  return (
    <section id="services" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase mb-3">
              SERVIÇOS FREELANCE
            </h2>
            <p className="text-zinc-400 text-base max-w-2xl">
              Soluções sob medida para startups, agências e empresas que precisam de entregas rápidas,
              com alto padrão estético e excelência em engenharia de software.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#d4e971] hover:bg-[#c3de57] text-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#d4e971] uppercase tracking-wider">
                    {service.tagline}
                  </span>
                  <span className="text-zinc-600 font-mono text-xs">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4e971] transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>
              </div>

              {/* Skills included */}
              <div className="pt-4 border-t border-zinc-850 flex flex-wrap gap-2">
                {service.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-zinc-950 text-[11px] font-medium text-zinc-300 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Roadmap */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-850">
          <div className="mb-10 text-center sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#d4e971] mb-2">
              PROCESSO DE TRABALHO FREELANCER
            </h3>
            <h4 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase">
              Como transformo seu projeto em realidade
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <span className="text-3xl font-display text-zinc-700 tracking-wider block mb-3">
                  {step.num}
                </span>
                <h5 className="text-base font-bold text-white mb-2">{step.title}</h5>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#d4e971]" />
              <span>Entregas incrementais com feedbacks contínuos</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4e971]" />
              <span>Contrato de prestação de serviços com escopo claro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d4e971]" />
              <span>Cumprimento rigoroso de cronogramas acordados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
