/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import RowTableR from "../components/RowTableR";

const reportesr = () => {
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
    <div class="text-gray-900 bg-gray-200">
        <div class="p-4 flex">
            <h1 class="text-3xl">
                Mis reportes
            </h1>
        </div>
        <div class="px-3 py-4 flex justify-center">
            <table class="w-full text-md bg-white shadow-md rounded mb-4">
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
  );
};

export default reportesr;
