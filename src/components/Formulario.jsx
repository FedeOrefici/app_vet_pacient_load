import Error from './Error'
import {useState, useEffect} from 'react'

///cooregir hooks- convertir en un objeto- agregar funcion handle change
const Formulario = ({pacientes, setPacientes, paciente}) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)


  //modificar
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  //generacion id para paciente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }
  
     //evento click
    const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacío')
      setError(true)
      return;
    }
    setError(false)
    setPacientes(nombre)

    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
    
    //edicion paciente
    if(paciente.id) {
      //editando registro
      objetoPaciente.id = paciente.id;
      
    const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id
      ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)

    }else {
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>Añade pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
          </p>

      <form className='bg-slate-400 shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
      {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className="mb-5">
            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
            <input id="mascota" type="text" placeholder='Nombre de la mascota...' className='border-2 w-full p-2 mt-3 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}></input>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
            <input id="propietario" type="text" placeholder='Nombre del propietario...' className='border-2 w-full p-2 mt-3 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}></input>
          </div>

          <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
            <input id="email" type="email" placeholder='Email...' className='border-2 w-full p-2 mt-3 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          </div>

          <div className='mb-5'>
            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input id="alta" type="date" className='border-2 w-full p-2 mt-3 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}></input>
          </div>

          <div className='mb-5'>
            <label htmlFor="text" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
            <textarea id="text" placeholer="describe los sintomas" className='border-2 w-full p-2 mt-2 placeholder.gray-400 rounded-md'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
          </div>

          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer"
          value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}></input>

      </form>

    </div>
  )
}

export default Formulario