import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import AddClinicals from './components/AddClinicals';


function App() {
  return (
    <div>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  
    <Route path="/AddPatient" element={<AddPatient/>} />
    <Route path="/AddPatient/:id" element={<AddPatient/>} />
    <Route path="/AddClinicals" element={<AddClinicals/>} />

  </Routes>
</BrowserRouter>

     
    </div>
  );
}

export default App;
