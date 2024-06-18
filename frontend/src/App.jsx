import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./pages/Layout.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/student/Dashboard.jsx";
import AdminDash from "./components/admin/AdminDash.jsx";
 
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/student/dashboard" element={<Dashboard />} />
                <Route path="/Admin/dashboard" element={<AdminDash/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
