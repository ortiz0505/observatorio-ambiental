import axios from "axios";
import React, { useEffect, useState } from 'react';
import useFormData from "../hooks/useFormData";
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'; 

const creareventos = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [events, setEvents] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    const eventsData = async () =>{
      const options = {
        method: 'get',
        url: 'http://localhost:4000/evento',
        headers: {'Content-Type': 'application/json'},
      }

      const respuesta = await axios.request(options);
      setEvents(respuesta.data);
      console.log(respuesta.data)
    };
    eventsData();
  },[])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { form, formData, updateFormData } = useFormData();

  const submitForm = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:4000/evento",
      headers: { "Content-Type": "application/json" },
      data: formData,
    };
    await axios.request(options);
  };

  return (
    <div>
      <div className="fixed h-screen w-1/5 p-5">
        <form
          ref={form}
          onChange={updateFormData}
          className="grid grid-cols-1 gap-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <label htmlFor="latitud" className='span-form-event'>
            <span>Latitud</span>
            <input name="latitud" type="text" className='input-event'/>
          </label>
          <label htmlFor="longitud" className='span-form-event'>
            <span>Longitud</span>
            <input name="longitud" type="text" className='input-event'/>
          </label>
          <label htmlFor="imagen" className='span-form-event'>
            <span>Imagen</span>
            <input name="imagen" type="text" className='input-event'/>
          </label>
          <label htmlFor="fecha_fin" className='span-form-event'>
            <span>Fecha_fin</span>
            <input name="fecha_fin" type="text" className='input-event'/>
          </label>
          <label htmlFor="descripcion" className='span-form-event'>
            <span>Descripcion</span>
            <textarea name="descripcion" type="text" className='input-event'/>
          </label>
          <label htmlFor="zona_influencia" className='span-form-event'>
            <span>Zona_influencia</span>
            <input name="zona_influencia" type="text" className='input-event'/>
          </label>
          <label htmlFor="ID_reportero" className='span-form-event'>
            <span>ID_reportero</span>
            <input name="ID_reportero" type="text" className='input-event'/>
          </label>
          <label htmlFor="prioridad" className='span-form-event'>
            <span>Prioridad</span>
            <input name="prioridad" type="text" className='input-event'/>
          </label>
          <label htmlFor="clasificacion" className='span-form-event'>
            <span>Clasificacion</span>
            <input name="clasificacion" type="text" className='input-event'/>
          </label>
          <label htmlFor="enlace" className='span-form-event'>
            <span>Enlace</span>
            <input name="enlace" type="text" className='input-event'/>
          </label>
          <button type="submit" className='enviar-event' onClick={submitForm}>
            Enviar
          </button>
        </form>
      </div>
      <div className="ml-[20%] w-[80%] h-screen">
        <MapContainer center={[6.24, -75.58]} zoom={15} scrollWheelZoom={true} doubleClickZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            {
            events.map((event)=>(
              <Marker key={event._id} position={[event.latitud, event.longitud]}>
                <Popup>
                  {event.descripcion}
                </Popup>
              </Marker>
            ))
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default creareventos;
