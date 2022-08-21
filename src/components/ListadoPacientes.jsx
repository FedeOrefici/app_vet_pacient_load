import Paciente from "./Paciente";


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

   

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-3xl text-center'>Patients</h2>
                <p className="text-xl mt-5 mb-10 text-center">Manage your {''}
                    <span className='text-indigo-600 font-bold'>Patients and dates</span>
                </p>

            {pacientes.map( (paciente, key) => (
                    <Paciente
                        key={key}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
            ))}
        </div>
    );
}

export default ListadoPacientes;