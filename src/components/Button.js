import React from "react";

const Button = (props) => {
  const { type, name, className = "", onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        className
          ? className
          : ` bg-pink-300 bg-opacity-25 border-2 border-pink-400 border-opacity-50 rounded-lg m-auto w-1/3 text-center py-2 cursor-pointer font-Raleway text-black text-base flex justify-center `
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
