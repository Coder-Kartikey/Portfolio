import React, { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import Loader from './components/Loader';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // Check if this is the first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('portfolioVisited');
    if (!hasVisited) {
      setIsLoading(true);
      setShowLoader(true);
      sessionStorage.setItem('portfolioVisited', 'true');
    }
  }, []);

  // Handle URL-based routing
  useEffect(() => {
    const handleRouting = () => {
      const hash = window.location.hash.slice(1);
      
      if (hash.startsWith('project/')) {
        const projectId = parseInt(hash.split('/')[1]);
        setCurrentView('project');
        setSelectedProject(projectId);
        // Scroll to top when opening project detail page
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === 'admin') {
        setCurrentView('admin');
      }  else {
        setCurrentView('home');
        setSelectedProject(null);
      }
    };
  handleRouting();
    window.addEventListener('hashchange', handleRouting);
    return () => window.removeEventListener('hashchange', handleRouting);
  }, []);

  useEffect(() => {
    if (currentView === 'home' && !isLoading) {
      const handleScroll = () => {
        const sections = ['home', 'about', 'timeline', 'skills', 'projects', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [activeSection, currentView, isLoading]);

  // Handle project selection
  const handleProjectSelect = (projectId: number) => {
    // Save current scroll position
    setSavedScrollPosition(window.scrollY);
    window.location.hash = `project/${projectId}`;
  };

  const handleBackToHome = () => {
    window.location.hash = '';
    // Restore scroll position after navigation
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPosition, behavior: 'smooth' });
    }, 100);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowLoader(false);
  };


  // Prevent main website from rendering until loader is done
  if (showLoader || isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  // if (currentView === 'admin') {
  //   return <AdminDashboard />;
  // }

  if (currentView === 'project' && selectedProject) {
    return (
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Header activeSection={activeSection} />
        <ProjectDetail projectId={selectedProject} onBack={handleBackToHome} />
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Header activeSection={activeSection} />
      <main>
        <section id='home'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Projects onProjectSelect={handleProjectSelect} />
        </section>
        {/* <section id='timeline'>
          <Timeline />
        </section> */}
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
