import { formatDate, formatTime, isActiveBan } from "../../../mocks/moderation.js";
import styles from "../pages/ModerationPage.module.css";

const STATUS_LABELS = {
    active: "Active",
    permanent: "Permanent",
    expired: "Expired",
    unbanned: "Unbanned",
};

function BannedUserRow({ ban, onUnban }) {
    const { id, user, start, end, reason, status } = ban;

    return (
        <tr>
            <td>
                <strong>{user.name}</strong>
                <span className={styles["mod-sub"]}>{user.handle} · {user.userId}</span>
            </td>
            <td>{id}</td>
            <td>
                {formatDate(start)}
                <span className={styles["mod-sub"]}>{formatTime(start)} CEST</span>
            </td>
            <td>
                {end === null ? (
                    <>
                        No expiry
                        <span className={styles["mod-sub"]}>Permanent ban</span>
                    </>
                ) : (
                    <>
                        {formatDate(end)}
                        <span className={styles["mod-sub"]}>
                            {formatTime(end)} CEST{status === "unbanned" && " · Lifted"}
                        </span>
                    </>
                )}
            </td>
            <td>{reason}</td>
            <td>
                <span className={`${styles["mod-badge"]} ${styles[`mod-badge-${status}`]}`}>
                    {STATUS_LABELS[status]}
                </span>
            </td>
            <td>
                <button
                    className={`btn ${styles["mod-btn-outline"]}`}
                    disabled={!isActiveBan(ban)}
                    onClick={() => onUnban(id)}
                >
                    Unban
                </button>
            </td>
        </tr>
    );
}
export default BannedUserRow;