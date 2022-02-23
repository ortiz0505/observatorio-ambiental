import React from "react";

const RowEvents = (props) => {
  const { description } = props;
  const { status } = props;
  const { initial_date } = props;
  const { finish_date } = props;
  const { influence_zone } = props;
  const { priority } = props;
  const { clasification } = props;
  const { url } = props;
  return (
    <tr class="border-b hover:bg-orange-100 bg-gray-100">
      <td class="p-3 px-5">{description}</td>
      <td class="p-3 px-5">{status}</td>
      <td class="p-3 px-5">{influence_zone}</td>
      <td class="p-3 px-5">{priority}</td>
      <td class="p-3 px-5">{clasification}</td>
      <td class="p-3 px-5">{url}</td>
      <td class="p-3 px-5">{initial_date}</td>
      <td class="p-3 px-5">{finish_date}</td>
      <td class="p-3 px-5">I C O N O S</td>
    </tr>
  );
};

export default RowEvents;
