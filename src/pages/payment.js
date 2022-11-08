import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import Choose from "../components/Choose";

import { useForm } from "react-hook-form";
import { paymentdata } from "../utils";
import { useStateValue } from "../context";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  var navigate = useNavigate();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [{ basket }, dispatch] = useStateValue();
  const amount = basket[0];
  console.log(amount);
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    setError,
    setFocus,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    paymentdata(data);
  };
  return (
    <div>
      <Header
        username={user.name}
        emailId={user.email}
        onClick={() => logout({ returnTo: window.location.origin })}
        title="Logout"
      />
      <div className="mx-auto px-6 py-5">
        <h1 className="font-Raleway text-black text-xl text-center ">
          welcome to Pytam Account
        </h1>
        <hr className=" mx-auto bg-pink-300 drop-shadow-md bg-opacity-50 mt-2 rounded-md py-[2px] mb-5" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-5/6 m-auto flex flex-col justify-center"
      >
        <label
          htmlFor=""
          className="text-sm text-black font-Raleway flex flex-col gap-y-2 mt-3"
        >
          {/* <span className="font-Raleway pl-2">Amount</span> */}
          <input
            type="hidden"
            required
            className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
            name="amount"
            value={amount}
            placeholder="Enter the amount"
            {...register("amount", { required: true })}
          />
        </label>

        <label
          htmlFor=""
          className="flex flex-col gap-y-2 mt-3 text-black text-sm font-Raleway"
        >
          <span className="font-Raleway pl-2">Phone Number</span>
          <input
            type="number"
            onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
            className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
            name="mobile_no"
            placeholder="Enter the Phone"
            {...register("mobile_no")}
          />
        </label>

        <button
          type="Submit"
          className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment;
