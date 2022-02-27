import axios from "axios";
import React from "react";

const RedButton = (props) => {
  const { text } = props;
  const { _id } = props;

  const deleteData = async ()=>{
    const options = {
      method: "delete",
      url: "http://localhost:4000/evento",
      data: {_id}
    };
    await axios.request(options);
    window.location.reload(true);
  }

  return (
    <button
      type="button"
      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      onClick={deleteData}
    >
      {text}
    </button>
  );
};

export default RedButton;
