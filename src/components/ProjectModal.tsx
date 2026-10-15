import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, Server, Database, CheckCircle, Palette, Lock } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container (Square) */}
      <div className="relative bg-[#0d0d0f] border border-zinc-800 rounded-none w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl p-6 sm:p-8 md:p-10 text-zinc-200">
        {/* Header bar */}
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-6 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-none bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shrink-0"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Visual Showcase (Square) */}
        <div className="relative rounded-none overflow-hidden border border-zinc-800 bg-zinc-950 mb-8">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[420px] object-cover"
          />
        </div>

        {/* Overview & Technical Deep Dive */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
              Visão Geral
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Breakdown Cards (Square) */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-4">
              Arquitetura do Sistema & Ferramentas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-none bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-[#ffa200] font-semibold mb-2">
                  <span>Frontend / Apresentação</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  {project.architecture.frontend}
                </p>
              </div>

              <div className="p-4 rounded-none bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-[#ffa200] font-semibold mb-2">
                  <span>Backend & Serviços</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  {project.architecture.backend}
                </p>
              </div>

              <div className="p-4 rounded-none bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-[#ffa200] font-semibold mb-2">
                  <span>Banco de Dados / Armazenamento</span>
                </div>
                <p className="text-xs text-zinc-300 leading-normal">
                  {project.architecture.database}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-4">
              Destaques Técnicos & Decisões de Engenharia
            </h3>
            <div className="space-y-3">
              {project.technicalHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <p className="text-sm text-zinc-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips (Square) */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-3">
              Tecnologias Empregadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-none bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Links (Square) */}
          <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.behanceUrl ? (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-none transition-colors"
                >
                  <Palette className="w-4 h-4" />
                  <span>Ver Case Completo no Behance</span>
                </a>
              ) : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-none transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Ver Repositório no GitHub</span>
                </a>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-none transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#ffa200]" />
                  <span>Acessar Demonstração (Site ao Vivo)</span>
                </a>
              ) : (
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
                  <Lock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Aplicação privada corporativa (Sem demonstração pública)</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Fechar Visualização
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
