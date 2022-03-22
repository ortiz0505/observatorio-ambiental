/* eslint-disable react-hooks/rules-of-hooks */
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
    };
    findReporters();
  }, []);

  return (
    <div className="divppl">
      {isAuthenticated ? (
        <div className="form-design">
          <div className="p-4 flex">
            <h1 className="text-3xl">Solicitud de reporteros</h1>
          </div>
          <div className="div-tables flex-col">
            <table className="table-design">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Nombre</th>
                  <th className="text-left p-3 px-5">Correo</th>
                  <th className="text-left p-3 px-5">Descripción</th>
                  <th className="text-left p-3 px-5">Zona de influencia</th>
                  <th className="text-left p-3 px-5">Estado</th>
                  <th className="text-left p-3 px-5">Motivo suspensión</th>
                </tr>
                {reporters.map((reporter) => {
                  return (
                    reporter.estado_usuario === false?(
                      <RowReporter
                        key={reporter._id}
                        _id={reporter._id}
                        nombre={reporter.nombre}
                        correo={reporter.correo}
                        descripcion={reporter.descripcion}
                        zona_influencia={reporter.zona_influencia}
                        estado={reporter.estado_usuario}
                        motivo_suspension={reporter.motivo_suspension}
                      />
                    ) : null
                  );
                })}
              </tbody>
            </table>
            <div className="p-4 flex">
            <h1 className="text-3xl">Reporteros activos</h1>
          </div>
            <table className="table-design">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Nombre</th>
                  <th className="text-left p-3 px-5">Correo</th>
                  <th className="text-left p-3 px-5">Descripción</th>
                  <th className="text-left p-3 px-5">Zona de influencia</th>
                  <th className="text-left p-3 px-5">Estado</th>
                  <th className="text-left p-3 px-5">Motivo suspensión</th>
                </tr>
                {reporters.map((reporter) => {
                  return (
                    reporter.estado_usuario === true ?(
                      <RowReporter
                        key={reporter._id}
                        _id={reporter._id}
                        nombre={reporter.nombre}
                        correo={reporter.correo}
                        descripcion={reporter.descripcion}
                        zona_influencia={reporter.zona_influencia}
                        estado={reporter.estado_usuario}
                        motivo_suspension={reporter.motivo_suspension}
                      />
                    ) : null
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
  const [motivo, setMotivo] = useState();
  const agreeReporter = async (motivo) => {
    const options = {
      method: "put",
      url: `http://localhost:4000/reportero/${_id}`,
      data: { estado, motivo },
    };
    await axios.request(options);
    window.location.reload(true)
  };
  return (
    <tr className="row-table-design">
      <td className="p-3 px-5">{nombre}</td>
      <td className="p-3 px-5">{correo}</td>
      <td className="p-3 px-5">{descripcion}</td>
      <td className="p-3 px-5">{zona_influencia}</td>
      <td className="p-3 px-5">{estado ? "Activado" : "Desactivado"}</td>
      <td className="p-3 px-5">
        <input onChange={e=>setMotivo(e.target.value)} defaultValue={motivo_suspension === "1" ? "Sin suspencion" : motivo_suspension} />
      </td>

      <td className="p-3 px-5 flex">
        <button onClick={()=>agreeReporter(motivo)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-green-900" viewBox="0 0 20 20">
              <title id="title" lang="en">
                Cambiar estado
              </title>
              <path fullRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
        </button>
      </td>
    </tr>
  );
};

export default SolicitudReporteros;
