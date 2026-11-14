import { NavLink } from "react-router";

function Header() {
    return (
        <nav className="navbar md:navbar-expand px-3">
            <div className="container-fluid header-bar d-flex align-items-center gap-3 bg-1 fg-2 py-2 border rounded">
                <img src="../../../public/images/BIM_Logo.png" alt="BIM Stream" className="header-logo" id="headerImg" />
                <NavLink className="navbar-brand header-brand" to="/">B.I.M Stream</NavLink>

                <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <dialog className="drawer drawer-end drawer-translucent header-drawer py-1" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                    <div className="drawer-header">
                        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                    </div>
                    <div className="drawer-body header-drawer-body mb-2 d-flex align-items-center">
                        <form className="hstack header-search" role="search">
                            <input className="form-control" type="search" placeholder="Search creators or videos..." aria-label="Search creators, live streams, and videos" />
                            <button className="btn-solid btn-icon theme-secondary" type="submit"><i className='fa-solid fa-magnifying-glass'></i></button>
                        </form>
                        <ul className="nav navbar-nav header-actions d-flex justify-content-center gap-3">

                            <li className="nav-item">
                                <a className="active btn btn-outline theme-warning" aria-current="page" href="#"><i className="fa-solid fa-video"></i> Go Live</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="fa-regular fa-bell"></i> Notification</a>
                            </li>
                            <li className="nav-item">
                                <span className="vr"></span>
                                <button className="nav-link " type="button" data-bs-toggle="menu" aria-expanded="false">
                                    <span className="avatar">
                                        <i className="fa-regular fa-circle-user"></i>
                                    </span> User <i className="fa-solid fa-angle-down"></i>
                                </button>
                                <div className="menu">
                                    <hr className="menu-divider" />
                                    <NavLink className="menu-item" to="/LoginPage">Log Out</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"></a>
                            </li>
                        </ul>
                    </div>
                </dialog>
            </div>
        </nav>
    );
}

export default Header
