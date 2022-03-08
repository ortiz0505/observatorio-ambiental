/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from 'react';
import useFormData from "../hooks/useFormData";
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet'; 
import AddMarket from "../components/AddMarket";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Notauth from '../components/404';
import CitiesAnt from '../components/cityselect';

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
        <div className="fixed h-[90vh] w-1/5 p-5 overflow-x-scroll">
          <form
            ref={form}
            onChange={updateFormData}
            className="w-full max-w-lg"
          >
            <label htmlFor="latitud" className='hidden'>
              <span className="hidden">Latitud</span>
              <input name="latitud" type="text" className='hidden' value={position.latitude} readOnly/>
            </label>
            <label htmlFor="longitud" className='hidden'>
              <span className="hidden">Longitud</span>
              <input name="longitud" type="text" className='hidden' value={position.longitude} readOnly/>
            </label>
            <label htmlFor="imagen" className='w-full'>
              <span className="labelsppl">Imagen</span>
              <input name="imagen" type="text" className='inputs-text-ppl'/>
            </label>
            <label htmlFor="fecha_fin" className='w-full'>
              <span className="labelsppl">Fecha_fin</span>
              <input name="fecha_fin" type="date" className='inputs-text-ppl'/>
            </label>
            <label htmlFor="descripcion" className='w-full'>
              <span className="labelsppl">Descripcion</span>
              <textarea name="descripcion" type="text" className='inputs-text-ppl'/>
            </label>
            <CitiesAnt />
            <label htmlFor="ID_reportero" className='w-full'>
              <span className="labelsppl">ID_reportero</span>
              <input name="ID_reportero" type="text" className='inputs-text-ppl'/>
            </label>
            <label htmlFor='prioridad' className='w-full'>
              <span className="labelsppl">Prioridad</span>
              <select className="inputs-text-ppl" id="grid-zona"  name='prioridad' type='text' required>
                <option value="">Selecciona una opción...</option>   
                <option value="ALTA">Alta</option>
                <option value="MEDIA">Media</option>
                <option value="BAJA">Baja</option>  
              </select>
            </label>
            <label htmlFor='clasificacion' className='w-full'>
              <span className="labelsppl">Clasificacion</span>
              <select className="inputs-text-ppl" id="grid-zona"  name='clasificacion' type='text' required>
                <option value="">Selecciona una opción...</option>   
                <option value="DENUNCIA">Denuncia</option>
                <option value="FORMATIVO">Formativo</option>
                <option value="INFORMATIVO">Informativo</option>  
              </select>
            </label>
            <label htmlFor="enlace" className='w-full '>
              <span className="labelsppl">Enlace</span>
              <input name="enlace" type="text" className='inputs-text-ppl'/>
            </label>
            <Link className='flex justify-center items-center' to='/reportero'>
              <button type="submit" className='buttonsppl my-5' onClick={submitForm}>
                Enviar
              </button>
            </Link>
          </form>
        </div>
        <div className="ml-[20%] w-[80%] h-[90vh]">
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
          <Notauth />
      )}
    </div>
    
  );
};

export default creareventos;
