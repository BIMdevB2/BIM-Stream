import { formatDate, formatTime, CURRENT_ADMIN } from "../../../mocks/moderation.js";
import styles from "../pages/ModerationPage.module.css";

function ActivityItem({ type, title, description, date, adminId }) {
    return (
        <div className={styles["mod-activity-item"]}>
            <span
                className={`${styles["mod-badge"]} ${type === "ban-created" ? styles["mod-badge-active"] : styles["mod-badge-unbanned"]
                    }`}
            >
                {type === "ban-created" ? "BAN CREATED" : "BAN LIFTED"}
            </span>
            <h6 className="mt-3 mb-1">{title}</h6>
            <p className={`${styles["mod-muted"]} mb-1`}>{description}</p>
            <span className={styles["mod-sub"]}>
                {formatDate(date)}, {formatTime(date)} · {CURRENT_ADMIN.name} · {adminId}
            </span>
        </div>
    );
}
export default ActivityItem;