import axios from 'axios';
import React from 'react'
import useFormData from '../hooks/useFormData';
import { useAuth0 } from "@auth0/auth0-react";
import Notauth from '../components/404';

const CrearFuncionario = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();
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
        <div className='divppl'>
            {isAuthenticated ? (
                <div className='forms'>
                    <form className="w-full max-w-lg" ref={form} onChange={updateFormData} onSubmit={submitForm}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="labelsppl" for="grid-first-name" htmlFor='nombre'>
                                    Nombre
                                </label>
                                <input className="inputs-text-ppl" id="grid-first-name" name='nombre' type='text' placeholder="Nombre" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="labelsppl" for="grid-mail" htmlFor='correo'>
                                    Correo
                                </label>
                                <input className="inputs-text-ppl" id="grid-mail"  name='correo' type='email' placeholder="example@example.com" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="labelsppl" for="grid-identificacion" htmlFor='identificacion'>
                                    identificacion
                                </label>
                                <input className="inputs-text-ppl" id="grid-identificacion"  name='identificacion' type='number' placeholder="identificación" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="labelsppl" for="grid-cargo" htmlFor='cargo'>
                                    cargo
                                </label>
                                <input className="inputs-text-ppl" id="grid-cargo" name='cargo' type='text' placeholder="Cuentanos" required/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="labelsppl" for="grid-cargo" htmlFor='contraseña'>
                                    contraseña
                                </label>
                                <input className="inputs-text-ppl" id="grid-cargo" name='contraseña' type='text' placeholder="*******" required/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                            <button type='submit' className="buttonsppl">
                                Enviar registro
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
        ) : (
            <Notauth />
        )}
        </div>
        
  )
}

export default CrearFuncionario