import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { getdata } from "../utils/index.js";
import { useAuth0 } from "@auth0/auth0-react";
import Choosepayment from "./choosepayment";
const UserDetails = () => {
  var navigate = useNavigate();
  const { loginWithRedirect, logout, user } = useAuth0();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    setError,
    setFocus,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    await getdata(data);
    navigate("/choose");
  };

  return (
    <div className="py-10 px-2">
      <Header
        username={user.name}
        emailId={user.email}
        onClick={() => logout({ returnTo: window.location.origin })}
        title="Logout"
      />
      <div className="px-5 py-5 mt-14 rounded-3xl shadow-3xl bg-opacity-25 max-w-[356px] mx-auto shadow-card1">
        <h1 className="text-black text-xl text-center ">Enter Your Details</h1>
        <hr className=" mx-auto bg-pink-300 drop-shadow-md bg-opacity-50 mt-2 rounded-md py-[2px] mb-5" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="max-w-[356px] flex flex-col"
        >
          <div className="flex flex-col gap-x-4 gap-y-4">
            <label
              htmlFor=""
              className="text-sm text-black font-Raleway flex flex-col gap-y-2"
            >
              <span className="font-Raleway pl-2">Name</span>
              <input
                type="text"
                className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                required
                name="full_name"
                placeholder="Enter Full Name"
                {...register("full_name", { required: true })}
              />
            </label>
            <label
              htmlFor=""
              className="text-sm text-black font-Raleway flex flex-col gap-y-2"
            >
              <span className="font-Raleway pl-2">Father's Name</span>
              <input
                type="text"
                className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                name="father_name"
                placeholder="Enter Mother Name"
                {...register("father_name", { required: true })}
              />
            </label>
            <label
              htmlFor=""
              className="text-sm text-black font-Raleway flex flex-col gap-y-2"
            >
              <span className="font-Raleway pl-2">Mother's Name</span>
              <input
                type="text"
                className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                name="mother_name"
                placeholder="Enter Mother Name"
                {...register("mother_name", { required: true })}
              />
            </label>
          </div>
          <div className="flex flex-col gap-x-4">
            <label
              htmlFor=""
              className="text-sm font-Raleway text-black flex flex-col gap-y-2 mt-3"
            >
              <span className="font-Raleway pl-2">Date of Birth</span>
              <input
                type="datetime-local"
                required
                className=" w-full px-3 rounded-3xl drop-shadow-3xl bg-opacity-25 border-b-pink-300 pl-4 py-2 font-Raleway outline-none text-black"
                name="birthday"
                {...register("birthday", { required: true })}
              />
            </label>
            <label
              htmlFor=""
              className="text-sm font-Raleway text-black mt-5 flex-col  gap-x-4 gap-y-1"
            >
              <p className="font-Raleway pl-2">Gender</p>
              <div className="flex gap-x-2 mt-2">
                <span className="font-Raleway pl-2">Male</span>
                <input
                  type="radio"
                  required
                  className="rounded-3xl drop-shadow-3xl bg-opacity-25 border border-b-pink-300 px-4 py-3 font-Raleway outline-none text-black"
                  name="gender"
                  value="male"
                  {...register("gender", { required: true })}
                />
                <span className="font-Raleway pl-2">female</span>
                <input
                  type="radio"
                  required
                  className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 font-Raleway outline-none text-black"
                  name="gender"
                  value="female"
                  {...register("gender", { required: true })}
                />
              </div>
            </label>
          </div>
          <label
            htmlFor=""
            className="text-sm text-black font-Raleway flex flex-col gap-y-2 mt-3"
          >
            <span className="font-Raleway pl-2">Email</span>
            <input
              type="email"
              required
              className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
              name="email"
              placeholder="Enter the Email"
              {...register("email", { required: true })}
            />
          </label>
          <label
            htmlFor=""
            className="text-sm text-black font-Raleway flex flex-col gap-y-2 mt-3"
          >
            <span className="font-Raleway pl-2">place of Birth</span>
            <input
              type="text"
              required
              className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
              name="pob"
              placeholder="Enter the place of Birth"
              {...register("pob", { required: true })}
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
          <label
            htmlFor=""
            className="flex flex-col gap-y-2 mt-3 text-black text-sm font-Raleway"
          >
            <span className="font-Raleway pl-2"> Address</span>
            <textarea
              type="text"
              className="rounded-xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
              name="delivery_address"
              placeholder="Enter the Address"
              {...register("delivery_address")}
            />
            <p className="text-black font-Raleway text-sm pt-2 px-2 sm:w-full w-[90%]">
              *By submitting this, you agree to Kundali'
              <span className="text-orange"> Privacy Policy.</span>
            </p>
          </label>

          <button
            // onClick={() => navigate('/')}
            type="Submit"
            className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
