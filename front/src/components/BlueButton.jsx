import axios from "axios";
import React from "react";

const BlueButton = (props) => {
  const { text } = props;
  const { _id } = props;

  const updateData = async ()=>{
    const options = {
      method: "put",
      url: "http://localhost:4000/evento",
      data: {_id}
    };
    await axios.request(options);
    window.location.reload(true);
  }

  return (
    <button
      type="button"
      className="mr-3 text-sm bg-[#1b7a39] hover:bg-[#1b5b39] text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      onClick={updateData}
    >
      {text}
    </button>
  );
};

export default BlueButton;
