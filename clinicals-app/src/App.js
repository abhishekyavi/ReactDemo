import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import AddClinicals from './components/AddClinicals';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddPatient" element={<AddPatient />} />
          <Route path="/AddPatient/:id" element={<AddPatient />} />
          <Route path="/AddClinicals/:id" element={<AddClinicals />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} position='top-center'  />
    </div>
  );
}

export default App;
