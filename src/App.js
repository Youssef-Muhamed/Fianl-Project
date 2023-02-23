import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Gust from './Pages/Gust';
import ListJobs from './Pages/Jobs/AllJobs/ListJobs';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Gust />} />
        <Route path='/jobs' element={<ListJobs />}>
          
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
