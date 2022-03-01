/* eslint-disable react-hooks/rules-of-hooks */
import { MapContainer, Marker, TileLayer, Popup} from 'react-leaflet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/globals.css'

const mapageneral = () => {

  const [events, setEvents] = useState([]);

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


  return (
    <div>
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
  );
};

export default mapageneral;
