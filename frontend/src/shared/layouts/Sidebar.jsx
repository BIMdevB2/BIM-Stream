import { NavLink } from 'react-router';

const navigationItems = [
    { to: '/', label: 'Home', icon: 'fa-house', end: true },
    { to: '/VideoPage', label: 'Video', icon: 'fa-video' },
    { to: '/MessagesPage', label: 'Messages', icon: 'fa-message' },
    { to: '/ProfilePage', label: 'My profile', icon: 'fa-user' },
];

function Sidebar() {
    return (
        <nav className="Sidebar" aria-label="Navigation principale">
            
            <div className="menu-bar">
                <span className="sidebar-section-label">YOUR WORLD</span>
                {navigationItems.map(({ to, label, icon, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `sidebar-link${isActive ? ' active' : ''}`
                        }
                    >
                        <i className={`fa-solid ${icon}`} aria-hidden="true" />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
