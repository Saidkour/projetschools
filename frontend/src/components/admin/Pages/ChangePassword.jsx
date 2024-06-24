import React from 'react';
import { useForm } from "react-hook-form";
import axiosClient from '../../../api/axios';

export default function ChangePassword() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const token = sessionStorage.getItem('token');
            await axiosClient.put('/api/change-password', data, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Password changed successfully");
        } catch (error) {
            console.error("Error changing password", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                <input 
                    id="currentPassword" 
                    name="currentPassword" 
                    type="password" 
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    {...register("currentPassword", { required: "Current password is required" })}
                />
                {errors.currentPassword && (
                    <p className="mt-1 text-red-600 text-sm">{errors.currentPassword.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                <input 
                    id="newPassword" 
                    name="newPassword" 
                    type="password" 
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    {...register("newPassword", {
                        required: "New password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long"
                        }
                    })}
                />
                {errors.newPassword && (
                    <p className="mt-1 text-red-600 text-sm">{errors.newPassword.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input 
                    id="confirmNewPassword" 
                    name="confirmNewPassword" 
                    type="password" 
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    {...register("confirmNewPassword", {
                        required: "Please confirm your new password",
                        validate: (value) => value === watch('newPassword') || "Passwords do not match"
                    })}
                />
                {errors.confirmNewPassword && (
                    <p className="mt-1 text-red-600 text-sm">{errors.confirmNewPassword.message}</p>
                )}
            </div>
            <div>
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
                >
                    Change Password
                </button>
            </div>
        </form>
    );
}
