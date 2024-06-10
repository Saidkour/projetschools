import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";

export default function Student() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (values) => {
        try {
            // Fetch CSRF token
            await axiosClient.get("/sanctum/csrf-cookie");

            // Login request
            const response = await axiosClient.post("/login", {
                email: values.email,
                password: values.password,
            });

            console.log("User logged in successfully", response.data);
            // Handle successful login
        } catch (error) {
            console.error("Error occurred during login", error);
            // Handle login error
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded"
        >
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm "
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
            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                />
                {errors.password && (
                    <p className="mt-1 text-red-600 text-sm">
                        {errors.password.message}
                    </p>
                )}
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white font-medium rounded-md shadow-sm hover:bg-black"
            >
                Submit
            </button>
        </form>
    );
}
