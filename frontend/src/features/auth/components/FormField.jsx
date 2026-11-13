import { useState } from "react";
import styles from "./auth.module.css";

function FormField({ label, type = "text", name, value, onChange, placeholder, children }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const input = (
        <input
            type={isPassword && showPassword ? "text" : type}
            name={name}
            id={name}
            className={`form-control ${styles.registerInput} ${isPassword ? "pe-5" : ""}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
        />
    );

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>

            {isPassword ? (
                <div className="position-relative">
                    {input}
                    <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
                        <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                    </button>
                </div>
            ) : input}

            {children}
        </div>
    );
}

export default FormField;