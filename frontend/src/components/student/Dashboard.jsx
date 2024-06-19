import React, { useState } from 'react';
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
import { BiDetail ,BiAlignLeft,BiAlignRight   } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
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
} from 'chart.js';

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

const Navbar = () => (
  <nav className="bg-gray-400 shadow">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" className="text-3xl font-bold"><PiStudentBold />      </a>
      <div className="flex items-center">
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-4"><FiUser /></a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Logout</a>
      </div>
    </div>
  </nav>
);

const Menus = [
  { title: "Dashboard", icon: <FiGrid />, to: "/student/dashboard" },
  { title: "Inbox", icon: <FiInbox />, to: "/student/dashboard/inbox" },
  { title: "Accounts", icon: <FiUser />, to: "/student/dashboard/accounts", gap: true },
  { title: "Notes", icon: <FiCalendar />, to: "/student/dashboard/notes" },
  { title: "Todolist", icon: <BiDetail />, to: "/student/dashboard/todolist" },
  { title: "Search", icon: <FiSearch />, to: "/student/dashboard/search" },
  { title: "Analytics", icon: <FiBarChart2 />, to: "/student/dashboard/analytics" },
  { title: "Files", icon: <FiFile />, to: "/student/dashboard/files", gap: true },
  { title: "Setting", icon: <FiSettings />, to: "/Setting" },
];

const Sidebar = ({ open, setOpen }) => (
  <div className={`bg-gray-400 shadow-md ${open ? 'w-64' : 'w-20'} h-screen transition-width duration-300`}>
    <button 
      className="p-3 text-gray-700 hover:text-gray-900 focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      {open ?  <span className="text-3xl mr-2"><BiAlignRight /> </span> : <span className="text-3xl mr-2"><BiAlignLeft /> </span>     }
    </button>
    <ul className="py-4">
      {Menus.map((menu, index) => (
        <li key={index} className={`px-6 py-2 flex items-center ${menu.gap ? 'mt-8' : 'mt-2'} text-gray-700 hover:text-gray-900`}>
          <span className="text-2xl mr-2">{menu.icon}</span>
          {open && <span> {menu.title}</span>}
        </li>
      ))}
    </ul>
  </div>
);

const MainContent = () => {
    const dataBar = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Total Absence',
          data: [3, 2, 2, 4, 5, 6],
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue background
          borderColor: 'rgba(54, 162, 235, 1)', // Blue border
          borderWidth: 1,
        },
      ],
    };
  
    const dataLine = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'The remaining tests',
          data: [10, 9, 8, 7, 6, 5],
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue background
          borderColor: 'rgba(54, 162, 235, 1)', // Blue border
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Total Absence</h3>
            <Bar data={dataBar} options={options} />
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">The remaining tests</h3>
            <Line data={dataLine} options={options} />
          </div>
        </div>
      </div>
    );
  };

const Dashboard = ({ open, setOpen }) => (
  <div className="flex">
    <Sidebar open={open} setOpen={setOpen} />
    <MainContent />
  </div>
);

export default function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard open={open} setOpen={setOpen} />
    </div>
  );
}
