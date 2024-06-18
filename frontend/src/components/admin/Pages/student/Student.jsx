import React from "react";
import { Outlet } from "react-router";

export default function Student() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Student</h1>
            <Outlet />
        </div>
    );
}
