import { NavLink } from "react-router";
import { USER_PROFILE } from "../../mocks/profile.js";

function Header() {
    return (
        <nav className="navbar md:navbar-expand px-3">
            <div className="container-fluid header-bar d-flex align-items-center gap-3 bg-1 fg-2 py-2 border rounded">
                <img src="images/BIM_Logo.png" alt="BIM Stream" className="header-logo" id="headerImg" />
                <NavLink className="navbar-brand header-brand" to="/">B.I.M Stream</NavLink>

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
