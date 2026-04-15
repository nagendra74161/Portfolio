import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { socialLinks } from './data';

function AppContent() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const downloadResume = () => {
    const text = `Name: Automation Tester\nRole: Senior Automation Tester\nExperience: Selenium, Cypress, Playwright, Jenkins, GitHub Actions\n\nSummary:\nExperienced automation tester with a strong focus on scalable QA pipelines, API and UI coverage, and CI/CD-driven validations.`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Automation-Tester-CV.txt';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-slate-100">
      {!loaded && <LoadingScreen />}
      <Navbar onDownload={downloadResume} />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={<HomePage onViewProjects={() => navigate('/projects')} onDownload={downloadResume} />}
          />
          <Route
            path="/about"
            element={<HomePage onViewProjects={() => navigate('/projects')} onDownload={downloadResume} />}
          />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="border-t border-white/10 bg-bg/90 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div>© 2026 Automation Tester Portfolio. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
