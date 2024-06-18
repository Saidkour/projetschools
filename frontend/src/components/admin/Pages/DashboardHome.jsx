import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

function DashboardHome() {
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
    <>
     {/* Render your content directly here */}
     <h1>Main Content</h1>
     <div className="mb-8">
       <h2>Bar Chart</h2>
       <Bar data={dataBar} options={options} />
     </div>
     <div>
       <h2>Line Chart</h2>
       <Line data={dataLine} options={options} />
     </div>
    </>
    
  )
}

export default DashboardHome