import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const SolicitudReporteros = () => {
  const { isAuthenticated } = useAuth0();
  const [reporters, setReporters] = useState([]);
  useEffect(() => {
    const findReporters = async () => {
      const options = {
        method: "get",
        url: "http://localhost:4000/reportero",
      };
      const res = await axios.request(options);
      setReporters(res.data);
      console.log(res.data)
    };
    findReporters();
  }, []);


  return (
    <div className="divppl">
      {isAuthenticated ? (
        <div className="form-design">
          <div className="p-4 flex">
            <h1 className="text-3xl">Lista de reporteros</h1>
          </div>
          <div className="div-tables flex-col">
            <table className="table-design">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Nombre</th>
                  <th className="text-left p-3 px-5">Correo</th>
                  <th className="text-left p-3 px-5">Descripcion</th>
                  <th className="text-left p-3 px-5">Zona de influencia</th>
                  <th className="text-left p-3 px-5">Estado</th>
                  <th className="text-left p-3 px-5">Motivo suspension</th>
                </tr>
                {reporters.map((reporter) => {
                  return (
                    <RowReporter
                      key={reporter._id}
                      nombre={reporter.nombre}
                      correo={reporter.correo}
                      descripcion={reporter.descripcion}
                      zona_influencia={reporter.zona_influencia}
                      estado={reporter.estado}
                      motivo_suspension={reporter.motivo_suspension}
                    />
                  );
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

const RowReporter = ({
  _id,
  nombre,
  correo,
  descripcion,
  zona_influencia,
  estado,
  motivo_suspension,
}) => {
  console.log(motivo_suspension)
  console.log(nombre)
  return (
    <tr className="row-table-design">
      <td className="p-3 px-5">{nombre}</td>
      <td className="p-3 px-5">{correo}</td>
      <td className="p-3 px-5">{descripcion}</td>
      <td className="p-3 px-5">{zona_influencia}</td>
      <td className="p-3 px-5">{estado ? 'Activado' : 'Desactivado'}</td>
      <td className="p-3 px-5">{motivo_suspension === '1' ? 'Sin suspencion' : motivo_suspension}</td>
    </tr>
  );
};

export default SolicitudReporteros;
