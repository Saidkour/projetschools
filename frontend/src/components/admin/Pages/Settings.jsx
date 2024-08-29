import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import Update from "./Update";

export default function Settings() {
    const [activeSection, setActiveSection] = useState('update'); 

    const handleButtonClick = (section) => {
        setActiveSection(section); 
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 px-6 lg:px-8">
            <h1 className="text-2xl m-4 text-center">Settings</h1>
            <hr />
            <div className="flex justify-center my-4">
                <button
                    className={`w-full max-w-xs px-4 py-2 border ${activeSection === 'update' ? 'bg-blue-500' : 'bg-primary'} text-center bg-blue-400 text-white hover:bg-blue-700`}
                    onClick={() => handleButtonClick('update')}
                >
                    Update Information
                </button>
                <button
                    className={`w-full max-w-xs px-4 py-2 border ${activeSection === 'changePassword' ? 'bg-blue-500' : 'bg-primary'} text-center bg-blue-400 text-white hover:bg-blue-700`}
                    onClick={() => handleButtonClick('changePassword')}
                >
                    Change Password
                </button>
            </div>
            <div className="bg-gray-50 container lg:px-40 lg:py-8 lg:pb-20 px-8 py-8">
                {activeSection === 'update' ? (
                    <Update />
                ) : activeSection === 'changePassword' ? (
                    <ChangePassword />
                ) : null}
            </div>
        </div>
    );
}
