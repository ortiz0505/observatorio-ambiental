import useFormData from "../hooks/useFormData";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CitiesAnt from "../components/cityselect";
import { Link } from "react-router-dom";

const primeravezreport = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isAuthenticated } = useAuth0();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { form, formData, updateFormData } = useFormData();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const submitForm = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "http://localhost:4000/reportero",
      headers: { "Content-Type": "application/json" },
      data: formData,
    };
    await axios.request(options);
  };

  return (
    <div className="divppl">
      {isAuthenticated ? (
        <div className="forms">
          <form
            className="w-full max-w-lg"
            ref={form}
            onChange={updateFormData}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="labelsppl" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="inputs-text-ppl"
                  id="grid-first-name"
                  name="nombre"
                  type="text"
                  value={user.name}
                  readonly
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="labelsppl" htmlFor="correo">
                  Correo
                </label>
                <input
                  className="inputs-text-ppl"
                  id="grid-mail"
                  name="correo"
                  type="email"
                  value={user.email}
                  readonly
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <CitiesAnt className="px-3" />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="labelsppl" htmlFor="descripcion">
                  Motivo por el cual quiere ser reportero
                </label>
                <textarea
                  className="appearance-none block w-full resize-none bg-gray-200 text-gray-700 border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-motivo"
                  name="descripcion"
                  type="text"
                  placeholder="Escribe aquí tu motivo"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <label className="w-2/3 block text-green-900 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Aceptar terminos y condiciones</span>
              </label>
            </div>
            <div className="flex tems-center">
              <div className="w-1/3"></div>
              <div className="w-2/3">
                <Link to='/'>
                  <button
                    type="submit"
                    onClick={submitForm}
                    className="buttonsppl"
                  >
                    Enviar registro
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>te tienes que autenticar primero</div>
      )}
    </div>
  );
};

export default primeravezreport;
