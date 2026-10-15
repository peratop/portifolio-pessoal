import React, { useState } from 'react';
import { Linkedin, Github, FileText, CheckCircle2, Terminal, Code, Palette, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>('React');

  const capabilities = [
    {
      name: 'React',
      category: 'Frontend',
      desc: 'Criação de SPAs modernas, componentização desacoplada, hooks personalizados e estado otimizado.',
    },
    {
      name: 'TypeScript',
      category: 'Frontend/Backend',
      desc: 'Tipagem estática rigorosa para prevenir bugs em tempo de compilação e facilitar refatorações seguras.',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      desc: 'Desenvolvimento de APIs RESTful escaláveis, microsserviços rápidos e middleware com Express.',
    },
    {
      name: 'Python',
      category: 'Backend/Automação',
      desc: 'Scripts de automação, processamento de dados, rotinas de integração e servidores ágeis com FastAPI.',
    },
    {
      name: 'SQL (PostgreSQL / MySQL)',
      category: 'Database',
      desc: 'Modelagem de dados relacionais, queries performáticas com índices e integridade referencial.',
    },
    {
      name: 'NoSQL (MongoDB / Redis)',
      category: 'Database',
      desc: 'Armazenamento flexível baseado em documentos JSON e camadas de cache ultrarrápidas em memória.',
    },
    {
      name: 'APIs RESTful',
      category: 'Integração',
      desc: 'Design e consumo de endpoints REST padronizados, com autenticação JWT, CORS e boas práticas.',
    },
    {
      name: 'Figma',
      category: 'UI/UX Design',
      desc: 'Desenvolvimento de identidades visuais, wireframes, protótipos navegáveis e sistemas de design.',
    },
    {
      name: 'Adobe Illustrator',
      category: 'Design Gráfico',
      desc: 'Vetorização de logotipos, ícones personalizados e ativos gráficos digitais exclusivos para marcas.',
    },
    {
      name: 'Tailwind CSS',
      category: 'Estilização',
      desc: 'Construção ágil de layouts responsivos modernos sem bloatware, com total fidelidade ao design.',
    },
    {
      name: 'Performance & SEO',
      category: 'Engenharia',
      desc: 'Otimização de Core Web Vitals, carregamento assíncrono e estrutura técnica para ranqueamento no Google.',
    },
    {
      name: 'Git & GitHub',
      category: 'Ferramentas',
      desc: 'Controle de versão distribuído, branching strategy, code review e integração contínua.',
    },
  ];

  const selectedSkillData = capabilities.find((c) => c.name === activeSkill);

  return (
    <section id="about" className="py-24 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Part: About Me Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase sticky top-28">
              SOBRE MIM
            </h2>
          </div>

          {/* Right Column: Narrative & Action buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
              Desenvolvedor frontend com sólida base em backend, focado em construir
              soluções digitais que geram valor tangível.
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Olá! Eu sou Leonardo Pereira. Minha atuação combina a sensibilidade visual do design
              com a precisão da engenharia de software. Como freelancer, meu compromisso é entregar
              sistemas confiáveis, rápidos e bem estruturados — seja para transformar uma ideia em
              um MVP viável, redesenhar uma plataforma existente ou integrar serviços críticos.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Acredito que um bom código deve ser limpo, tipado e escalável, e que uma boa interface
              deve ser intuitiva, acessível e visualmente envolvente. Por isso, uno ferramentas como
              Figma para prototipar a experiência do usuário e React + TypeScript + Node/Python para
              concretizá-la em produção com máxima fidelidade.
            </p>

            {/* Resume and social links */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2.5 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
              >
                <span>VER CURRÍCULO COMPLETO</span>
                <span className="w-1.5 h-1.5 bg-black" />
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Wide Studio Portrait Showcase (Square) */}
        <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 mb-28 shadow-2xl">
          <img
            src="/hero_developer_portrait_1791933675872.jpg"
            alt="Leonardo Pereira - Espaço de trabalho e colaboração digital"
            referrerPolicy="no-referrer"
            className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-300">
            <span className="font-medium text-white tracking-wide">
              Leonardo Pereira · Desenvolvedor Freelancer Full-Stack
            </span>
            <span className="text-[#ffa200] font-semibold uppercase tracking-wider">
              Pronto para novos desafios e parcerias
            </span>
          </div>
        </div>

        {/* Bottom Part: My Capabilities ("MINHAS CAPACIDADES") */}
        <div id="capabilities" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase sticky top-28">
              MINHAS CAPACIDADES
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
              Domino tecnologias modernas para criar aplicações completas, desde a arquitetura de
              banco de dados até a experiência do usuário final.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {capabilities.map((cap) => {
                const isSelected = activeSkill === cap.name;
                return (
                  <button
                    key={cap.name}
                    onClick={() => setActiveSkill(cap.name)}
                    className={`px-4 py-2.5 rounded-none text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#ffa200] text-black shadow-none'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {cap.name}
                  </button>
                );
              })}
            </div>

            {selectedSkillData && (
              <div className="p-6 rounded-none bg-zinc-900/70 border border-zinc-800 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#ffa200]">
                    {selectedSkillData.category}
                  </span>
                  <span className="text-xs text-zinc-400">Capacidade</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {selectedSkillData.name}
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedSkillData.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
