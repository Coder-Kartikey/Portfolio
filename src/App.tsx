import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

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
    if (currentView === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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
  }, [activeSection, currentView]);

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

  // if (currentView === 'admin') {
  //   return <AdminDashboard />;
  // }

  if (currentView === 'project' && selectedProject) {
    return (
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Header activeSection={activeSection} />
        <ProjectDetail projectId={selectedProject} onBack={handleBackToHome} />
        <Footer />
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
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
