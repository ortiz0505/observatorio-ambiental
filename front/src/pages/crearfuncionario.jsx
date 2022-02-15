import axios from 'axios';
import React from 'react'
import useFormData from '../hooks/useFormData';

const CrearFuncionario = () => {

    const { form, formData, updateFormData } = useFormData();

    const submitForm = async (e) => {
        e.preventDefault();
        const options = {
          method: "POST",
          url: "http://localhost:4000/funcionario/crear",
          headers: { "Content-Type": "application/json" },
          data: formData,
        };
        await axios.request(options);
      };

  return (
        <div className='grid place-items-center my-20'>
            <form className="w-full max-w-lg" ref={form} onChange={updateFormData}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name" htmlFor='nombre'>
                            Nombre
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='nombre' type='text' placeholder="Nombre" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mail" htmlFor='correo'>
                            Correo
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail"  name='correo' type='email' placeholder="example@example.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-identificacion" htmlFor='identificacion'>
                            identificacion
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-identificacion"  name='identificacion' type='number' placeholder="identificación" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-cargo" htmlFor='cargo'>
                            cargo
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cargo" name='cargo' type='text' placeholder="Cuentanos" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-cargo" htmlFor='contraseña'>
                            contraseña
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-cargo" name='contraseña' type='text' placeholder="*******" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button type='submit' onClick={submitForm} className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Enviar registro
                    </button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default CrearFuncionario