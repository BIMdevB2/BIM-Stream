import { Link, Outlet, useLocation } from "react-router";
import { AUTH_PAGES } from "../../features/auth/authPages";
import styles from "../../features/auth/components/auth.module.css";

function AuthLayout() {
    const { pathname } = useLocation();
    const c = AUTH_PAGES[pathname.toLowerCase()] ?? AUTH_PAGES["/loginpage"];

    return (
        <div className={`container-fluid p-0 ${styles.registerPage}`}>
            <div className="row g-0 min-vh-100">

                {/* ===== GAUCHE ===== */}
                <div className={`col-6 position-relative ${styles.registerLeft}`}>
                    <img src={c.image} alt="Background" className={styles.registerBg} />
                    <div className={styles.registerOverlay}></div>

                    <div className={`${styles.registerLeftContent} d-flex flex-column justify-content-between p-4`}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <img src="/images/BIM_Logo.png" alt="Logo B.I.M Stream" height="28" />
                                <span>B.I.M Stream</span>
                            </div>
                            <span className={styles.counterPill}>01 / 04</span>
                        </div>

                        <div>
                            <p className={`${styles.tagOrange} mb-2`}><span className={styles.dot}></span> {c.tag}</p>
                            <h2 className={styles.registerTitle}>{c.title}</h2>
                            <p className="small mb-4">{c.text}</p>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-1">
                                    <span className={`${styles.bar} ${styles.barActive}`}></span>
                                    <span className={styles.bar}></span>
                                    <span className={styles.bar}></span>
                                    <span className={styles.bar}></span>
                                </div>
                                <div className="d-flex gap-2">
                                    <button type="button" className={styles.arrowBtn}><i className="fa-solid fa-arrow-left"></i></button>
                                    <button type="button" className={`${styles.arrowBtn} ${styles.arrowOrange}`}><i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== DROITE ===== */}
                <div className={`col-6 d-flex flex-column ${styles.registerRight}`}>

                    <div className="text-end small p-4 text-secondary">
                        {c.topText} <Link to={c.topLink} className={styles.orangeLink}>{c.topLinkLabel}</Link>
                    </div>

                    <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3">
                        <div className={`${styles.registerBox} w-100`}>
                            <p className={`${styles.tagOrange} mb-2`}>{c.formTag}</p>
                            <h1 className="h3 mb-2">{c.formTitle}</h1>
                            <p className="small text-secondary mb-4">{c.formText}</p>

                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;