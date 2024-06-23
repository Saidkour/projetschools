import { useForm } from "react-hook-form";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router";
export default function Student() {
    // useEffect(() => {
    //     if (window.localStorage.getItem("ACCESS_TOKEN")) {
    //         navigate("/");
    //     }
    // });
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();
    const onSubmit = async (values) => {
        try {
            // Login request
            await axiosClient.get("/sanctum/csrf-cookie");
            const response = await axiosClient.post("/login", {
                email: values.email,
                password: values.password,
            });
            console.log(response);
            if (response.status == 204) {
                window.localStorage.setItem("ACCESS_TOKEN", "test");
                navigate("/admin/dashboard");
            }
        } catch (res) {
            if (
                res.response.data.errors.email &&
                res.response.data.errors.password
            ) {
                setError("email", {
                    message: res.response.data.errors.email,
                });
                setError("password", {
                    message: res.response.data.errors.password,
                });
            } else if (res.response.data.errors.email) {
                setError("email", {
                    message: res.response.data.errors.email,
                });
            } else if (res.response.data.errors.password) {
                setError("password", {
                    message: res.response.data.errors.password,
                });
            }
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
                    value={"said@example.com"}
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
                    })}
                />
                {errors.password && (
                    <p className="mt-1 text-red-600 text-sm">
                        {errors.password.message}
                    </p>
                )}
            </div>
            <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-2 px-4 bg-black text-white font-medium rounded-md shadow-sm hover:bg-black"
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
                    "Submit"
                )}{" "}
            </button>
        </form>
    );
}
