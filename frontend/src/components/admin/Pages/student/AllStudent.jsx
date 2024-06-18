import { Link } from "react-router-dom";

function AllStudent() {
    return (
        <>
            <div className="flex justify-between mb-2 items-center mt-8">
                <h2 className="text-xl font-bold">Student List</h2>
                <span className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    <Link to="/admin/dashboard/student/add">Add Student</Link>
                </span>
            </div>
            <div className="relative overflow-x-auto">
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Phone</th>
                            <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doejkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjj</td>
                            <td>johndoe@example.com</td>
                            <td>123-456-7890</td>
                            <td>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>janesmith@example.com</td>
                            <td>987-654-3210</td>
                            <td>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>janesmith@example.com</td>
                            <td>987-654-3210</td>
                            <td>
                                <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                                    Edit
                                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded-md ml-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AllStudent;
