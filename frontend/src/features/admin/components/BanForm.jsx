import { useState } from "react";
import {
    BAN_FORM_DEFAULTS, DURATION_OPTIONS, CURRENT_ADMIN, computeBanEnd, formatDate, formatTime,
} from "../../../mocks/moderation.js";
import styles from "../pages/ModerationPage.module.css";

function BanForm({ onBan }) {
    const [form, setForm] = useState(BAN_FORM_DEFAULTS);

    const option = DURATION_OPTIONS.find((o) => o.value === form.duration);
    const start = new Date();
    const end = computeBanEnd(start, option.days);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (form.userId.trim() === "" || form.reason.trim() === "") return;

        onBan({
            userId: form.userId.trim(),
            reason: form.reason.trim(),
            days: option.days,
        });
        setForm(BAN_FORM_DEFAULTS);
    }

    return (
        <form className={`${styles["mod-card"]} h-100`} onSubmit={handleSubmit}>
            <h4>Ban a user</h4>
            <p className={styles["mod-muted"]}>
                Restrict a community account. An audit record is created for every action.
            </p>

            <div className={styles["mod-form-grid"]}>
                <div>
                    <label className={styles["mod-label"]} htmlFor="userId">User ID</label>
                    <div className={styles["mod-field"]}>
                        <i className="fa-regular fa-user"></i>
                        <input
                            id="userId"
                            className={`form-control ${styles["mod-input"]}`}
                            name="userId"
                            placeholder="USR-0847"
                            value={form.userId}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label className={styles["mod-label"]} htmlFor="duration">Duration</label>
                    <select
                        id="duration"
                        className={`form-select ${styles["mod-input"]}`}
                        name="duration"
                        value={form.duration}
                        onChange={handleChange}
                    >
                        {DURATION_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className={styles["mod-label"]}>Start</label>
                    <div className={styles["mod-field"]}>
                        <i className="fa-regular fa-calendar"></i>
                        <input
                            className={`form-control ${styles["mod-input"]}`}
                            readOnly
                            value={`${formatDate(start)} · ${formatTime(start)}`}
                        />
                    </div>
                </div>
                <div>
                    <label className={styles["mod-label"]}>End</label>
                    <div className={styles["mod-field"]}>
                        <i className="fa-regular fa-calendar"></i>
                        <input
                            className={`form-control ${styles["mod-input"]}`}
                            readOnly
                            value={end ? `${formatDate(end)} · ${formatTime(end)}` : "No expiry"}
                        />
                    </div>
                </div>

                <div className={styles["mod-span-2"]}>
                    <label className={styles["mod-label"]} htmlFor="reason">Reason</label>
                    <input
                        id="reason"
                        className={`form-control ${styles["mod-input"]}`}
                        name="reason"
                        placeholder="Repeated harassment after a warning"
                        value={form.reason}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
                <small className={styles["mod-muted"]}>
                    You're acting as {CURRENT_ADMIN.name} · {CURRENT_ADMIN.id}, not as a community profile.
                </small>
                <button type="submit" className={`btn ${styles["mod-btn-primary"]}`}>
                    <i className="fa-solid fa-ban me-2"></i>Ban user
                </button>
            </div>
        </form>
    );
}
export default BanForm;