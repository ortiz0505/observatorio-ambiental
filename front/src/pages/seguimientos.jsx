/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import useFormData from "../hooks/useFormData";
import RowTracing from "../components/RowTracing";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const seguimientos = () => {

    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
      setShowOptions(!showOptions);   
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

    const { form, formData, updateFormData } = useFormData();
    const params = useParams();
    const submitForm = async (e) => {
      e.preventDefault();
      const options = {
        method: "POST",
        url: "http://localhost:4000/seguimiento",
        headers: { "Content-Type": "application/json" },
        data: formData,
      };
      await axios.request(options);
      window.location.reload(true);
    };

    const [events, setEvents] = useState([]);
    useEffect(() => {
      const eventsData = async () => {
        const options = {
          method: "get",
          url: `http://localhost:4000/seguimiento/${params.id}`,
        };
        const response = await axios.request(options);
        setEvents(response.data);
      };
      eventsData();
    }, [params.id]);

  return (
    <div className="divppl">
      {isAuthenticated ? (
        <div className="form-design">
        {showOptions && (
          <form ref={form} onChange={updateFormData} onSubmit={submitForm} className="p-4">
            {/*<div className="p-4 flex">
                    <h1 className="text-3xl">ID_ evento</h1>
                </div>*/}
            <label htmlFor="ID_evento">
              <span className="hidden">ID evento</span>
              <input name="ID_evento" type="text" className="hidden" value={params.id} readOnly/>
            </label>
            <label htmlFor="ID_funcionario">
              <span className="labelsppl">ID funcionario</span>
              <input name="ID_funcionario" type="text" className="inputs-text-ppl" required/>
            </label>
            <div className="grid grid-cols-4 gap-4">
              <label htmlFor='tipo_seguimiento'>
                <span className="labelsppl">Tipo de seguimiento</span>
                <select className="inputs-text-ppl" name='tipo_seguimiento' type='text' required>
                  <option value="">Selecciona una opción...</option>   
                  <option value="CONTROL">Control</option>
                  <option value="CIERRE">Cierre</option>
                  <option value="SOLUCIÓN">Solución</option>  
                </select>
              </label>
              <label htmlFor='categoria'>
                <span className="labelsppl">Categoria</span>
                <select className="inputs-text-ppl" name='categoria' type='text' required>
                  <option value="">Selecciona una opción...</option>   
                  <option value="JURIDICO">Jurídico</option>
                  <option value="AMBIENTAL">Ambiental</option>
                  <option value="SOCIAL">Social</option>  
                </select>
              </label>
              <label htmlFor="imagen">
                <span className="labelsppl">Imagen URL</span>
                <input name="imagen" type="text" className="inputs-text-ppl" required/>
              </label>
              <label htmlFor="enlace">
                <span className="labelsppl">Enlace</span>
                <input name="enlace" type="text" className="inputs-text-ppl" required/>
              </label>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="descripcion">
                <span className="labelsppl">Descripcion</span>
                <textarea name="descripcion" type="text" className="inputs-text-ppl" required/>
              </label>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="observaciones_recomendaciones">
                <span className="labelsppl">Observaciones/Recomendaciones</span>
                <textarea
                  name="observaciones_recomendaciones"
                  type="text"
                  className="inputs-text-ppl"
                  required
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="buttonsppl">
                Enviar
              </button> 
            </div>
          </form>
        )}

        <button onClick={handleClick} type="input" className="w-full buttonsppl">
              v
        </button> 
        <div className="p-4 flex">
            <h1 className="text-3xl">Seguimientos</h1>
        </div>
        <div className="div-tables">
          <table className="table-design">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Descripción</th>
                <th className="text-left p-3 px-5">Fecha</th>
                <th className="text-left p-3 px-5">tipo de seguimiento</th>
                <th className="text-left p-3 px-5">Imagen</th>
                <th className="text-left p-3 px-5">
                  Observaciones/recomendaciones
                </th>
                <th className="text-left p-3 px-5">enlace</th>
              </tr>
              {events.map((tracing) => {
                return (
                  <RowTracing
                    key={tracing._id}
                    fecha={tracing.fecha}
                    tipo_seguimiento={tracing.tipo_seguimiento}
                    descripcion={tracing.descripcion}
                    imagen={tracing.imagen}
                    observaciones_recomendaciones={
                      tracing.observaciones_recomendaciones
                    }
                    enlace={tracing.enlace}
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

export default seguimientos;
