import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
    return (
        <>
            <Nav />
            <main className={"container"}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
