import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';

import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';
import { ProjectDetails } from './pages/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;