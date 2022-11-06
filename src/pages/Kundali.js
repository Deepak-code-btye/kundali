import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
const Kundali = () => {
  return (
    <>
      <Header />
      <div className="py-5">
        <div className="mt-12">
          <h1 className="text-black text-2xl text-center font-Raleway ">
            Choose Kundali Types
          </h1>
          <hr className="w-5/6 m-auto bg-pink-300 drop-shadow-md bg-opacity-50 mt-2 rounded-md py-[2px]" />
        </div>
        <div className="h-40 w-1/2 m-auto mt-8 bg-opacity-25 border border-pink-300"></div>
        <p className="flex justify-center gap-x-5 font-Raleway text-center mt-2 text-black text-base font-light">
          <span>Rs.1000 /-</span>
          <span>Only Pdf Format</span>
        </p>
        <div className="h-40 w-1/2 m-auto mt-8 bg-opacity-25 border border-pink-300"></div>
        <p className="flex justify-center gap-x-5 font-Raleway text-center mt-2 text-black text-base font-light ">
          <span>Rs.2000 /-</span>
          <span>Physical Format</span>
        </p>
      </div>
      <Button linkHref="/" name="NEXT" />
    </>
  );
};

export default Kundali;
