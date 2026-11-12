import { NavLink, Link } from 'react-router';

function Sidebar() {
    // const style = ({ isActive }) => (isActive ? "lien_actif" : "lien");
    // puis créer le css
    // ClassName={style} dans chaque Navlink
    return (
        <nav className=''>
            <NavLink to="/" end >Discovery</NavLink>
            <NavLink to="/LoginPage">Login</NavLink>
            <NavLink to="/RegisterPage">Register</NavLink>
            {/* <NavLink to="/ModerationPage">Admin</NavLink>
            <NavLink to="/ProfilePage">ProfilePage</NavLink>
            <NavLink to="/VideoPage">VideoPage</NavLink>
            <NavLink to="/MessagesPage">MessagesPage</NavLink> */}
        </nav>
    );
}

export default Sidebar;