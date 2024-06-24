import React from 'react';

const Accounts = () => {
  // Example data (replace with dynamic data fetched from backend)
  const adminProfile = {
    name: 'John Doe',
    email: 'admin@example.com',
    schoolName: 'School of Excellence',
    profilePicture: 'data:image/jpeg;base64,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', // Placeholder URL for profile picture
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Accounts</h1>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <img
            src={adminProfile.profilePicture}
            alt="Admin Profile"
            className="rounded-full h-20 w-20 object-cover shadow-lg"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{adminProfile.name}</h2>
            <p className="text-gray-600">{adminProfile.email}</p>
            <p className="text-gray-600">{adminProfile.schoolName}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <p className="mt-1 text-sm text-gray-900">admin_user</p> {/* Replace with dynamic username */}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <p className="mt-1 text-sm text-gray-900">admin@example.com</p> {/* Replace with dynamic email */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
