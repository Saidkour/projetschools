import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./pages/Layout.jsx";
import Login from "./components/Login.jsx";
import AdminDash from "./components/admin/AdminDash.jsx";
import Student from "./components/admin/Pages/student/Student.jsx";
import DashboardHome from "./components/admin/Pages/DashboardHome.jsx";
import Professeur from "./components/admin/Pages/professeur/Professeur.jsx";
import EditStudent from "./components/admin/Pages/student/EditStudent.jsx";
import AddStudent from "./components/admin/Pages/student/AddStudent.jsx";
import Inbox from "./components/admin/Pages/Inbox.jsx";
import Accounts from "./components/admin/Pages/Accounts.jsx";
import Settings from "./components/admin/Pages/Settings.jsx";
import EditProfesseur from "./components/admin/Pages/professeur/EditProfesseur.jsx";
import AddProfesseur from "./components/admin/Pages/professeur/AddProfesseur.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                {/*<Route path="/student/dashboard" element={<Dashboard />} />*/}
                <Route path="/Admin/dashboard" element={<AdminDash />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="/Admin/dashboard/inbox" element={<Inbox />} />
                    <Route path="/Admin/dashboard/accounts" element={<Accounts />} />
                    <Route path="/Admin/dashboard/student" element={<Student />}/>
                        <Route path="/Admin/dashboard/student/edit/:id" element={<EditStudent/>} />
                        <Route path="/Admin/dashboard/student/add" element={<AddStudent/>} />
                    <Route path="/Admin/dashboard/Professeur" element={<Professeur />} />                       
                        <Route path="/Admin/dashboard/Professeur/edit/:id" element={<EditProfesseur/>} />
                        <Route path="/Admin/dashboard/Professeur/add" element={<AddProfesseur/>} />
                    <Route path="/Admin/dashboard/Settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
