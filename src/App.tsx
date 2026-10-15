import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { HomeView } from './components/HomeView';
import { ProjectsView } from './components/ProjectsView';
import { CapabilitiesView } from './components/CapabilitiesView';
import { ContactView } from './components/ContactView';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('', '') as PageId;
      if (['home', 'projects', 'capabilities', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f5] selection:bg-[#ffa200] selection:text-black relative">


      {/* 3-Zone Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Page Routing Views */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'capabilities' && (
          <CapabilitiesView
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenResume={() => setResumeOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
