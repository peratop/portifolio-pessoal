import React, { useState } from 'react';
import { Menu, X, FolderGit2, Cpu, User, Mail } from 'lucide-react';

export type PageId = 'home' | 'projects' | 'capabilities' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Sobre Mim', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projetos', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'capabilities', label: 'Capacidades', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contato', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-zinc-800 py-4 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        <button
          onClick={() => handleSelectPage('home')}
          className="flex items-center transition-opacity cursor-pointer focus:outline-none"
          aria-label="Ir para a página inicial"
        >
          <img 
            src="/logo.svg" 
            alt="Leonardo Pereira Logo" 
            className="h-4 sm:h-5 w-auto object-contain" 
          />
        </button>

        {/* Zone 2: Navigation Links (Page Switchers) */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectPage(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-none transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer text-xs uppercase tracking-wider font-semibold border ${
                  isActive
                    ? 'bg-zinc-900 text-[#ffa200] border-[#ffa200]'
                    : 'text-zinc-400 border-transparent hover:text-white hover:bg-zinc-900'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>


        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none rounded-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0e] border-b border-zinc-800 px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectPage(item.id)}
                className={`text-left text-sm font-semibold uppercase tracking-wider py-2.5 px-3 rounded-none flex items-center justify-between transition-colors border ${
                  currentPage === item.id
                    ? 'bg-zinc-900 text-[#ffa200] border-[#ffa200]'
                    : 'text-zinc-300 border-transparent hover:bg-zinc-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleSelectPage('contact')}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-[#ffa200] text-black font-bold text-xs tracking-wider uppercase py-3 rounded-none cursor-pointer"
          >
            <span>Falar Comigo •</span>
          </button>
        </div>
      )}
    </header>
  );
};