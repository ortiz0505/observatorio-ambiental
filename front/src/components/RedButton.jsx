import React from "react";

const RedButton = (props) => {
  const { text } = props;
  return (
    <button
      type="button"
      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default RedButton;
