import { useState } from "react";
import { useNavigate } from "react-router";
import AuthSplitLayout from "../components/AuthSplitLayout";
import FormField from "../components/FormField";
import SocialButtons from "../components/SocialButtons";
import styles from "../components/auth.module.css";

function RegisterPage() {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    function send(e) {
        e.preventDefault();
        console.log(user);
        setUser({ firstName: "", lastName: "", email: "", password: "" });
        navigate("/LoginPage");
    }

    return (
        <AuthSplitLayout
            image="/images/bg_RegisterPage.jpg"
            tag="B.I.M ORIGINAL"
            title="Your next world is waiting."
            text="Continue every story across devices, with personal picks waiting whenever you return."
            topText="Already have an account ?"
            topLink="/LoginPage"
            topLinkLabel="Log in"
            formTag="START WATCHING"
            formTitle="Create an account"
            formText="Join B.I.M Stream and make every night feel like opening night."
        >
            <form onSubmit={send}>
                <div className="row g-3">
                    <div className="col-6">
                        <FormField label="First name" name="firstName"
                            value={user.firstName} onChange={handleChange} placeholder="Arthur" />
                    </div>
                    <div className="col-6">
                        <FormField label="Last name" name="lastName"
                            value={user.lastName} onChange={handleChange} placeholder="Morgan" />
                    </div>
                </div>

                <FormField label="Email" type="email" name="email"
                    value={user.email} onChange={handleChange} placeholder="Arthur@exemple.fr" />

                <FormField label="Enter a password" type="password" name="password"
                    value={user.password} onChange={handleChange} placeholder="8+ characters" />

                <div className="form-check mb-4">
                    <input type="checkbox" name="terms" id="terms" className={`form-check-input ${styles.registerCheck}`} required />
                    <label htmlFor="terms" className="form-check-label small text-secondary">
                        &nbsp;I agree the <a href="#" className="text-white text-decoration-none">terms and conditions</a>
                    </label>
                </div>

                <button type="submit" className={`btn w-100 ${styles.btnOrange}`}>
                    Create an account <i className="fa-solid fa-arrow-right"></i>
                </button>
            </form>

            <SocialButtons text="Or register with Google or Apple" />

            <p className="small text-secondary p-4 mb-0"><span className={styles.dot}></span> Encrypted sign-up · Cancel anytime</p>
        </AuthSplitLayout>
    );
}

export default RegisterPage;