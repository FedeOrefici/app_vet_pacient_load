const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Do you want to delete this patient?');
        if(respuesta) {
            console.log('deleting...', id)
            eliminarPaciente(id)
        }
    }
                

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

                <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Owner's name: {''}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Discharge date: {''}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Symptom: {''}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>

                <div className="flex justify-between mt-10">   
                    <button type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}>
                    Edit</button>
                    <button type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}>
                    Delete</button>
                </div> 
                
    </div>
  )
}

export default Paciente
