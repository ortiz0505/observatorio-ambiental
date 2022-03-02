import React from "react";
import { Link } from "react-router-dom";

const RowEvents = (props) => {
  const { id } = props;
  const { description } = props;
  const { status } = props;
  const { initial_date } = props;
  const { finish_date } = props;
  const { influence_zone } = props;
  const { priority } = props;
  const { clasification } = props;
  const { url } = props;
  return (
    <tr className="border-b inputsppls">
      <td className="p-3 px-5">{description}</td>
      <td className="p-3 px-5">{status}</td>
      <td className="p-3 px-5">{influence_zone}</td>
      <td className="p-3 px-5">{priority}</td>
      <td className="p-3 px-5">{clasification}</td>
      <td className="p-3 px-5">{url}</td>
      <td className="p-3 px-5">{initial_date}</td>
      <td className="p-3 px-5">{finish_date}</td>
      <td className="p-3 px-5">
        <div className='flex flex-row'>
          <Link to={`/funcionario/seguimiento/${id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fillRule="currentColor">
              <title id="title" lang="en">Hacer seguimiento</title>
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link to={`/funcionario/editar/${id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fillRule="currentColor">
              <title id="title" lang="en">Editar reporte</title>
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default RowEvents;
