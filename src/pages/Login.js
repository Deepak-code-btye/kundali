import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const [account, setAccount] = useState('login')
    const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
        console.log(data)
        reset();
    }
    const toggle = () => {
        account === 'signUp' ? setAccount('login') : setAccount('signUp')
    }
    return (
        <div className='px-5 py-48'>
            {account === 'login' ? <div className=''>
                <h3 className='text-3xl font-Raleway font-bold text-center my-5'>Login</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="max-w-[356px] flex flex-col mx-auto"
                >
                    <div className="flex flex-col gap-x-4 gap-y-4">
                        <label
                            htmlFor=""
                            className="text-sm text-black font-Raleway flex flex-col gap-y-2"
                        >
                            <span className="font-Raleway pl-2">Username</span>
                            <input
                                type="text"
                                className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                                required
                                name="username"
                                placeholder="Enter the username"
                                {...register("username", { required: true })}
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="text-sm text-black font-Raleway flex flex-col gap-y-2"
                        >
                            <span className="font-Raleway pl-2">Password</span>
                            <input
                                type="password"
                                className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                                name="password"
                                placeholder="Enter the password"
                                {...register("password", { required: true })}
                            />
                        </label>
                    </div>
                    <button
                        // onClick={() => navigate('/')}
                        type="Submit"
                        className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
                    >Login</button>
                    <div className='OrLine mt-5'>
                        <h6 className='relative text-center'> OR</h6>
                    </div>
                    <button
                        onClick={() => toggle('signUp')}
                        type="Submit"
                        className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto px-5 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
                    >Create New Account</button>
                </form>

            </div> :
                <div className=''>
                    <h3 className='text-3xl font-Raleway font-bold text-center my-5'>Create Account</h3>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        action=""
                        className="max-w-[356px] flex flex-col mx-auto"
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
                                    name="username"
                                    placeholder="Enter the username"
                                    {...register("username", { required: true })}
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="text-sm text-black font-Raleway flex flex-col gap-y-2"
                            >
                                <span className="font-Raleway pl-2">Email id</span>
                                <input
                                    type="email"
                                    className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                                    required
                                    name="username"
                                    placeholder="Enter the username"
                                    {...register("username", { required: true })}
                                />
                            </label>
                            <label
                                htmlFor=""
                                className="text-sm text-black font-Raleway flex flex-col gap-y-2"
                            >
                                <span className="font-Raleway pl-2">Password</span>
                                <input
                                    type="password"
                                    className="rounded-3xl drop-shadow-3xl bg-opacity-25 pl-4 py-2 font-Raleway outline-none text-black"
                                    name="password"
                                    placeholder="Enter the password"
                                    {...register("Cpassword", { required: true })}
                                />
                            </label>
                        </div>
                        <button
                            // onClick={() => navigate('/')}
                            type="Submit"
                            className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto w-32 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
                        >Login</button>
                        <div className='OrLine mt-5'>
                            <h6 className='relative text-center'> OR</h6>
                        </div>
                        <button
                            onClick={() => toggle('login')}
                            type="Submit"
                            className="whitespace-nowrap bg-opacity-25 shadow-md border-opacity-50 rounded-lg m-auto px-5 text-center py-2 mt-5 hover:bg-[#ffff0033] cursor-pointer"
                        >Already Have Account</button>
                    </form>

                </div>}
        </div>
    )
}

export default Login