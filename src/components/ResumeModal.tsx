import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, CheckCircle2, Download, Briefcase, GraduationCap, Code2, Globe, Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `LEONARDO PEREIRA - DESENVOLVEDOR FRONTEND & BACKEND (FULL-STACK)
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

RESUMO PROFISSIONAL
Desenvolvedor frontend com sólida vivência em backend e especialista em criar experiências web modernas e de alta performance. Atuação focada em projetos freelance, desenvolvimento de SPAs reativas, APIs escaláveis e identidades visuais no Figma.

HABILIDADES TÉCNICAS
- Frontend: React, TypeScript, Tailwind CSS, JavaScript ESNext, Vite, Next.js, HTML5/CSS3 Semântico.
- Backend & APIs: Node.js, Express, Python (FastAPI/Scripts), APIs RESTful, Autenticação JWT.
- Bancos de Dados: SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis).
- Design & UI/UX: Figma (Design Systems & Prototipagem), Adobe Illustrator (Identidades Visuais).
- Ferramentas & DevOps: Git, GitHub, Docker, CI/CD, Otimização de Core Web Vitals, SEO.

EXPERIÊNCIA & SERVIÇOS FREELANCE
- Desenvolvedor Web Freelancer (2022 - Presente):
  * Desenvolvimento de aplicações completas de ponta a ponta para clientes de e-commerce, SaaS e mídia.
  * Criação de dashboards de monitoramento de dados em tempo real com React e PostgreSQL.
  * Integração de múltiplos provedores de pagamento e sistemas de terceiros via REST APIs.
  * Redução média de 40% no tempo de carregamento de páginas através de otimização de bundle e imagens.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:static">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-[#0d0d0f] border border-zinc-800 rounded-none w-full max-w-3xl max-h-[92vh] overflow-y-auto z-10 shadow-2xl p-6 sm:p-10 text-zinc-200 print:bg-white print:text-black print:max-h-none print:border-none print:shadow-none">
        {/* Actions bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-5 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#ffa200] font-bold">
              Currículo Profissional
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-none bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer ml-1"
              aria-label="Fechar currículo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-8 print:space-y-6">
          {/* Header */}
          <div className="border-b border-zinc-800/80 pb-6 print:border-black">
            <h1 className="font-display text-4xl sm:text-5xl text-white print:text-black uppercase tracking-wider">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-[#ffa200] print:text-zinc-800 uppercase tracking-widest mt-1">
              Desenvolvedor Frontend & Backend · Freelancer
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 print:text-zinc-700 mt-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-[#ffa200]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Github className="w-3.5 h-3.5 text-[#ffa200]" />
                <span>github.com/peratop</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <Linkedin className="w-3.5 h-3.5 text-[#ffa200]" />
                <span>linkedin.com/in/pereiradelara</span>
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-800 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#ffa200]" />
              <span>Resumo Profissional</span>
            </h2>
            <p className="text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">
              Desenvolvedor frontend com sólido domínio em backend, especializado em projetar e implementar
              soluções web modernas e de alta performance. Capacidade comprovada de conduzir projetos de ponta a
              ponta: desde a identidade visual e prototipagem no Figma e Adobe Illustrator até o desenvolvimento
              escalável com React, TypeScript, Node.js, Python e bancos SQL e NoSQL.
            </p>
          </div>

          {/* Technical Skills (Square) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 print:text-zinc-800 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#ffa200]" />
              <span>Competências Técnicas</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-none bg-zinc-900/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <span className="font-semibold text-white print:text-black block mb-1">Frontend & UI</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  React, TypeScript, Tailwind CSS, Componentização, Responsive Design, Motion, Next.js.
                </p>
              </div>
              <div className="p-3 rounded-none bg-zinc-900/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <span className="font-semibold text-white print:text-black block mb-1">Backend & APIs</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  Node.js, Express, Python (FastAPI/Scripts), APIs RESTful, JWT, Middleware e Microsserviços.
                </p>
              </div>
              <div className="p-3 rounded-none bg-zinc-900/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <span className="font-semibold text-white print:text-black block mb-1">Bancos de Dados</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis), Modelagem e Otimização de Consultas.
                </p>
              </div>
              <div className="p-3 rounded-none bg-zinc-900/60 print:bg-zinc-100 border border-zinc-800 print:border-zinc-300">
                <span className="font-semibold text-white print:text-black block mb-1">Design & Identidade Visual</span>
                <p className="text-zinc-400 print:text-zinc-700">
                  Figma (Wireframes, Design System, Protótipos), Adobe Illustrator (Vetorização, Identidade).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
