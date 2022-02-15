import axios from 'axios';
import React from 'react'
import useFormData from '../hooks/useFormData';

const creareventos = () => {
   const { form, formData, updateFormData } = useFormData();

    const submitForm = async (e) => {
        e.preventDefault();
        const options = {
          method: "POST",
          url: "http://localhost:4000/evento/crear",
          headers: { "Content-Type": "application/json" },
          data: formData,
        };
        await axios.request(options);
      };

  return (
    <div className='fixed h-screen w-1/5 bg-gray-500'>
        <form ref={form} onChange={updateFormData} className='grid grid-cols-1 gap-4'>
            <label htmlFor='latitud'>
                <span>Latitud</span>
                <input name='latitud'  type='text'/>
            </label>
            <label htmlFor='longitud'>
                <span>Longitud</span>
                <input name='longitud' type='text'/>
            </label>
            <label htmlFor='imagen'>
                <span>Imagen</span>
                <input name='imagen' type='text'/>
            </label>
            <label htmlFor='fecha_fin'>
                <span>Fecha_fin</span>
                <input name='fecha_fin' type='text'/>
            </label>
            <label htmlFor='descripcion'>
                <span>Descripcion</span>
                <input name='descripcion' type='text'/>
            </label>
            <label htmlFor='zona_influencia'>
                <span>Zona_influencia</span>
                <input name='zona_influencia' type='text'/>
            </label>
            <label htmlFor='ID_reportero'>
                <span>ID_reportero</span>
                <input name='ID_reportero' type='text'/>
            </label>
            <label htmlFor='prioridad'>
                <span>Prioridad</span>
                <input name='prioridad' type='text'/>
            </label>
            <label htmlFor='clasificacion'>
                <span>Clasificacion</span>
                <input name='clasificacion' type='text'/>
            </label>
            <label htmlFor='enlace'>
                <span>Enlace</span>
                <input name='enlace' type='text'/>
            </label>
            <button type='submit' onClick={submitForm}>Enviar</button>
        </form>
    </div>
  )
}

export default creareventos