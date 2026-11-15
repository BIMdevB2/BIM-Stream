import { NavLink } from "react-router";
import { followedChannels } from "../../mocks/followedChannels";

const navigationItems = [
    { to: '/', label: 'Home', icon: 'fa-house', end: true },
    { to: '/VideoPage', label: 'Video', icon: 'fa-video' },
    { to: '/MessagesPage', label: 'Messages', icon: 'fa-message' },
    { to: '/ProfilePage', label: 'My profile', icon: 'fa-user' },
];

function Sidebar() {
    return (
        <aside className="Sidebar">
            <nav className="sidebar-menu" aria-label="Your world">
                <span className="sidebar-section-label">YOUR WORLD</span>
                {navigationItems.map(({ to, label, icon, count, end }) => (
                    <NavLink
                        key={label}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `sidebar-link${isActive ? " active" : ""}`
                        }
                    >
                        <i className={`fa-solid ${icon}`} aria-hidden="true" />
                        <span className="sidebar-link-label">{label}</span>
                        {count && <span className="sidebar-link-count">{count}</span>}
                    </NavLink>
                ))}
            </nav>

            <section className="sidebar-following" aria-labelledby="followed-channels">
                <div className="sidebar-section-heading">
                    <h2 className="sidebar-section-label" id="followed-channels">
                        FOLLOWED CHANNELS
                    </h2>
                    <i className="fa-regular fa-heart" aria-hidden="true" />
                </div>
                <ul className="sidebar-channel-list">
                    {followedChannels.map((channel) => (
                        <li key={channel.name}>
                            <NavLink className="sidebar-channel" to="/LivePage">
                                <img src={channel.avatar} alt="" />
                                <span className="sidebar-channel-copy">
                                    <strong>{channel.name}</strong>
                                    <small>{channel.category}</small>
                                </span>
                                {channel.viewers ? (
                                    <span className="sidebar-channel-viewers">
                                        <i aria-hidden="true" />
                                        {channel.viewers}
                                    </span>
                                ) : (
                                    <span className="sidebar-channel-offline">Offline</span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <NavLink className="sidebar-view-all" to="/ProfilePage">
                    View all channels <span aria-hidden="true">→</span>
                </NavLink>
            </section>

            <section className="sidebar-creator-card" aria-label="Creator studio">
                <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
                <strong>Your next scene is waiting.</strong>
                <p>Share your world with the community.</p>
                <NavLink to="/ProfilePage">Creator studio</NavLink>
            </section>

            <footer className="sidebar-footer">
                <span>Settings</span>
                <span aria-hidden="true">·</span>
                <span>Help</span>
                <small>© 2026 B.I.M Stream</small>
            </footer>
        </aside>
    );
}

export default Sidebar;
