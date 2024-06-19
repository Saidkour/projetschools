import React from "react";
import { Outlet } from "react-router";

export default function Student() {
    return (
        <div className="p-80 pt-20 ">
            <div className="px-90 ">
                <h1 className="text-2xl font-bold bg-gray-200 pr-20 pl-72 w-full text-center py-4">
                    All Student
                </h1>
            </div>
            <Outlet />
        </div>
    );
}
