import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { HomeView } from './components/HomeView';
import { Footer } from './components/Footer';

const ProjectsView = lazy(() =>
  import('./components/ProjectsView').then(({ ProjectsView }) => ({ default: ProjectsView }))
);
const CapabilitiesView = lazy(() =>
  import('./components/CapabilitiesView').then(({ CapabilitiesView }) => ({ default: CapabilitiesView }))
);
const ContactView = lazy(() =>
  import('./components/ContactView').then(({ ContactView }) => ({ default: ContactView }))
);
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then(({ ResumeModal }) => ({ default: ResumeModal }))
);

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
        <Suspense
          fallback={
            <div className="flex min-h-[calc(100vh-200px)] items-center justify-center text-sm text-zinc-400" role="status">
              Carregando página...
            </div>
          }
        >
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
        </Suspense>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Resume Modal */}
      <Suspense fallback={null}>
        {resumeOpen && (
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
