import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../../api/axios";

export default function Student() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllStudents = async () => {
            try {
                setLoading(true);
                const token = sessionStorage.getItem("token");
                await axiosClient.get("/sanctum/csrf-cookie");
                const response = await axiosClient.get("/api/allstudents", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setStudents(response.data.students);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching students:", error);
                setLoading(false);
            }
        };

        getAllStudents();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = sessionStorage.getItem("token");
            await axiosClient.get("/sanctum/csrf-cookie");
            await axiosClient.delete(`/api/students/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setStudents(students.filter((student) => student.id !== id));
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div className="block min-w-full">

            <div className="m-auto flex justify-between min-w-[977px] p-2 bg-white rounded-md">
                <div>
                    <h1 className="text-xl text-blue-600 font-bold p-2">
                        ALL Student
                    </h1>
                </div>
                <div>
                    <div className="flex items-center p-2">
                        <Link
                            className="mr-3 text-lg text-gray-500"
                            to={"/admin/dashboard/student"}
                        >
                            Student
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                        <Link
                            className="ml-3 text-lg text-blue-600"
                            to={"/admin/dashboard/student"}
                        >
                            All Student
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-2 min-w-[100%] mt-4 bg-white rounded-md">
                <div className="flex justify-between p-2 mb-2 items-center mt-8">
                    <h2 className="text-xl font-bold">All Student List</h2>
                    <span className="bg-blue-500 flex justify-end text-white px-4 py-2 rounded-md">
                        <Link to="/admin/dashboard/student/add">Add New</Link>
                    </span>
                </div>
                <hr className="mx-[-7px] mb-4" />
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Birthday
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <div className="p-2 block m-auto">
                                <svg
                                    className="m-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="#0000cc"
                                    width={20}
                                    height={20}
                                >
                                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                                </svg>
                            </div>
                            ) : (
                              
                                students.map((student) => (
                                    <tr
                                        key={student.id}
                                        className="hover:shadow-sm"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            {student.first_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {student.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.birthday}
                                        </td>
                                        <td className="px-6 py-4 flex">
                                            <Link
                                                to={`/admin/dashboard/student/edit/${student.id}`}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#0000cc"
                                                    className="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                                    />
                                                </svg>
                                            </Link>
                                            <a
                                                href="#"
                                                className="font-medium ml-2 text-blue-600 dark:text-blue-500 hover:underline"
                                                onClick={() =>
                                                    handleDelete(student.id)
                                                }

                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#cc0000"
                                                    className="bi bi-trash-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                                </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
