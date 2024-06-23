import { Outlet } from "react-router-dom";
// import Nav from "./Nav";
import NavBar from "./nav2";

function Layout() {
    return (
        <>
            <NavBar />
            <main className={""}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
