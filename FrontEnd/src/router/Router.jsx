import { Routes, Route } from "react-router-dom";
import Clientes from "../pages/Clientes/Clientes.jsx";
import Pacientes from "../pages/Pacientes/Pacientes.jsx";
import Citas from "../pages/Citas/Citas.jsx";

const Router = () => {
  return (
    <Routes>
       <Route path="/clientes" element={<Clientes />}/> 
       <Route path="/pacientes" element={<Pacientes />}/> 
       <Route path="/citas" element={<Citas />}/> 
    </Routes>
  )
}

export default Router
