import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>გამარჯობა, ეს მთავარი გვერდია!</h1>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;