import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {  FiUsers } from 'react-icons/fi';
import { FaSchool } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { RiTeamLine } from 'react-icons/ri';
import axiosClient from '../../../api/axios';

function DashboardHome() {
  const [students, setStudents] = useState([]);
  const [professeurs, setProfesseurs] = useState([]);


  useEffect(() => {
    const getAllStudents = async () => {
      const token = sessionStorage.getItem("token");
      await axiosClient.get("/sanctum/csrf-cookie");
      const response = await axiosClient.get("/api/allstudents", {
        headers: { Authorization: `Bearer ${token}` }
      });
      // console.log(response.data.students);
      setStudents(response.data.students);
    }

    getAllStudents();
  }, []);

  useEffect(() => {
    const getAllProfesseurs = async () => {
      const token = sessionStorage.getItem("token");
      await axiosClient.get("/sanctum/csrf-cookie");
      const response = await axiosClient.get("/api/allprofesseurs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfesseurs(response.data.professeurs);
    };

    getAllProfesseurs();
  }, []);
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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-blue-500 p-6 shadow rounded-lg flex items-center">
          <div className="text-black bg-gray-200 p-2 rounded-full text-3xl mr-4">
            <RiTeamLine />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">TOTAL STUDENTS</h3>
            <div className="text-2xl font-bold text-white">{students.length}</div>
          </div>
        </div>
        <div className="bg-[#ffb703] p-6 shadow rounded-lg flex items-center" style={{ height: '150px' }}>
          <div className="text-black bg-gray-200 p-2 rounded-full text-3xl mr-4">
            <FiUsers />

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">TOTAL  PROFESSEURS</h3>
            <div className="text-2xl font-bold text-white">{professeurs.length}</div>
          </div>
        </div>
        <div className="bg-[#8338ec] p-6 shadow rounded-lg flex items-center" style={{ height: '150px' }}>
          <div className="text-black bg-gray-200 p-2 rounded-full text-3xl mr-4">
          <IoBookOutline />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">TOTAL COURSE</h3>
            <div className="text-2xl font-bold text-white">10</div>
          </div>
        </div>
        <div className="bg-[#ef233c] p-6 shadow rounded-lg flex items-center" style={{ height: '150px' }}>
          <div className="text-black bg-gray-200 p-2 rounded-full text-3xl mr-4">
          <FaSchool />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">TOTAL DEPARTEMENTS</h3>
            <div className="text-2xl font-bold text-white">10</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-8 bg-white p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <hr />
          <Bar data={dataBar} options={options} />
        </div>
        <div className="mb-8 bg-white p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
          <hr />
          <Line data={dataLine} options={options} />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
