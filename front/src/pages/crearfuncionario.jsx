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
    <form ref={form} onChange={updateFormData}>
        <label htmlFor='nombre'>
            <span>Nombre</span>
            <input name='nombre'  type='text'/>
        </label>
        <label htmlFor='correo'>
            <span>correo</span>
            <input name='correo' type='text'/>
        </label>
        <label htmlFor='identificacion'>
            <span>identificacion</span>
            <input name='identificacion' type='text'/>
        </label>
        <label htmlFor='cargo'>
            <span>cargo</span>
            <input name='cargo' type='text'/>
        </label>
        <label htmlFor='contraseña'>
            <span>contraseña</span>
            <input name='contraseña' type='text'/>
        </label>
        <button type='submit' onClick={submitForm}>Enviar</button>
    </form>
  )
}

export default CrearFuncionario