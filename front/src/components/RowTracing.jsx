import React from "react";

const RowTracing = (props) => {
  const { fecha } = props;
  const { tipo_seguimiento } = props;
  const { descripcion } = props;
  const { imagen } = props;
  const { observaciones_recomendaciones } = props;
  const { enlace } = props;
  
  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{descripcion}</td>
      <td className="p-3 px-5">{fecha}</td>
      <td className="p-3 px-5">{tipo_seguimiento}</td>
      <td className="p-3 px-5">{imagen}</td>
      <td className="p-3 px-5">{observaciones_recomendaciones}</td>
      <td className="p-3 px-5">{enlace}</td>
    </tr>
  );
};

export default RowTracing;