import React from 'react';
import useFormData from '../hooks/useFormData';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';

const primeravezreport = () => {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { user, isAuthenticated} = useAuth0();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { form, formData, updateFormData } = useFormData();
        const submitForm = async (e) => {
            e.preventDefault();
            const options = {
              method: "POST",
              url: "http://localhost:4000/reportero",
              headers: { "Content-Type": "application/json" },
              data: formData,
            };
            await axios.request(options);
          };

  return (
        <div className='divppl'>
            <Navbar />
            {isAuthenticated ? (
                <div className='grid place-items-center my-20 w-full'>
                <form className="w-full max-w-lg" ref={form} onChange={updateFormData}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='nombre'>
                            Nombre
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='nombre' type='text' value={user.name} readonly/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='correo'>
                                Correo
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mail"  name='correo' type='email' value={user.email} readonly/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='zona_influencia'>
                            Zona a la que desea contribuir
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zona"  name='zona' type='text' placeholder="Municipio - Ciudad" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='descripcion'>
                            Motivo por el cual quiere ser reportero
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-motivo"  name='descripcion' type='text' placeholder="Escribe aquí tu motivo" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                            Aceptar terminos y condiciones
                        </span>
                        </label>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <button type='submit' onClick={submitForm} className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                            Enviar registro
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            ) : (
                <div>
                    te tienes que autenticar primero
                </div>
            )}
        </div>
        
  
    );
};

export default primeravezreport;
