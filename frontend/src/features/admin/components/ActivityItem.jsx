import { formatDate, formatTime, CURRENT_ADMIN } from "../../../mocks/moderation.js";

function ActivityItem({ type, title, description, date, adminId }) {
    return (
        <div className="mb-3">
            <span className="badge text-bg-secondary">
                {type === "ban-created" ? "BAN CREATED" : "BAN LIFTED"}
            </span>
            <h6 className="mt-2">{title}</h6>
            <p className="mb-1">{description}</p>
            <small>
                {formatDate(date)}, {formatTime(date)} · {CURRENT_ADMIN.name} · {adminId}
            </small>
        </div>
    );
}
export default ActivityItem;