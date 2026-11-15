import { useState } from "react";
import {
    BANNED_USERS, REPORTS, WEEKLY_STATS, RECENT_ACTIVITY, CURRENT_ADMIN,
    getModerationStats, getBanFilterCounts, isActiveBan, computeBanEnd,
} from "../../../mocks/moderation.js";
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
        <>
            <p>Administration / Moderation</p>
            <h4>Review community activity and manage access with care</h4>

            <div className="row g-3">
                {stats.map((s) => (
                    <div className="col-12 col-md-6 col-lg-3" key={s.id}>
                        <StatCard label={s.label} value={s.value} hint={s.hint} />
                    </div>
                ))}
            </div>

            <h4>Banned Users</h4>
            <FilterBar
                search={search}
                onSearch={setSearch}
                filter={filter}
                onFilter={setFilter}
                counts={counts}
            />

            <table className="table align-middle">
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
            {visibleBans.length === 0 && <p>No records found.</p>}

            <div className="d-flex">
                <p className="m-5">Showing {visibleBans.length} of {bans.length} records</p>
                <p className="m-5">Expired and lifted bans remain in the moderation history</p>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <BanForm onBan={addBan} />
                </div>
                <div className="col-lg-4">
                    <h4>Recent activity</h4>
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
            </div>

            <p>You're acting as {CURRENT_ADMIN.name} • {CURRENT_ADMIN.id}, not as a community profile.</p>
        </>
    );
}
export default ModerationPage;