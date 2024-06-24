import React from 'react';
import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
   useEffect(() => {
        if (sessionStorage.getItem("ACCESS_TOKEN")) {
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

      sessionStorage.setItem('token', token);

      navigate("/admin/dashboard");

      // Handle successful login
    } catch (error) {
      console.error("Error occurred during login");
      // Handle login error
    }
  };

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-32 w-auto rounded-full"
                src="https://st2.depositphotos.com/47577860/49694/v/1600/depositphotos_496949402-stock-illustration-business-communication-employee-icon-outline.jpg" // Example image URL
                alt="Workflow"
              />
              <h6 className="text-center text-xl font-extrabold text-gray-900">Sign in your account</h6>
            </div>
            <form className="mb-0 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="flex text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Username"
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
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
                <label htmlFor="password" className="flex text-sm font-medium text-gray-700">Password</label>
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
                <input name="terms-and-privacy" type="checkbox" className="" />
                <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">
                  Remember my preference
                </label>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700">
                  Sign up
                </button>
              </div>
              <p className="mt-2 text-center text-sm text-blue-500 max-w">
                Already registered?
                <a href="#" className="font-medium text-gray-600 hover:text-gray-500">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
