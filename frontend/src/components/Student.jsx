import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router";

export default function Login() {
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
            await axiosClient.get("/sanctum/csrf-cookie");
            const response = await axiosClient.post("/api/login", {
                email: values.email,
                password: values.password,
            });

            const token = response.data.access_token;

            sessionStorage.setItem("token", token);

            navigate("/admin/dashboard");
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
            <div className="min-h-screen bg-transparent  flex flex-col justify-center py-12 px-6 lg:px-8">
                <div className="mt-8 relative sm:mx-auto sm:w-full sm:max-w-lg shadow-lg">
                <div className="absolute z-[-1] bg-semi-white w-full h-full left-0 right-0 bottom-0  opacity-60 top-0"></div>
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-32 w-auto rounded-full"
                                src="https://st2.depositphotos.com/47577860/49694/v/1600/depositphotos_496949402-stock-illustration-business-communication-employee-icon-outline.jpg" // Example image URL
                                alt="Workflow"
                            />
                            <h6 className="text-center mt-1 text-xl font-semi-bold text-gray-900">
                                Sign up your account
                            </h6>
                        </div>
                        <form
                            className="mb-0 space-y-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                {errors.alert && (
                                    <p className="mt-1 mb-2 p-4 text-center bg-red-200 rounded-md text-red-600 text-sm">
                                        {errors.alert.message}
                                    </p>
                                )}
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
                                        placeholder="Email@example.com"
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
                                        "login"
                                    )}{" "}
                                </button>
                            </div>
                            <p className="mt-2 text-center text-sm text-blue-500 max-w">
                                Don't have an account?
                                <a
                                    href="/register"
                                    className="font-medium ml-2 font-semi-bold text-gray-600 hover:text-gray-800"
                                >
                                    sign in
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
