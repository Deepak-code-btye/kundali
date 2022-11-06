import React from "react";

const Header = ({
  username,
  emailId,
  type,
  onClick,
  title,
  className = "",
}) => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="w-11/12 flex flex-col items-center rounded-3xl drop-shadow-3xl py-2 shadow-card1 bg-opacity-25 pb-5 ">
        <h1 className="text-2xl font-Raleway font-semibold py-2 text-black">
          {username ? username : "Hi Sachin !"}
        </h1>
        <span className="font-Raleway font-light text-base text-black">
          {emailId ? emailId : " sachin@gmail.com"}
        </span>
        {title && <button
          className={`${className
            ? className
            : ` bg-pink-300 bg-opacity-25 border-2 border-pink-400 border-opacity-50 rounded-lg mt-3 m-auto w-1/3 text-center py-2 cursor-pointer hover:bg-orange-600 hover:text-white font-Raleway`
            }`}
          type={type}
          onClick={onClick}
        >
          {title && title}
        </button>}
      </div>
    </div>
  );
};

export default Header;
