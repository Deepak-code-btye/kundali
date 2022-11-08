import React, { useState, useEffect } from "react";
import axios from "axios";

const Success = () => {
  const [values, setValues] = useState({
    success: false,
    error: false,
  });
  const { success, error } = values;
  const statusdata = async () => {
    // const res = await axios.get("http://localhost:4000/statusdata/:id");
    // console.log(res.data);
  };
  useEffect(() => {
    statusdata();
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-80 w-80 bg-white rounded-full m-auto bg-opacity-20 shadow-card1 border-opacity-50 drop-shadow-2xl ">
        <h1 className="font-Raleway text-center pt-16 text-2xl text-green-500 font-medium">
          Payment Successfull !
        </h1>
        <p className="font-Raleway text-center mt-12 text-black text-base mx-2">
          Transaction Id:-12335dsafas6f55542
        </p>
      </div>
    </div>
  );
};

export default Success;
