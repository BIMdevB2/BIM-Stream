import { useState } from "react";
import { useNavigate } from "react-router";
import {
  USER_PROFILE,
  WATCH_HISTORY,
  POSTED_VIDEOS,
} from "../../../mocks/profile";
import { ProfileHeader } from "../components/ProfileHeader";
import { WatchHistory } from "../components/WatchHistory";
import { PostedVideos } from "../components/PostedVideos";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  const showHistory = activeTab === "all" || activeTab === "history";
  const showVideos = activeTab === "all" || activeTab === "videos";

  if (!isLoggedIn) {
    return (
      <div className={styles.page}>
        <header className={styles.pageHeader}>
          <p className={styles.breadcrumb}>Your world / My profile</p>
          <h1 className={styles.pageTitle}>You are signed out.</h1>
          <p className={styles.pageSubtitle}>
            Log in to access your profile, watch history, and posted videos.
          </p>
          <button
            type="button"
            className={`${styles.tab} ${styles.tabActive}`}
            onClick={() => navigate("/LoginPage")}
          >
            Log in
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Your world / My profile</p>
        <h1 className={styles.pageTitle}>Your world, in one place.</h1>
        <p className={styles.pageSubtitle}>
          Pick up a story. Share a new one. Make this space yours.
        </p>
      </header>

      <ProfileHeader
        user={USER_PROFILE}
        onLogout={() => setIsLoggedIn(false)}
      />

      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${activeTab === "all" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("all")}
        >
          Overview
        </button>
        <button
          type="button"
          className={`${styles.tab} ${activeTab === "history" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          type="button"
          className={`${styles.tab} ${activeTab === "videos" ? styles.tabActive : ""}`}
          onClick={() => setActiveTab("videos")}
        >
          Posted videos · {POSTED_VIDEOS.length}
        </button>
      </div>

      <div
        className={styles.grid}
        style={activeTab !== "all" ? { gridTemplateColumns: "1fr" } : undefined}
      >
        {showHistory && (
          <WatchHistory
            items={WATCH_HISTORY}
            isExpanded={activeTab === "history"}
            onViewAll={() => setActiveTab("history")}
          />
        )}
        {showVideos && <PostedVideos videos={POSTED_VIDEOS} />}
      </div>
    </div>
  );
}
