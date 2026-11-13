import styles from "./auth.module.css";

function SocialButtons({ text }) {
    return (
        <>
            <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
                <p className="px-3 mb-0 small text-secondary">{text}</p>
                <div className="flex-grow-1"><hr className={`m-0 ${styles.divider}`} /></div>
            </div>

            <div className="d-flex gap-3">
                <button type="button" className={`btn flex-fill ${styles.btnSocial}`}><i className="fa-brands fa-google me-2"></i>Google</button>
                <button type="button" className={`btn flex-fill ${styles.btnSocial}`}><i className="fa-brands fa-apple me-2"></i>Apple</button>
            </div>
        </>
    );
}

export default SocialButtons;