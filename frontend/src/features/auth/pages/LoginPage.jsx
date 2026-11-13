import { useState } from "react";
import { Link } from "react-router";
import AuthSplitLayout from "../components/AuthSplitLayout";
import FormField from "../components/FormField";
import SocialButtons from "../components/SocialButtons";
import styles from "../components/auth.module.css";

function LoginPage() {
    const [user, setUser] = useState({ email: "", password: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    function send(e) {
        e.preventDefault();
        console.log(user);
        setUser({ email: "", password: "" });
    }

    return (
        <AuthSplitLayout
            image="/images/bg_LoginPage.jpg"
            tag="FEATURED THIS WEEK"
            title="Stories beyond the horizon."
            text="Enter worlds shaped by fearless filmmakers, curated in cinematic detail and ready whenever you are."
            topText="New to B.I.M Stream ?"
            topLink="/RegisterPage"
            topLinkLabel="Sign up"
            formTag="CONTINUE WATCHING"
            formTitle="Welcome back"
            formText="Log in to continue watching, pick up where you left off, and see what's new."
        >
            <form onSubmit={send}>
                <FormField label="Email" type="email" name="email"
                    value={user.email} onChange={handleChange} placeholder="Arthur@exemple.fr" />

                <FormField label="Password" type="password" name="password"
                    value={user.password} onChange={handleChange} placeholder="8+ characters">
                    <div className="text-end mt-1">
                        <Link to="/forgot-password" className={`small ${styles.orangeLink}`}>Forgot password ?</Link>
                    </div>
                </FormField>

                <div className="form-check mb-4">
                    <input type="checkbox" name="remember" id="remember" className={`form-check-input ${styles.registerCheck}`} />
                    <label htmlFor="remember" className="form-check-label small text-secondary">&nbsp;Remember me</label>
                </div>

                <button type="submit" className={`btn w-100 ${styles.btnOrange}`}>
                    Log In <i className="fa-solid fa-arrow-right"></i>
                </button>
            </form>

            <SocialButtons text="Or Continue with" />

            <div className={`d-flex align-items-center gap-2 my-4 ${styles.secureBox}`}>
                <span className={styles.secureIcon}><i className="fa-solid fa-check"></i></span>
                <p className="mb-0">Secure sign-in. Your viewing history stays private and protected.</p>
            </div>

            <p className="small text-secondary p-4 mb-0">© 2026 B.I.M stream. All rights reserved.</p>
        </AuthSplitLayout>
    );
}

export default LoginPage;