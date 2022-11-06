import React from "react";

const Choose = ({ title, amount, selected, onChange }) => {
  return (
    <div className="flex justify-center py-6">
      <div
        onClick={onChange}
        className={`${
          selected ? "bg-pink-600" : "bg-transparent"
        } w-72 cursor-pointer hover:bg-pink-300 hover:text-white flex flex-col items-center rounded-2xl drop-shadow-3xl pt-2 shadow-card1 bg-opacity-25`}
      >
        <h5 className="font-Raleway font-semibold py-5">{title}</h5>
        <p className="border border-t-yellow-50 border-b-transparent border-l-transparent border-r-transparent font-Raleway bg-opacity-25 py-2 w-full text-center">
          Rs. {amount}/- only
        </p>
      </div>
    </div>
  );
};

export default Choose;
