import { useState } from "react";
import {
    BANNED_USERS, REPORTS, WEEKLY_STATS, RECENT_ACTIVITY, CURRENT_ADMIN,
    getModerationStats, getBanFilterCounts, isActiveBan, computeBanEnd,
} from "../../../mocks/moderation.js";
import styles from "./ModerationPage.module.css";
import StatCard from "../components/StatCard";
import FilterBar from "../components/FilterBar";
import BannedUserRow from "../components/BannedUserRow";
import BanForm from "../components/BanForm";
import ActivityItem from "../components/ActivityItem";

function ModerationPage() {
    const [bans, setBans] = useState(BANNED_USERS);
    const [activity, setActivity] = useState(RECENT_ACTIVITY);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    // calculé à chaque rendu, donc à jour quand bans change
    const stats = getModerationStats(bans, REPORTS, WEEKLY_STATS);
    const counts = getBanFilterCounts(bans);

    const visibleBans = bans.filter((b) => {
        const matchFilter =
            filter === "all" ||
            (filter === "active" && isActiveBan(b)) ||
            (filter === "past" && !isActiveBan(b));
        const matchSearch = [b.user.name, b.user.handle, b.user.userId, b.reason]
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    function addBan({ userId, reason, days }) {
        const start = new Date();
        const end = computeBanEnd(start, days);
        const id = `BAN-${1100 + bans.length}`;

        const newBan = {
            id,
            user: { name: userId, handle: "", userId },
            start: start.toISOString(),
            end: end ? end.toISOString() : null,
            reason,
            status: days === null ? "permanent" : "active",
        };
        const newActivity = {
            id: `act-${Date.now()}`,
            type: "ban-created",
            title: `${userId} · ${id}`,
            description: reason,
            date: start.toISOString(),
            adminId: CURRENT_ADMIN.id,
        };
        setBans([newBan, ...bans]);
        setActivity([newActivity, ...activity]);
    }

    function unbanUser(id) {
        const ban = bans.find((b) => b.id === id);
        const now = new Date().toISOString();

        setBans(bans.map((b) => (b.id === id ? { ...b, status: "unbanned", end: now } : b)));
        setActivity([
            {
                id: `act-${Date.now()}`,
                type: "ban-lifted",
                title: `${ban.user.name} · ${id}`,
                description: "Access restored.",
                date: now,
                adminId: CURRENT_ADMIN.id,
            },
            ...activity,
        ]);
    }

    return (
        <div className={styles["moderation-page"]} data-bs-theme="dark">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <p className={`${styles["mod-muted"]} ${styles["mod-breadcrumb"]}`}>
                        Administration / Moderation
                    </p>
                    <p className={styles["mod-muted"]}>
                        Review community activity and manage access with care.
                    </p>
                </div>
                <span className={styles["mod-tag"]}>ADMIN WORKSPACE</span>
            </div>

            <div className={styles["mod-stats-grid"]}>
                {stats.map((s) => (
                    <StatCard
                        key={s.id}
                        label={s.label}
                        value={s.value}
                        hint={s.hint}
                        icon={s.icon}
                    />
                ))}
            </div>

            <section className={`${styles["mod-card"]} ${styles["mod-card-flush"]} mt-4`}>
                <div className="d-flex justify-content-between align-items-center p-4 pb-3">
                    <h4 className="mb-0">Banned users</h4>
                    <button className={styles["mod-link"]}>
                        Export records <i className="fa-solid fa-arrow-down ms-1"></i>
                    </button>
                </div>

                <div className="px-4">
                    <FilterBar
                        search={search}
                        onSearch={setSearch}
                        filter={filter}
                        onFilter={setFilter}
                        counts={counts}
                    />
                </div>

                <div className="table-responsive">
                    <table className={`table ${styles["mod-table"]}`}>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Ban ID</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleBans.map((ban) => (
                                <BannedUserRow key={ban.id} ban={ban} onUnban={unbanUser} />
                            ))}
                        </tbody>
                    </table>
                </div>
                {visibleBans.length === 0 && (
                    <p className={`p-4 mb-0 ${styles["mod-muted"]}`}>No records found.</p>
                )}

                <div className={`d-flex justify-content-between px-4 py-3 ${styles["mod-muted"]} ${styles["mod-footer"]}`}>
                    <small>Showing {visibleBans.length} of {bans.length} records</small>
                    <small>Expired and lifted bans remain in the moderation history</small>
                </div>
            </section>

            <div className={styles["mod-bottom-grid"]}>
                <BanForm onBan={addBan} />

                <div className={styles["mod-card"]}>
                    <h4 className="mb-4">Recent activity</h4>
                    <div>
                        {activity.map((a) => (
                            <ActivityItem
                                key={a.id}
                                type={a.type}
                                title={a.title}
                                description={a.description}
                                date={a.date}
                                adminId={a.adminId}
                            />
                        ))}
                    </div>
                    <a href="#" className={styles["mod-link"]}>
                        View full audit history <i className="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ModerationPage;