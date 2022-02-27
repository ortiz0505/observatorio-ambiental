import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const funcionario = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

    return (
        
        <div className='grid place-items-center my-20'>
           {isAuthenticated ? (
             <div>
               <div>Hola, Usuario</div>
                <div className='grid place-items-center my-20'>
                <Link to='/funcionario/solicitudesr'>
                  <div>
                      <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Solicitud de Reportes
                      </button>
                  </div>
                </Link>
                <Link to='/funcionario/rfuncionario'>
                  <div>
                      <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ver reportes
                      </button>
                  </div>
                </Link>
                <Link to='/funcionario/gestiondereporteros'>
                  <div>
                      <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Gestion de reporteros
                      </button>
                  </div>
                </Link>
                </div>
            </div>
        ) : (
            <div>Tienes que autenticarte para ingresar aqui</div>
        )}
        </div>
    );
};

export default funcionario;