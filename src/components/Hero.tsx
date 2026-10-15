import React from 'react';
import { ArrowDown, Linkedin, Github, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability status line */}
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-none bg-[#ffa200]"></span>
              <span className="uppercase tracking-widest text-[#ffa200] font-semibold text-[11px]">
                Disponível para Freelance & Contratos
              </span>
              <span className="text-zinc-600">·</span>
              <span>Curitiba & Remoto Global</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white tracking-wide leading-[0.92] uppercase mb-8">
              OLÁ, EU SOU <br />
              <span className="text-white hover:text-[#ffa200] transition-colors duration-300">
                {PERSONAL_INFO.name}.
              </span>
            </h1>

            {/* Bio Lead */}
            <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10 text-balance">
              Desenvolvedor frontend com sólida vivência em backend. Especialista em criar
              experiências web modernas e de alta performance para atrair clientes ou solucionar
              problemas reais de negócios.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onOpenContact}
                className="group flex items-center gap-3 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-sm tracking-wider uppercase px-7 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
              >
                <span>Falar Comigo</span>
                <span className="w-2 h-2 rounded-none bg-black"></span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white text-sm font-medium px-5 py-3.5 rounded-none transition-all duration-200 cursor-pointer"
              >
                <span>Ver Currículo</span>
              </button>

              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                  aria-label="LinkedIn de Leonardo Pereira"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                  aria-label="GitHub de Leonardo Pereira"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                  aria-label="Enviar email para Leonardo Pereira"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Freelance Highlights Strip */}
            <div className="pt-6 border-t border-zinc-850 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffa200] shrink-0" />
                <span>Frontend moderno & Design no Figma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffa200] shrink-0" />
                <span>APIs RESTful em Node.js & Python</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffa200] shrink-0" />
                <span>Bancos de dados SQL & NoSQL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Portrait Photo (Square) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
                <img
                  src="/hero_developer_portrait_1791933675872.jpg"
                  alt="Leonardo Pereira - Desenvolvedor Frontend e Backend"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-none bg-[#0c0c0e]/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Foco Profissional</p>
                    <p className="text-sm font-semibold text-white">Full-Stack & Soluções Freelance</p>
                  </div>
                  <a
                    href="#projects"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#ffa200] hover:underline"
                  >
                    <span>Ver Trabalhos</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
