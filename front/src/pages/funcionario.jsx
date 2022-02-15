import React from 'react';
import {Link} from 'react-router-dom';

const funcionario = () => {
    return (
        <div className='grid place-items-center my-20'>
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
    );
};

export default funcionario;
