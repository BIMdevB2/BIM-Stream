function Header() {
    const imgStyle = {
        width: "4%",
        height: "auto"
    }

    return (<>
        <nav className="navbar md:navbar-expand px-3">
            <div className="container-fluid d-flex align-items-center gap-3 bg-1 fg-2 py-2 border rounded">
                <img src="../../../../public/BIM_Logo.png" alt="Logo" className="ms-5" id="headerImg" style={imgStyle} />
                <a className="navbar-brand mx-4 fs-lg" href="#">B.I.M Stream</a>

                <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" aria-hidden="true"></span>
                </button>
                <dialog className="drawer drawer-end drawer-translucent py-1" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                    <div className="drawer-header"> {/* This is the div for the drawer during responsive view */}
                        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                    </div>
                    <div className="drawer-body mb-2 d-flex align-items-center"> {/* This is the div for the drawer during responsive view */}
                        <form className="hstack pt-3 mx-11" role="search">
                            <input className="form-control" type="search" placeholder="Search creators, live streams, videos..." aria-label="Search" />
                            <button className="btn-solid btn-icon theme-secondary" type="submit"><i className='fa-solid fa-magnifying-glass'></i></button>
                        </form>
                        <ul className="nav navbar-nav d-flex justify-content-center gap-3 me-auto">

                            <li className="nav-item">
                                <a className="active btn btn-outline theme-warning" aria-current="page" href="#"><i class="fa-solid fa-video"></i> Go Live</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i class="fa-regular fa-bell"></i> Notification</a>
                            </li>
                            <li className="nav-item">
                                <span className="vr"></span>
                                <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                                    <span className="avatar">
                                        <i className="fa-regular fa-circle-user"></i>
                                    </span> User <i class="fa-solid fa-angle-down"></i>
                                </button>
                                <div className="menu">
                                    <a className="menu-item" href="#">Action</a>
                                    <a className="menu-item" href="#">Another action</a>
                                    <hr className="menu-divider" />
                                    <a className="menu-item" href="#">Something else here</a>
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
    </>)
}

export default Header
