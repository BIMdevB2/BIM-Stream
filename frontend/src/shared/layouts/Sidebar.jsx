import { NavLink, Link } from 'react-router';

function Sidebar() {
    // const style = ({ isActive }) => (isActive ? "lien_actif" : "lien");
    return (
        <nav className=''>
            <NavLink to="/" ></NavLink>
            <NavLink to="/LoginPage" >Login</NavLink>
            <NavLink to="/RegisterPage" >Register</NavLink>
        </nav>
    );
}

export default Sidebar;