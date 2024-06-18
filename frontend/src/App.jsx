import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./pages/Layout.jsx";
import Login from "./components/Login.jsx";
import AdminDash from "./components/admin/AdminDash.jsx";
import Student from "./components/admin/Pages/student/Student.jsx";
import DashboardHome from "./components/admin/Pages/DashboardHome.jsx";
import Professeur from "./components/admin/Pages/professeur/Professeur.jsx";
import AllStudent from "./components/admin/Pages/student/AllStudent.jsx";
import EditStudent from "./components/admin/Pages/student/EditStudent.jsx";
import AddStudent from "./components/admin/Pages/student/AddStudent.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                {/* <Route path="/student/dashboard" element={<Dashboard />} /> */}
                <Route path="/Admin/dashboard" element={<AdminDash />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="/Admin/dashboard/student" element={<Student />}>
                        <Route index element={<AllStudent />} />
                        <Route path="/Admin/dashboard/student/edit" element={<EditStudent/>} />
                        <Route path="/Admin/dashboard/student/add" element={<AddStudent/>} />
                    </Route>
                    <Route path="/Admin/dashboard/Professeur" element={<Professeur />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
