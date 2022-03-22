/* eslint-disable react-hooks/rules-of-hooks */
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";

const mapageneral = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsData = async () => {
      const options = {
        method: "get",
        url: "http://localhost:4000/evento",
        headers: { "Content-Type": "application/json" },
      };

      const respuesta = await axios.request(options);
      setEvents(respuesta.data);
      console.log(respuesta.data);
    };
    eventsData();
  }, []);

  return (
    <div>
      <MapContainer
        center={[6.24, -75.58]}
        zoom={15}
        scrollWheelZoom={true}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) =>
          event.estado_evento ? (
            <Marker key={event._id} position={[event.latitud, event.longitud]}>
              <Popup className="request-popup">
                <div className="popupContent">
                  <div className="flex justify-center">
                  <img
                    src="https://files.rcnradio.com/public/2020-04/derrumbe_sonson_narino_0.jpeg"
                    alt="event"
                  />
                  </div>
                  <div className='popupHead'>
                  Clasificación: {event.clasificacion}
                  </div>
                  <span className='popupText'>
                    Descripción: {event.descripcion}
                  </span>
                  <div className="okText">
                    Fecha de inicio: {(event.fecha_inicio)}
                  </div>
                  <div className="okText">
                    Fecha estimada de cierre: {(event.fecha_fin)}
                  </div>
                </div>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
};

export default mapageneral;
