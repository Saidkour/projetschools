import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../../api/axios";

function EditProfesseur() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        birthday: '',
        phone: '',
        specialization: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchProfesseur = async () => {
            try {
                const response = await axiosClient.get(`/api/professeur/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error("There was an error fetching the professor data!", error);
            }
        };

        fetchProfesseur();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        await axiosClient.get("/sanctum/csrf-cookie"); // For CSRF token
        try {
            await axiosClient.put(`/api/professeur/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/admin/dashboard/professeur'); // Redirect after success
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Server validation errors
                setErrors(error.response.data.errors);
            } else {
                console.error("There was an error updating the professor!", error);
            }
        }
    };

    return (
        <div className="block min-w-full">
            <div className="m-auto flex justify-between min-w-[977px] p-2 bg-white rounded-md">
                <div>
                    <h1 className="text-xl font-bold p-2">Edit Professeur</h1>
                </div>
                <div className="flex items-center p-2">
                    <Link className="mr-3 text-lg text-gray-500" to="/admin/dashboard/professeur">Professeur</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <Link className="ml-3 text-lg text-blue-600" to="/admin/dashboard/professeur/edit">Edit Professeur</Link>
                </div>
            </div>
            <div className="p-2 min-w-[100%] mt-4 bg-white rounded-md">
                <div className="flex justify-between p-2 mb-2 items-center mt-8">
                    <h2 className="text-xl font-bold">Basic info</h2>
                </div>
                <hr className="mx-[-7px] mb-4" />
                <div className="p-5">
                    <form onSubmit={handleSubmit} className="mx-auto">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    First name
                                </label>
                                {errors.first_name && <p className="text-red-500 text-xs mt-2">{errors.first_name[0]}</p>}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Last name
                                </label>
                                {errors.last_name && <p className="text-red-500 text-xs mt-2">{errors.last_name[0]}</p>}
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email
                            </label>
                            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email[0]}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="birthday"
                                id="birthday"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="birthday" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Birthday
                            </label>
                            {errors.birthday && <p className="text-red-500 text-xs mt-2">{errors.birthday[0]}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Phone
                            </label>
                            {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone[0]}</p>}
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="specialization"
                                id="specialization"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                value={formData.specialization}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="specialization" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Specialization
                            </label>
                            {errors.specialization && <p className="text-red-500 text-xs mt-2">{errors.specialization[0]}</p>}
                        </div>

                        <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfesseur;
