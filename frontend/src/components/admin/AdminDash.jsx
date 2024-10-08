import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FiInbox, FiUser, FiSearch, FiSettings } from "react-icons/fi";
import { BiAlignLeft, BiAlignRight } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineHome } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

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
import axiosClient from "../../api/axios";

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

const Navbar = ({ open, setOpen }) => {
    const navigate = useNavigate();
        const handleLogout = async () => {
            try {
                await axiosClient.post('/logout');
                sessionStorage.removeItem('token');
                navigate('/login');
            } catch (error) {
                console.error(error);
            }
        }
    return (
        <nav
            className={`bg-gray-100 shadow fixed top-0 left-0 right-0 transition-all duration-300 ${
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
                    <div className="relative ml-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 w-64 rounded-full  bg-gray-200 text-gray-200 placeholder-gray-400  transition"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="flex items-center pr-8">
                    <a
                        href="/admin/dashboard/accounts"
                        className="text-gray-700 hover:text-gray-900 mx-4"
                    >
                        <FiUser />
                    </a>
                    <a href="#" onClick={()=>handleLogout()} className="text-gray-700 hover:text-gray-900">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    );
};

const Menus = [
    { title: "Dashboard", icon: <MdOutlineHome />, to: "/admin/dashboard" },
    { title: "Inbox", icon: <FiInbox />, to: "/admin/dashboard/inbox" },
    {
        title: "Accounts",
        icon: <VscAccount />,
        to: "/admin/dashboard/accounts",
    },
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
    {
        title: "Professeur",
        icon: <FiUser />,
        to: "/admin/dashboard/Professeur",
    },
    {
        title: "Setting",
        icon: <FiSettings />,
        to: "/admin/dashboard/settings",
        gap: true,
    },
];

const Sidebar = ({ open }) => (
    <div
        className={`bg-gray-100 shadow-md fixed top-0 left-0 h-screen transition-width duration-300 ${
            open ? "w-64" : "w-20"
        }`}
    >
        <div
            className={`px-6 py-2 flex items-center ${
                open ? "pb-0" : "pb-7"
            }  bg-blue-500`}
        >
            <a
                href="#"
                className={` ${
                    open ? "text-xl" : "text-2xl"
                } font-black text-white `}
            >
                <span>
                    <IoSchoolSharp />
                </span>{" "}
                {open && <span>EDUSYS</span>}{" "}
            </a>
        </div>
        <ul className="py-4">
            {Menus.map((menu, index) => (
                <Link to={menu.to} key={index}>  
                    <li 
                        className={`px-6 py-2 flex items-center ${
                            menu.gap ? "mt-8" : "mt-2"
                        } text-gray-700 hover:text-gray-900`}
                    >
                        <span className="text-2xl mr-2">{menu.icon}</span>
                        {open && <span>{menu.title}</span>}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
);
export default function AdminDash() {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        try {
            setLoading(true);
            if (!sessionStorage.getItem("token")) {
                navigate("/login");
                
            }
            setLoading(false);
            
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, []);
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="min-h-screen bg-gray-100 flex">
                    <Navbar open={open} setOpen={setOpen} />
                    <div className="w-full">
                        <Sidebar open={open} />

                        <div
                            className={` p-12 pt-20 transition-all  duration-300 ${
                                open ? "ml-64" : "ml-20"
                            }`}
                        >
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
