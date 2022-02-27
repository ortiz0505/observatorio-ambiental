/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from 'react';
import useFormData from "../hooks/useFormData";
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'; 
import AddMarket from "../components/AddMarket";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const creareventos = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth0();
  const [events, setEvents] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

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

  const { form, formData, updateFormData } = useFormData();

  const submitForm = async () => {
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
      {isAuthenticated ? (
        <div>
        <div className="fixed h-screen w-1/5 p-5">
          <form
            ref={form}
            onChange={updateFormData}
            className="grid grid-cols-1 gap-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fillRule="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <label htmlFor="latitud" className='span-form-event hidden'>
              <span className="hidden">Latitud</span>
              <input name="latitud" type="text" className='input-event hidden' value={position.latitude} readOnly/>
            </label>
            <label htmlFor="longitud" className='span-form-event hidden'>
              <span className="hidden">Longitud</span>
              <input name="longitud" type="text" className='input-event hidden' value={position.longitude} readOnly/>
            </label>
            <label htmlFor="imagen" className='span-form-event'>
              <span>Imagen</span>
              <input name="imagen" type="text" className='input-event'/>
            </label>
            <label htmlFor="fecha_fin" className='span-form-event'>
              <span>Fecha_fin</span>
              <input name="fecha_fin" type="date" className='input-event'/>
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
            <Link to='/reportero'>
            <button type="submit" className='enviar-event' onClick={submitForm}>
              Enviar
            </button>
            </Link>
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
            <AddMarket position={position} setPosition={setPosition}/>
          </MapContainer>
        </div>
      </div>
        ) : (
          <div>Tienes que autenticarte para ingresar aqui</div>
      )}
    </div>
    
  );
};

export default creareventos;
