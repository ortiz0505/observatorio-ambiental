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
    console.log(datosEditados);
  };
  return (
    <div className="divppl">
      {isAuthenticated ? (
        <form
          ref={form}
          onChange={updateFormData}
          className="grid grid-cols-1 gap-4"
        >
          <label htmlFor="imagen" className="span-form-event">
            <span>Imagen</span>
            <input
              name="imagen"
              type="text"
              className="input-event"
              defaultValue={event.imagen}
            />
          </label>
          <label htmlFor="descripcion" className="span-form-event">
            <span>Descripcion</span>
            <textarea
              name="descripcion"
              type="text"
              className="input-event"
              defaultValue={event.descripcion}
            />
          </label>
          <label htmlFor="zona_influencia" className="span-form-event">
            <span>Zona_influencia</span>
            <input
              name="zona_influencia"
              type="text"
              className="input-event"
              defaultValue={event.zona_influencia}
            />
          </label>
          <label htmlFor="ID_reportero" className="span-form-event">
            <span>ID_reportero</span>
            <input
              name="ID_reportero"
              type="text"
              className="input-event"
              defaultValue={event.ID_reportero}
            />
          </label>
          <label htmlFor="prioridad" className="span-form-event">
            <span>Prioridad</span>
            <input
              name="prioridad"
              type="text"
              className="input-event"
              defaultValue={event.prioridad}
            />
          </label>
          <label htmlFor="clasificacion" className="span-form-event">
            <span>Clasificacion</span>
            <input
              name="clasificacion"
              type="text"
              className="input-event"
              defaultValue={event.clasificacion}
            />
          </label>
          <label htmlFor="enlace" className="span-form-event">
            <span>Enlace</span>
            <input
              name="enlace"
              type="text"
              className="input-event"
              defaultValue={event.enlace}
            />
          </label>
          <Link className="flex justify-center items-center" to="/reportero">
            <button type="submit" className="enviar-event" onClick={submitForm}>
              Enviar
            </button>
          </Link>
        </form>
      ) : (
        <div>Tienes que autenticarte para ingresar aqui</div>
      )}
    </div>
  );
};

export default EditarEvento;
