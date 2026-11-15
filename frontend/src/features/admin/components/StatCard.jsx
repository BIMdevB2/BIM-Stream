import styles from "../pages/ModerationPage.module.css";

function StatCard({ label, value, hint, icon }) {
    return (
        <div className={`${styles["mod-card"]} h-100`}>
            <div className="d-flex justify-content-between">
                <span className={styles["mod-muted"]}>{label}</span>
                <i className={`fa-solid ${icon} ${styles["mod-accent"]}`}></i>
            </div>
            <div className={styles["mod-stat-value"]}>{value}</div>
            <small className={styles["mod-muted"]}>{hint}</small>
        </div>
    );
}
export default StatCard;