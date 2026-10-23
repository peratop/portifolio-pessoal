import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowLeft, ShieldAlert, Palette } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { PageId } from './Header';

interface ProjectsViewProps {
  onNavigate: (page: PageId) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = ['Todos', 'Frontend', 'Full-Stack', 'Design Gráfico'];

  const filteredProjects =
    selectedFilter === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

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
          <span className="text-[#ffa200] font-semibold">Trabalhos & Projetos</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-850 pb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#ffa200] uppercase tracking-wider mb-2">
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-4">
              MEUS PROJETOS
            </h1>
            <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
              Aqui estão expostos meus principais projetos com descrições técnicas detalhadas,
              arquiteturas completas e links para os repositórios de código no GitHub e cases no Behance.
            </p>
          </div>

          {/* Filter Pills (Square tabs) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-none self-start md:self-auto shrink-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold rounded-none transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#ffa200] text-black shadow-none'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-24">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
            >
              {/* Left Column: Image Mockup Container (Square) */}
              <div className="lg:col-span-7">
                <div className="relative rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 p-3 sm:p-4 shadow-xl transition-all duration-500 hover:border-zinc-700">

                  <div
                    onClick={() => setActiveProject(project)}
                    className="relative overflow-hidden rounded-none cursor-pointer aspect-video bg-zinc-950"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 bg-[#ffa200] text-black font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-none shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver Arquitetura Técnica</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h2>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                {/* Project Info Block */}
                <div className="mb-6 border-t border-zinc-850">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 py-3">
                    INFORMAÇÕES DO PROJETO
                  </p>

                  <div className="divide-y divide-zinc-850 text-xs">
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-zinc-400">Cliente / Escopo</span>
                      <span className="text-zinc-200 font-medium">{project.client}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-zinc-400">Ano</span>
                      <span className="text-zinc-200 font-medium tabular-nums">{project.year}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-zinc-400">Papel Técnico</span>
                      <span className="text-zinc-200 font-medium">{project.role}</span>
                    </div>
                    <div className="py-2.5 flex justify-between items-center">
                      <span className="text-zinc-400">Stack Principal</span>
                      <span className="text-[#ffa200] font-medium truncate max-w-[220px]">
                        {project.techStack.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Links & CTA Row */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#ffa200] hover:text-[#ffb333] transition-colors cursor-pointer group/link"
                  >
                    <span>DETALHES TÉCNICOS</span>
                  </button>

                  {/* GitHub or Behance link */}
                  {project.behanceUrl ? (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-zinc-200 hover:text-white transition-colors"
                    >
                      <Palette className="w-3.5 h-3.5 text-[#ffa200]" />
                      <span>VER NO BEHANCE</span>
                    </a>
                  ) : (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>VER NO GITHUB</span>
                      <Github className="w-3.5 h-3.5 text-[#ffa200]" />
                    </a>
                  )}

                  {/* Live Demo or Private indicator */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#ffa200] hover:underline transition-colors"
                    >
                      <span>ACESSAR SITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 px-2.5 py-1 bg-zinc-900 border border-zinc-800">
                      Sem Demo Pública (Privado)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Contact (Square) */}
        <div className="mt-28 p-8 sm:p-12 rounded-none bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2">
              Precisa de um projeto como esses?
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl">
              Estou disponível para novas contratações freelance, desenvolvimento de landing pages de alta conversão, aplicações completas com backend e identidades visuais corporativas.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-[#ffa200] hover:bg-[#ffb333] text-black font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded-none transition-colors cursor-pointer shrink-0"
          >
            <span>Falar comigo</span>
          </button>
        </div>
      </div>

      {/* Architectural Deep-Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
