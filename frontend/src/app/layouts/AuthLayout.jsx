import { Outlet } from "react-router";
import { NavLink } from "react-router";

function AuthLayout() {
    return(
        <div>
            <header>
                <NavLink to="/LoginPage" >Login</NavLink>
                <NavLink to="/RegisterPage" >Register</NavLink>
            </header>
            <main><Outlet /></main>
        </div>
    );
}

export default AuthLayout;