import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Gust from './Pages/Gust';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Gust />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
