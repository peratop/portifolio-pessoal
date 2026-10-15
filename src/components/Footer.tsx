import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from './Header';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 bg-[#060607]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-300">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>Desenvolvedor Frontend & Backend | Freelancer</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#ffa200] transition-colors text-xs flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#ffa200] transition-colors text-xs flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#ffa200] transition-colors text-xs flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-none bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-[#ffa200] border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
