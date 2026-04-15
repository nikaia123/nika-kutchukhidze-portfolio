import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
        </Routes>

      </MainLayout>
    </BrowserRouter>
  );
}

export default App;