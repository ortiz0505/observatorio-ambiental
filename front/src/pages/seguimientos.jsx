import axios from "axios";
import React, { useEffect, useState } from "react";
import useFormData from "../hooks/useFormData";
import RowTracing from "../components/RowTracing";

const seguimientos = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
  const { form, formData, updateFormData } = useFormData();

  const submitForm = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:4000/seguimiento",
      headers: { "Content-Type": "application/json" },
      data: formData,
    };
    await axios.request(options);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [events, setEvents] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const eventsData = async () => {
      const options = { 
        method: "get",
        url: "http://localhost:4000/seguimiento",
      };
      const response = await axios.request(options);
      setEvents(response.data);
    };
    eventsData();
  }, []);

  return (
    <div className='text-gray-900 bg-gray-200'>
        <form
          ref={form}
          onChange={updateFormData}
          className="p-4"
        >
            {/*<div class="p-4 flex">
                <h1 class="text-3xl">ID_ evento</h1>
            </div>*/}
                <label htmlFor="ID_evento">
                    <span>ID evento</span>
                    <input name="ID_evento" type="text" className='input-event'/>
                </label>
                <label htmlFor="ID_funcionario">
                    <span>ID funcionario</span>
                    <input name="ID_funcionario" type="text" className='input-event'/>
                </label>
            <div className='grid grid-cols-4 gap-4'>
                <label htmlFor="tipo_seguimiento">
                    <span>Tipo de seguimiento</span>
                    <input name="tipo_seguimiento" type="text" className='input-event'/>
                </label>
                <label htmlFor="categoria">
                    <span>Categoria</span>
                    <input name="categoria" type="text" className='input-event'/>
                </label>
                <label htmlFor="imagen">
                    <span>Imagen URL</span>
                    <input name="imagen" type="text" className='input-event'/>
                </label>
                <label htmlFor="enlace">
                    <span>Enlace</span>
                    <input name="enlace" type="text" className='input-event'/>
                </label>
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <label htmlFor="descripcion">
                    <span>Descripcion</span>
                    <textarea name="descripcion" type="text" className='input-event'/>
                </label>
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <label htmlFor="observaciones_recomendaciones">
                    <span>Observaciones/Recomendaciones</span>
                    <textarea name="observaciones_recomendaciones" type="text" className='input-event'/>
                </label>
            </div>
            <button type="submit" className='enviar-event' onClick={submitForm}>
                Enviar
            </button>
        </form>
        <div class="px-3 py-4 flex justify-center overflow-x-auto">
            <table class="w-full text-base bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">Descripción</th>
                    <th className="text-left p-3 px-5">Fecha</th>
                    <th className="text-left p-3 px-5">tipo de seguimiento</th>
                    <th className="text-left p-3 px-5">Imagen</th>
                    <th className="text-left p-3 px-5">Observaciones/recomendaciones</th>
                    <th className="text-left p-3 px-5">enlace</th>
                </tr>
                {events.map((tracing) => {
                return (<RowTracing 
                    key={tracing._id}
                    fecha={tracing.fecha}
                    tipo_seguimiento={tracing.tipo_seguimiento}
                    descripcion={tracing.descripcion}
                    imagen={tracing.imagen}
                    observaciones_recomendaciones={tracing.observaciones_recomendaciones}
                    enlace={tracing.enlace}
                    />);
                })}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default seguimientos