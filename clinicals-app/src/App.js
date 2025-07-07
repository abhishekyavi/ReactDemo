import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddPatient from './components/AddPatient';
import AddClinicals from './components/AddClinicals';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Test from './components/Test';
import Delete from './components/Delete';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test/:id" element={<Test/>} />
          <Route path="/Delete/:id" element={<Delete/>} />
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
