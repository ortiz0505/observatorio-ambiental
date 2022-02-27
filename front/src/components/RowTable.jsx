import React from "react";
import BlueButton from "./BlueButton";
import RedButton from "./RedButton";

const RowTable = (props) => {
  const { description } = props;
  const { influence_zone } = props;
  const { date } = props;
  const { priority } = props;
  const { _id } = props;

  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5">{ description }</td>
      <td className="p-3 px-5">{ influence_zone }</td>
      <td className="p-3 px-5">{ date }</td>
      <td className="p-3 px-5">{ priority }</td>
      <td className="p-3 px-5 flex justify-start">
        <BlueButton text="Aprobar" _id={_id} />
        <RedButton text="No aprobar" _id={_id} />
      </td>
    </tr>
  );
};

export default RowTable;
