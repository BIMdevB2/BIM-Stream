import { Outlet } from "react-router";
import { NavLink } from "react-router";

function AuthLayout() {
    return(
        <div>
            <main><Outlet /></main>
        </div>
    );
}

export default AuthLayout;