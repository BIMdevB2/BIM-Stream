import styles from "./auth.module.css";
import { useNavigate } from "react-router";

function SocialButtons({ text }) {

    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
                <p className="px-3 mb-0 small text-secondary">{text}</p>
                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
            </div>

            <div className="d-flex gap-3">
                <button type="button" className={`btn flex-fill ${styles.btnSocial}`} onClick={()=>navigate("/GoogleLogin")}><i className="fa-brands fa-google me-2"></i>Google</button>
                <button type="button" className={`btn flex-fill ${styles.btnSocial}`} onClick={()=>navigate("/AppleLogin")}><i className="fa-brands fa-apple me-2"></i>Apple</button>
            </div>
        </>
    );
}

export default SocialButtons;