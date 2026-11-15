import { useState } from "react";
import {
    BANNED_USERS, REPORTS, WEEKLY_STATS, RECENT_ACTIVITY, CURRENT_ADMIN,
    getModerationStats, getBanFilterCounts, isActiveBan, computeBanEnd,
} from "../../../mocks/moderation";
import StatCard from "../components/StatCard";
import FilterBar from "../components/FilterBar";
import BannedUserRow from "../components/BannedUserRow";
import BanForm from "../components/BanForm";
import ActivityItem from "../components/ActivityItem";

function ModerationPage() {
    return (
        <>
        <p>Administration / Moderation</p>
            <h4>Review community activity and manage access with care</h4>
            <StatCard />

            <h4>Banned Users</h4>
            <FilterBar />
            
            <div className="d-flex">
                <p className="m-5">Showing 5 of 5 records</p>
                <p className="m-5">Expired and lifted bans remain in the moderation history</p>
            <BannedUserRow />
            </div>

            <div className="d-flex">
                <BanForm className="m-5" />
                <ActivityItem className="m-5" />
            </div>

            <p>You're acting as B.I.M Admin • ADM-001, not as a community profile.</p>

        </>
    );
}
export default ModerationPage;