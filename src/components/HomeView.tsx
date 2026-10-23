import React from 'react';
import { Linkedin, Github, FolderGit2, Cpu, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from './Header';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative pb-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white tracking-wide leading-[0.92] uppercase mb-8">
                OLÁ, EU SOU <br />
                <span className="text-white">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10 text-balance">
                Desenvolvedor web com conhecimento fullstack, com foco em criar
                sites para ajudar a solucionar problemas, modernizar ou automatizar tarefas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-3 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-none transition-all duration-200 transform hover:translate-y-[-2px] active:translate-y-[0px] cursor-pointer"
                >
                  <span>Falar Comigo</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4 text-[#ffa200]" />
                  <span>Ver Projetos</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('capabilities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
                >
                  <Cpu className="w-4 h-4 text-[#ffa200]" />
                  <span>Capacidades</span>
                </button>

                {/* Social icons */}
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-11 h-11 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                    aria-label="LinkedIn de Leonardo Pereira"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-11 h-11 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                    aria-label="GitHub de Leonardo Pereira"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Core capabilities ticker */}
              <div className="pt-6 border-t border-zinc-850 flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-400">
              </div>
            </div>

            {/* Right Column: Square Developer Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                  <img
                    src="/hero_developer_portrait_1791933675872.webp"
                    alt="Leonardo Pereira - Desenvolvedor Full-Stack"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                    className="w-full h-[460px] sm:h-[520px] lg:h-[560px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-none bg-[#0c0c0e]/95 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onNavigate('projects');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#ffa200] hover:underline cursor-pointer"
                    >
                      <span>Conheça meus Trabalhos</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section on the Main Page */}
      <section className="py-20 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase sticky top-28">
                SOBRE MIM
              </h2>
            </div>

            {/* Right Column: Biography & Freelance Mindset */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 leading-snug">
                Sou um desenvolvedor fullstack, meu foco é criar sites, aplicações e ajudar você a ter mais clientes
          
              </h3>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Minha atuação é focada em trabalhos de freelancer, criando aplicações que facilitem para o olho do usuário
                e traga resultados concretos para empreendedores.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Minhas principais capacidades técnicas são <span className="text-zinc-200 font-medium">React, TypeScript, Node.js, Python</span>,
                e bancos de dados relacionais (<span className="text-zinc-200 font-medium">SQL</span>) e não-relacionais (<span className="text-zinc-200 font-medium">noSQL</span>).
                
                Com essas ferramentas, desenvolvo aplicações escaláveis e robustas conforme a necessidade específica de cada cliente ou projeto.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                Além do código, tenho experiência no desenvolvimento de identidades visuais e prototipagem interativa
                com ferramentas como <span className="text-zinc-200 font-medium">Figma</span> e <span className="text-zinc-200 font-medium">Adobe Illustrator</span>.
              </p>

              {/* Action Buttons inside About */}
              <div className="flex flex-wrap items-center gap-4">
                <button  
                  onClick={onOpenResume}
                  className="group flex items-center gap-2.5 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver Currículo Completo</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-none transition-colors cursor-pointer"
                >
                  <span>Ir para Projetos</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('capabilities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-none transition-colors cursor-pointer"
                >
                  <span>Ver Todas as Capacidades</span>
                </button>
                <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold tracking-wider uppercase px-5 py-3.5 rounded-none transition-colors cursor-pointer"
              >
                <span>Iniciar um Projeto</span>
              </button>
              </div>
            </div>
          </div>

          {/* Wide Studio Photography Card (Sharp Square) */}
          <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl mb-16">
 
            </div>

          {/* Quick Navigation Cards (Sharp Square) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Projetos */}
            <div
              onClick={() => {
                onNavigate('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-8 rounded-none bg-zinc-900/60 border border-zinc-800 hover:border-[#ffa200]/70 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ffa200] transition-colors">
                  Projetos & Trabalhos Realizados
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Conheça os projetos em detalhes com descrições técnicas, arquiteturas de sistema (frontend, backend e banco) e links diretos para os repositórios no GitHub.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#ffa200] uppercase tracking-wider">
                <span>Acessar Projetos</span>
              </div>
            </div>

            {/* Card Capacidades */}
            <div
              onClick={() => {
                onNavigate('capabilities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-8 rounded-none bg-zinc-900/60 border border-zinc-800 hover:border-[#ffa200]/70 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ffa200] transition-colors">
                  Capacidades Técnicas & Ferramentas
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Visão completa e estática das minhas tecnologias: React, TypeScript, Node.js, Python, bancos SQL/NoSQL, design no Figma e Adobe Illustrator, e APIs RESTful.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#ffa200] uppercase tracking-wider">
                <span>Ver Capacidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
