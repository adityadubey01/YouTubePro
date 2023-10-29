import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 ml-5 mt-5 mr-10 bg-gray-300 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
