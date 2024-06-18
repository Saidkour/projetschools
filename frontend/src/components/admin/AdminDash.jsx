import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
    FiGrid,
    FiInbox,
    FiUser,
    FiCalendar,
    FiSearch,
    FiBarChart2,
    FiFile,
    FiSettings,
} from "react-icons/fi";
import { BiDetail, BiAlignLeft, BiAlignRight } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
// import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Navbar = ({ open, setOpen }) => (
    <nav
        className={`bg-gray-400 shadow fixed top-0 left-0 right-0 transition-all duration-300 ${
            open ? "ml-64" : "ml-20"
        }`}
    >
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <button
                    className="p-3 text-gray-700 hover:text-gray-900 focus:outline-none"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <span className="text-3xl">
                            <BiAlignRight />
                        </span>
                    ) : (
                        <span className="text-3xl">
                            <BiAlignLeft />
                        </span>
                    )}
                </button>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-gray-700 hover:text-gray-900 mx-4">
                    <FiUser />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                    Logout
                </a>
            </div>
        </div>
    </nav>
);

const Menus = [
    { title: "Dashboard", icon: <FiGrid />, to: "/admin/dashboard"},
    { title: "Inbox", icon: <FiInbox />, to: "/inbox" },
    { title: "Accounts", icon: <FiUser />, to: "/accounts" },
    // { title: "Notes", icon: <FiCalendar />, to: "/notes" },
    // { title: "Todolist", icon: <BiDetail />, to: "/todolist" },
    // { title: "Search", icon: <FiSearch />, to: "/search" },
    // { title: "Analytics", icon: <FiBarChart2 />, to: "/analytics" },
    // { title: "Files", icon: <FiFile />, to: "/files", gap: true },
    {
        title: "Student",
        icon: <PiStudentBold />,
        to: "/admin/dashboard/student",
    },
    { title: "Professeur", icon: <FiUser />, to: "/admin/dashboard/Professeur" },
    { title: "Setting", icon: <FiSettings />, to: "/setting", gap: true },
];

const Sidebar = ({ open }) => (
    <div
        className={`bg-gray-400 shadow-md fixed top-0 left-0 h-screen transition-width duration-300 ${
            open ? "w-64" : "w-20"
        }`}
    >
        <div className="flex items-center p-4">
            <a href="#" className="text-3xl font-bold ">
                <span>
                    <PiStudentBold />
                </span>{" "}
                {open && <span>EDUSYS</span>}{" "}
            </a>
        </div>
        <ul className="py-4">
            {Menus.map((menu, index) => (
                <li
                    key={index}
                    className={`px-6 py-2 flex items-center ${
                        menu.gap ? "mt-8" : "mt-2"
                    } text-gray-700 hover:text-gray-900`}
                >
                    <span className="text-2xl mr-2">{menu.icon}</span>
                    {open && <Link to={menu.to}>{menu.title}</Link>}
                </li>
            ))}
        </ul>
    </div>
);
export default function AdminDash() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex">
                <Navbar open={open} setOpen={setOpen} />
                <div className="flex">
                    <Sidebar open={open} />
                    <div
                        className={`flex-1 p-12 pt-20 transition-all duration-300 ${
                            open ? "ml-64" : "ml-20"
                        }`}
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
