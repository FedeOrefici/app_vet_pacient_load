import Header from "./components/Header"
import Formulario from "./components/Formulario"
import {useState, useEffect} from 'react'
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes,setPacientes] = useState ([]);
  const [paciente, setPaciente] =useState ({});
  
  //eliminar paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

        <div className="mt-12 md:flex">
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
          />

          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />

        </div>
    </div>
  )
}


export default App
