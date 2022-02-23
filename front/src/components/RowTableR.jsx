import React from "react";

const RowTableR = (props) => {
  const { descripcion } = props;
  const { tipo_seguimiento } = props;
  const { observaciones_recomendaciones } = props;

  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{ descripcion }</td>
      <td className="p-3 px-5">{ tipo_seguimiento }</td>
      <td className="p-3 px-5">{ observaciones_recomendaciones }</td>
    </tr>
  );
};

export default RowTableR;