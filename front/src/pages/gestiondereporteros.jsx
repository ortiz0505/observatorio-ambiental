import React from 'react';

const gestiondereporteros = () => {
  return (
      <div className='grid place-items-center my-20'>
            <div>
                <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Reportar reportero
                </button>
            </div>
            <div>
                <button className="w-96 my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Eliminar sanción
                </button>
            </div>
      </div>
  );
};

export default gestiondereporteros;
