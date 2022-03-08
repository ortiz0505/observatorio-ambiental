import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Notauth from '../components/404';

const funcionario = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth0();

    return (
        <div className='divppl'>
           {isAuthenticated ? (
             <div>
                <div className='grid place-items-center my-20'>
                <Link to='/funcionario/solicitudesr'>
                  <div>
                      <button className="inputsppls">
                        Solicitud de Reportes
                      </button>
                  </div>
                </Link>
                <Link to='/funcionario/rfuncionario'>
                  <div>
                      <button className="inputsppls">
                        Ver reportes
                      </button>
                  </div>
                </Link>
                <Link to='/funcionario/graficas'>
                  <div>
                      <button className="inputsppls">
                        Graficas
                      </button>
                  </div>
                </Link>
                <Link to='/funcionario/gestiondereporteros'>
                  <div>
                      <button className="inputsppls">
                        Gestion de reporteros
                      </button>
                  </div>
                </Link>
                </div>
            </div>
        ) : (
            <Notauth />
        )}
        </div>
    );
};

export default funcionario;