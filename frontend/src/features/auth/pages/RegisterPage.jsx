import { useState } from "react";
import { Link } from "react-router";
import styles from "./auth.module.css";

function RegisterPage() {
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
                    <img src="/images/bg_RegisterPage.jpg" alt="Bg LoginPage" className={styles.registerBg} />
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
                            <p className={`${styles.tagOrange} mb-2`}><span className={styles.dot}></span> B.I.M ORIGINAL</p>
                            <h2 className={styles.registerTitle}>Your next world is waiting.</h2>
                            <p className="small mb-4">Continue every story across devices, with personal picks waiting whenever you return.</p>

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
                        Already have an account ? <Link to="/LoginPage" className={styles.orangeLink}>Log in</Link>
                    </div>

                    <div className="flex-grow-1 d-flex align-items-center justify-content-center px-3">
                        <div className={`${styles.registerBox} w-100`}>
                            <p className={`${styles.tagOrange} mb-2`}>START WATCHING</p>
                            <h1 className="h3 mb-2">Create an account</h1>
                            <p className="small text-secondary mb-4">Join B.I.M Stream and make every night feel like opening night.</p>

                            <form onSubmit={send}>
                                <div className="row g-3 mb-3">
                                    <div className="col-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" name="firstName" id="firstName" className={`form-control ${styles.registerInput}`}
                                            value={user.firstName} onChange={handleChange} placeholder="Arthur" required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input type="text" name="lastName" id="lastName" className={`form-control ${styles.registerInput}`}
                                            value={user.lastName} onChange={handleChange} placeholder="Morgan" required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" name="email" id="email" className={`form-control ${styles.registerInput}`}
                                        value={user.email} onChange={handleChange} placeholder="Arthur@exemple.fr" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Enter a password</label>
                                    <div className="position-relative">
                                        <input type={showPassword ? "text" : "password"} name="password" id="password"
                                            className={`form-control ${styles.registerInput} pe-5`}
                                            value={user.password} onChange={handleChange} placeholder="8+ characters" required />
                                        <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
                                            <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="form-check mb-4">
                                    <input type="checkbox" name="checkbox" id="terms" className={`form-check-input ${styles.registerCheck}`} required />
                                    <label htmlFor="terms" className="form-check-label small text-secondary">
                                        &nbsp;I agree the <a href="#" className="text-white text-decoration-none">terms and conditions</a>
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

                            <p className="small text-secondary p-4 mb-0"><span className={styles.dot}></span> Encrypted sign-up · Cancel anytime</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;