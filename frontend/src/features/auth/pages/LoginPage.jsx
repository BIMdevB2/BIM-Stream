import { useState } from "react";
import { Link } from "react-router";
import styles from "./auth.module.css";

function LoginPage() {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    function send(e) {
        e.preventDefault();
        if (user.firstName === "") return;
        console.log(user);
        setUser({ firstName: "", lastName: "", email: "", password: "" });
    }

    return (
        <div className={`container-fluid p-0 ${styles.registerPage}`}>
            <div className="row g-0 min-vh-100">

                {/* ===== GAUCHE ===== */}
                <div className={`col-6 position-relative ${styles.registerLeft}`}>
                    <img src="/images/bg_LoginPage.jpg" alt="Bg LoginPage" className={styles.registerBg} />
                    <div className={styles.registerOverlay}></div>

                    <div className={`${styles.registerLeftContent} d-flex flex-column justify-content-between p-4`}>
                        {/* haut */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-2">
                                <img src="/images/BIM_Logo.png" alt="Logo B.I.M Stream" height="28" />
                                <span>B.I.M Stream</span>
                            </div>
                            <span className={styles.counterPill}>01 / 04</span>
                        </div>

                        {/* bas */}
                        <div>
                            <p className={`${styles.tagOrange} mb-2`}><span></span>FEATURED THIS WEEK</p>
                            <h2 className={styles.registerTitle}>Stories beyond the horizon.</h2>
                            <p className="small mb-4">Enter worlds shaped by fearless filmmakers, curated in cinematic detail and ready whenever you are.</p>

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
                        New to B.I.M Stream ? <Link to="/RegisterPage" className={styles.orangeLink}>Sign up</Link>
                    </div>

                    <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3">
                        <div className={`${styles.registerBox} w-100`}>
                            <p className={`${styles.tagOrange} mb-2`}>CONTINUE WATCHING</p>
                            <h1 className="h3 mb-2">Welcome back</h1>
                            <p className="small text-secondary mb-4">Log in to continue watching, pick up where you left off, and see what's new.</p>

                            <form onSubmit={send}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" className={`form-control ${styles.registerInput}`}
                                        value={user.email} onChange={handleChange} placeholder="Arthur@exemple.fr" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="position-relative">
                                        <input type={showPassword ? "text" : "password"} name="password" id="password"
                                            className={`form-control ${styles.registerInput} pe-5`}
                                            value={user.password} onChange={handleChange} placeholder="8+ characters" required />
                                        <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
                                            <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                                        </button>
                                    </div>
                                    <div className="text-end mt-1">
                                        <Link to="/forgot-password" className={`small ${styles.orangeLink}`}>Forgot password ?</Link>
                                    </div>
                                </div>

                                <div className="form-check mb-4">
                                    <input type="checkbox" name="checkbox" id="terms" className={`form-check-input ${styles.registerCheck}`} required />
                                    <label htmlFor="terms" className="form-check-label small text-secondary">
                                        &nbsp;Remember me
                                    </label>
                                </div>

                                <button type="submit" className={`btn w-100 ${styles.btnOrange}`}>Create an account <i className="fa-solid fa-arrow-right"></i></button>
                            </form>

                            <div className="d-flex align-items-center my-4">
                                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
                                <p className="px-3 mb-0 small text-secondary">Or register with Google or Apple</p>
                                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
                            </div>

                            <div className="d-flex gap-3">
                                <button type="button" className={`btn flex-fill ${styles.btnSocial}`}><i className="fa-brands fa-google me-2"></i>Google</button>
                                <button type="button" className={`btn flex-fill ${styles.btnSocial}`}><i className="fa-brands fa-apple me-2"></i>Apple</button>
                            </div>

                            <div className={`d-flex align-items-center gap-2 my-4 ${styles.secureBox}`}>
                                <span className={styles.secureIcon}><i className="fa-solid fa-check"></i></span>
                                <p className="mb-3">Secure sign-in. Your viewing history stays private and protected.</p>
                            </div>

                            <p className="small text-secondary p-4 mb-0">©  2026 B.I.M stream. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;