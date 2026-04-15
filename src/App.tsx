import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Button } from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div style={{ padding: '50px', textAlign: 'center',  color:'gold' }}>
          <h1>გამარჯობა, მე MR.ნიკა გახლავართ!</h1>
        </div>
        
        {/* გასწორდა: ღილაკს დაემატა ტექსტი და ცენტრირება */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary">
            დაკლიკე აქ
          </Button>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;