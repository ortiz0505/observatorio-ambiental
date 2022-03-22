/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import RowTable from "../components/RowTable";
import { useAuth0 } from "@auth0/auth0-react";

const solicitudesreportes = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

    const [events, setEvents] = useState([]);

    useEffect(() => {
      const requestEvent = async () => {
        const options = {
          method: "get",
          url: "http://localhost:4000/solicitudesr",
        };
        const response = await axios.request(options);
        setEvents(response.data);
      };
      requestEvent();
    }, []);

  return (
    <div className="divppl">
      {isAuthenticated ? (
          <div className="text-green-900 bg-gray-200 w-full">
          <div className="p-4 flex">
            <h1 className="text-3xl">Solicitudes</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md text-white bg-green-600 shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Descripción</th>
                  <th className="text-left p-3 px-5">Zona de influencia</th>
                  <th className="text-left p-3 px-5">Fecha</th>
                  <th className="text-left p-3 px-5">Prioridad</th>
                  <th className="text-left p-3 px-5">Aprobar/No aprobar</th>
                </tr>
                {
                  events.map((event)=>{
                    return (
                      <RowTable
                        key={event._id}
                        description={event.descripcion}
                        influence_zone={event.zona_influencia}
                        date={event.fecha_inicio}
                        priority={event.prioridad}
                        _id={event._id}
                        />
                    )
                  })
                }
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

export default solicitudesreportes;
