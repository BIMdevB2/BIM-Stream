import { Outlet } from "react-router";
import Sidebar from "../../shared/layouts/Sidebar";

function AuthLayout() {
    return(
        <div>
            <header><Sidebar /></header>
            <main><Outlet /></main>
        </div>
    );
}

export default AuthLayout;