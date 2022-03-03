/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import RowTableR from "../components/RowTableR";
import { useAuth0 } from "@auth0/auth0-react";

const reportesr = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();
    const [events, setEvents] = useState([]);
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
    <div className="divppl">
        {isAuthenticated ? (
            <div class="form-design">
            <div class="p-4 flex">
                <h1 class="text-3xl">
                    Mis reportes
                </h1>
            </div>
            <div class="div-tables">
                <table class="table-design">
                    <tbody>
                        <tr class="border-b">
                            <th class="text-left p-3 px-5">Descripcion</th>
                            <th class="text-left p-3 px-5">tipo de seguimiento</th>
                            <th class="text-left p-3 px-5">observaciones/recomendaciones</th>
                        </tr>
                        {events.map((tracing) => {
                        return (<RowTableR 
                            key={tracing._id}
                            descripcion={tracing.descripcion}
                            tipo_seguimiento={tracing.tipo_seguimiento}
                            observaciones_recomendaciones={tracing.observaciones_recomendaciones}
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

export default reportesr;
