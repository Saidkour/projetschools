import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axiosClient from '../../../api/axios';

export default function Update() {
    const [user, setUser] = useState(null);

    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        reset 
    } = useForm();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await axiosClient.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
                reset(response.data);  // Reset form with fetched user data
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUser();
    }, [reset]);

    const onSubmit = async (data) => {
        try {
            const token = sessionStorage.getItem('token');
            await axiosClient.put('/api/user', data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Profile updated successfully");
        } catch (error) {
            console.error("Error updating profile", error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <p className="mt-1 text-red-600 text-sm">{errors.name.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    {...register("email", { 
                        required: "Email is required", 
                        pattern: { 
                            value: /^\S+@\S+$/i, 
                            message: "Invalid email address" 
                        }
                    })}
                />
                {errors.email && (
                    <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
                )}
            </div>
            <div>
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}
