import { Link } from "react-router";
import styles from "./auth.module.css";

function AuthSplitLayout({
    image, tag, title, text,
    topText, topLink, topLinkLabel,
    formTag, formTitle, formText,
    children,
}) {
    return (
        <div className={`container-fluid p-0 ${styles.registerPage}`}>
            <div className="row g-0 min-vh-100">

                {/* ===== GAUCHE ===== */}
                <div className={`col-6 position-relative ${styles.registerLeft}`}>
                    <img src={image} alt="Background" className={styles.registerBg} />
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
                            <p className={`${styles.tagOrange} mb-2`}><span className={styles.dot}></span> {tag}</p>
                            <h2 className={styles.registerTitle}>{title}</h2>
                            <p className="small mb-4">{text}</p>

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
                        {topText} <Link to={topLink} className={styles.orangeLink}>{topLinkLabel}</Link>
                    </div>

                    <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3">
                        <div className={`${styles.registerBox} w-100`}>
                            <p className={`${styles.tagOrange} mb-2`}>{formTag}</p>
                            <h1 className="h3 mb-2">{formTitle}</h1>
                            <p className="small text-secondary mb-4">{formText}</p>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthSplitLayout;