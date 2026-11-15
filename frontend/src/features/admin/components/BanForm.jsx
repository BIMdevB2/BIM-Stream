import { useState } from "react";
import {
    BAN_FORM_DEFAULTS, DURATION_OPTIONS, computeBanEnd, formatDate, formatTime,
} from "../../../mocks/moderation.js";

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
        <form onSubmit={handleSubmit}>
            <h4>Ban a user</h4>
            <p>Restrict a community account. An audit record is created for every action.</p>

            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label" htmlFor="userId">User ID</label>
                    <input
                        id="userId"
                        className="form-control"
                        name="userId"
                        placeholder="USR-0847"
                        value={form.userId}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="duration">Duration</label>
                    <select
                        id="duration"
                        className="form-select"
                        name="duration"
                        value={form.duration}
                        onChange={handleChange}
                    >
                        {DURATION_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Start</label>
                    <input
                        className="form-control"
                        readOnly
                        value={`${formatDate(start)} · ${formatTime(start)}`}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">End</label>
                    <input
                        className="form-control"
                        readOnly
                        value={end ? `${formatDate(end)} · ${formatTime(end)}` : "No expiry"}
                    />
                </div>

                <div className="col-12">
                    <label className="form-label" htmlFor="reason">Reason</label>
                    <input
                        id="reason"
                        className="form-control"
                        name="reason"
                        placeholder="Repeated harassment after a warning"
                        value={form.reason}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-warning mt-3">Ban user</button>
        </form>
    );
}
export default BanForm;