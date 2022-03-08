import React from "react";


const RowEventsR = (props) => {
  const { description } = props;
  const { status } = props;
  const { initial_date } = props;
  const { finish_date } = props;
  const { influence_zone } = props;
  const { priority } = props;
  const { clasification } = props;
  const { url } = props;

  return (
    <tr className="row-table-design">
      <td className="p-3 px-5">{description}</td>
      <td className="p-3 px-5">{status}</td>
      <td className="p-3 px-5">{influence_zone}</td>
      <td className="p-3 px-5">{priority}</td>
      <td className="p-3 px-5">{clasification}</td>
      <td className="p-3 px-5">{url}</td>
      <td className="p-3 px-5">{initial_date}</td>
      <td className="p-3 px-5">{finish_date}</td>
    </tr>
  );
};

export default RowEventsR;