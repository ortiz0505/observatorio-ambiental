import React from "react";

const BlueButton = (props) => {

    const { text } = props;
  return (
    <button
      type="button"
      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default BlueButton;
