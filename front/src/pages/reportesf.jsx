/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import RowEvents from "../components/RowEvents";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from '../components/Navbar';

const reportesf = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();
    const [events, setEvents] = useState([]);
    useEffect(() => {
      const eventsData = async () => {
        const options = { 
          method: "get",
          url: "http://localhost:4000/evento",
        };
        const response = await axios.request(options);
        setEvents(response.data);
      };
      eventsData();
    }, []);

  return (
    <div className="divppl">
      <Navbar />
      {isAuthenticated ? (
        <div className="text-gray-900 bg-gray-200 w-full">
        <div className="p-4 flex">
          <h1 className="text-3xl">Reportes</h1>
        </div>
        <div className="px-3 py-4 flex justify-center overflow-x-auto">
          <table className="w-full text-base bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Descripción</th>
                <th className="text-left p-3 px-5">Estado</th>
                <th className="text-left p-3 px-5">Zona influencia</th>
                <th className="text-left p-3 px-5">Prioridad</th>
                <th className="text-left p-3 px-5">Clasificación</th>
                <th className="text-left p-3 px-5">enlace</th>
                <th className="text-left p-3 px-5">Fecha inicio</th>
                <th className="text-left p-3 px-5">Fecha fin</th>
              </tr>
              {events.map((event) => {
                return (<RowEvents 
                  key={event._id}
                  id={event._id}
                  description={event.descripcion}
                  status={event.estado_evento ? 'abierto' : 'cerrado'}
                  initial_date={event.fecha_inicio}
                  finish_date={event.fecha_fin}
                  influence_zone={event.zona_influencia}
                  priority={event.prioridad}
                  clasification={event.clasificacion}
                  url={event.enlace}
                   />);
              })}
            </tbody>
          </table>
        </div>
      </div>
        ) : (
          <div>Tienes que autenticarte para ingresar aqui</div>
      )}
    </div>
    
  );
};

export default reportesf;
