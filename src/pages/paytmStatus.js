import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Success = () => {
  let id = useParams();

  const [values, setValues] = useState({
    success: false,
    error: false,
  });
  const { success, error } = values;
  const statusdata = async () => {
    const res = await axios.get(`http://localhost:4000/status`);
    // console.log(res.data[0]);
    var { TXNID, STATUS, ORDERID } = res.data[0];
    // / if (ORDERID === id) {

    if (STATUS === "TXN_SUCCESS") {
      setValues({ ...values, success: true, error: false });
    }

    // } else {
    //   setValues({
    //     ...values,
    //     success: false,
    //     error: "Payment Failed",
    //   });
    // }
  };
  useEffect(() => {
    statusdata();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-80 w-80 bg-white rounded-full m-auto bg-opacity-20 shadow-card1 border-opacity-50 drop-shadow-2xl ">
        {success && (
          <h1 className="font-Raleway text-center pt-16 text-2xl text-green-500 font-medium">
            Payment Successfully !
          </h1>
        )}
        {error && (
          <h1 className="font-Raleway text-center pt-16 text-2xl text-green-500 font-medium">
            {error}
          </h1>
        )}
        <p className="font-Raleway text-center mt-12 text-black text-base mx-2">
          Transaction Id:
        </p>
      </div>
    </div>
  );
};

export default Success;
