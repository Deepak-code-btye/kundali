import React, { useState } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import Choose from "../components/Choose";
import axios from "axios";
import { useForm } from "react-hook-form";
import { paymentdata } from "../utils";
import { type } from "@testing-library/user-event/dist/type";
import { useStateValue } from "../context";
import { useNavigate } from "react-router-dom";

const Choosepayment = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  var navigate = useNavigate();
  const Data = [
    {
      title: "PDF File",
      amount: 1000,
    },
    {
      title: "Physical File",
      amount: 2500,
    },
  ];
  const [state, dispatch] = useStateValue();
  const [isSelected, setisSelected] = useState(0);
  const { title, amount } = Data[isSelected];
  const store = { title, amount };

  const onSubmit = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: store.amount,
    });
    navigate("/payment");
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
          Choose Kundali Types
        </h1>
        <hr className=" mx-auto bg-pink-300 drop-shadow-md bg-opacity-50 mt-2 rounded-md py-[2px] mb-5" />
      </div>

      {Data.map((value, index) => {
        const { title, amount } = value;
        return (
          <Choose
            key={index}
            title={title}
            amount={amount}
            // phone={phone}
            selected={isSelected === index}
            onChange={() => setisSelected(index)}
          />
        );
      })}
      <div className="pt-12 flex justify-center">
        <button
          className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
          type="submit"
          onClick={onSubmit}
        >
          Next
        </button>
      </div>
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-5/6 m-auto flex flex-col justify-center"
      >
        <label
          htmlFor=""
          className="text-sm text-black font-Raleway flex flex-col gap-y-2 mt-3"
        >
          <span className="font-Raleway pl-2">Amount</span>
          <input
            type="text"
            required
            className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
            name="amount"
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
      </form> */}

      {/* <button
        className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
        type="submit"
        onClick={handleSubmit}
      >
        Next
      </button> */}
    </div>
  );
};

export default Choosepayment;
