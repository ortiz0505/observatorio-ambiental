import React, { useEffect, useState } from "react";
import useFormData from "../hooks/useFormData";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditarEvento = () => {
  const { form, formData, updateFormData } = useFormData();
  const { isAuthenticated } = useAuth0();
  const params = useParams();

  const [event, setEvent] = useState({});

  useEffect(() => {
    const eventData = async () => {
      const options = {
        method: "get",
        url: `http://localhost:4000/evento/${params.id}`,
      };
      const res = await axios.request(options);
      setEvent(res.data);
    };
    eventData();
  }, [params.id]);

  const submitForm = async (e) => {
    e.preventDefault();
    const datosEditados = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== event[key]) {
        datosEditados[key] = formData[key];
      }
    });

    const options = {
      method: "patch",
      url: `http://localhost:4000/evento/${params.id}`,
      headers: { "Content-Type": "application/json" },
      data: datosEditados,
    };
    await axios.request(options);
    window.location.href = "/funcionario/rfuncionario";
    console.log(datosEditados);
  };
  return (
    <div className="divppl">
      {isAuthenticated ? (
        <div className='forms'>
          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={submitForm}
            className="w-full max-w-lg"
          >
            <label htmlFor="imagen" className="span-form-event">
              <span className="labelsppl">Imagen</span>
              <input
                name="imagen"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.imagen}
                required
              />
            </label>
            <label htmlFor="descripcion" className="span-form-event">
              <span className="labelsppl">Descripción</span>
              <textarea
                name="descripcion"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.descripcion}
                required
              />
            </label>
            <label htmlFor="zona_influencia" className="span-form-event">
              <span className="labelsppl">Zona de influencia</span>
              <input
                name="zona_influencia"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.zona_influencia}
                required
              />
            </label>
            <label htmlFor="ID_reportero" className="span-form-event">
              <span className="labelsppl">ID_reportero</span>
              <input
                name="ID_reportero"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.ID_reportero}
                required
              />
            </label>
            <label htmlFor="prioridad" className="span-form-event">
              <span className="labelsppl">Prioridad</span>
              <input
                name="prioridad"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.prioridad}
                required
              />
            </label>
            <label htmlFor="clasificacion" className="span-form-event">
              <span className="labelsppl">Clasificación</span>
              <input
                name="clasificacion"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.clasificacion}
                required
              />
            </label>
            <label htmlFor="enlace" className="span-form-event">
              <span className="labelsppl">Enlace</span>
              <input
                name="enlace"
                type="text"
                className="inputs-text-ppl"
                defaultValue={event.enlace}
                required
              />
            </label>
            <div className="flex justify-center items-center">
              <button type="submit" className="buttonsppl">
                Enviar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Tienes que autenticarte para ingresar aqui</div>
      )}
    </div>
  );
};

export default EditarEvento;
