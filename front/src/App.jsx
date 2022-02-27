import Index from './pages/index';
import Login from './pages/login';
import Mgeneral from './pages/mapageneral';

import Reportero from './pages/reportero';
import PVReportero from './pages/primeravezreport';
import Reportesr from './pages/reportesr';

import Funcionario from './pages/funcionario';
import Gestionreporteros from './pages/gestiondereporteros';
import Reportesf from './pages/reportesf';
import Solicitudesreportes from './pages/solicitudesreportes';
import Ceventos from './pages/creareventos';
import Seguimientos from './pages/seguimientos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './styles/globals.css';
import CrearFuncionario from './pages/crearfuncionario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index />} />
        
        <Route path='/mapageneral' element={<Mgeneral />} />
        <Route path='/login' element={<Login />} />

        <Route path='/pvreportero' element={<PVReportero />} />
        <Route path='/reportero' element={<Reportero />} />
        <Route path='/reportero/rreportero' element={<Reportesr />} />
        <Route path='/evento/crear' element={<Ceventos />} />

        <Route path='/funcionario' element={<Funcionario />} />
        <Route path='/funcionario/gestiondereporteros' element={<Gestionreporteros />} />
        <Route path='/funcionario/rfuncionario' element={<Reportesf />} />
        <Route path='/funcionario/solicitudesr' element={<Solicitudesreportes />} />
        <Route path='/funcionario/crear' element={<CrearFuncionario />} />
        <Route path='/funcionario/seguimiento/:id' element={<Seguimientos />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
