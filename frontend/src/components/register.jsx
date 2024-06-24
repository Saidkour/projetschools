import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router";

export default function Register() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { isSubmitting, errors },
    } = useForm();

    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            navigate("/");
        }
    });

    const onSubmit = async (values) => {
        try {
            // Login request
            console.log({
                name: values.name,
                email: values.email,
                password: values.password,
            })
            await axiosClient.get("/sanctum/csrf-cookie");
            const response = await axiosClient.post("/registerr",{
                name: values.name,
                email: values.email,
                password: values.password,
            });
            navigate("/login");
        } catch (res) {
            console.log(res);
            if (res.response.data.message) {
                setError("alert", {
                    message: res.response.data.message,
                });
            }
        }
    };

    return (
        <div className="relative">
            <div className='absolute top-0 left-0 w-full h-full bg-[url("public/login4.jpg")] opacity-[0.87]  bg-cover bg-center z-[-1]'></div>
            <div className="absolute bg-white w-full h-full left-0 right-0 bottom-0 opacity-[0.47] bg-cover z-[-1] bg-center top-0"></div>
            <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-32 w-auto rounded-full"
                                src="https://st2.depositphotos.com/47577860/49694/v/1600/depositphotos_496949402-stock-illustration-business-communication-employee-icon-outline.jpg" // Example image URL
                                alt="Workflow"
                            />
                            <h6 className="text-center text-xl font-extrabold text-gray-900">
                                Sign in your account
                            </h6>
                        </div>
                        <form
                            className="mb-0 space-y-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {errors.alert && (
                                    <p className="mt-1 mb-2 p-4 text-center bg-red-200 rounded-md text-red-600 text-sm">
                                        {errors.alert.message}
                                    </p>
                                )}
                                 <div>
                                <label
                                    htmlFor="name"
                                    className="flex text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="name"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                        {...register("name", {
                                            required: "username is required",
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-red-600 text-sm">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="flex text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message:
                                                    "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-600 text-sm">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="flex text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="********"
                                        className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                                        {...register("password", {
                                            required: "Password is required",
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-red-600 text-sm">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    name="terms-and-privacy"
                                    type="checkbox"
                                    className=""
                                />
                                <label
                                    htmlFor="terms-and-privacy"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember my preference
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700"
                                >
                                    {isSubmitting ? (
                                        <svg
                                            className="m-auto "
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            fill="#ffffff"
                                            width={20}
                                            height={20}
                                        >
                                            z
                                            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                        </svg>
                                    ) : (
                                        "register"
                                    )}{" "}
                                </button>
                            </div>
                            <p className="mt-2 text-center text-sm text-blue-500 max-w">
                                Already registered?
                                <a
                                    href="/login"
                                    className="font-medium ml-2 text-gray-600 hover:text-gray-500"
                                >
                                    login
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
