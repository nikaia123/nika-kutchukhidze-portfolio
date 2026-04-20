import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/ScrollToTop' element={<ScrollToTop/>} />
        </Routes>
        
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;