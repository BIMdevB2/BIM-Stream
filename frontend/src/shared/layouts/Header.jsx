import { NavLink } from "react-router";
import { USER_PROFILE } from "../../mocks/profile.js";

function Header() {
  return (
    <nav className="AppHeader" aria-label="Main navigation">
      <NavLink className="header-brand" to="/" aria-label="B.I.M Stream home">
        <img src="/images/BIM_Logo.png" alt="" />
        <span>B.I.M Stream</span>
      </NavLink>

      <div className="header-search" role="search">
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        <input
          type="search"
          placeholder="Search creators, live streams, videos..."
          aria-label="Search creators, live streams, and videos"
        />
      </div>

      <div className="header-actions">
        <NavLink className="header-go-live" to="/LivePage">
          <i className="fa-solid fa-video" aria-hidden="true" />
          Go live
        </NavLink>
        <button className="header-notifications" type="button" aria-label="Notifications">
          <i className="fa-regular fa-bell" aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <span className="header-divider" aria-hidden="true" />
        <NavLink className="header-profile" to="/ProfilePage">
          <img src={USER_PROFILE.avatarUrl} alt="" />
          <span className="header-profile-copy">
            <strong>{USER_PROFILE.name}</strong>
            <small>@{USER_PROFILE.username}</small>
          </span>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
