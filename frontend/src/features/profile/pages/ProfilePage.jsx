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
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Your world / My profile</p>
        <h1 className={styles.pageTitle}>Your world, in one place.</h1>
        <p className={styles.pageSubtitle}>
          Pick up a story. Share a new one. Make this space yours.
        </p>
      </header>

      <ProfileHeader user={USER_PROFILE} />

      <div className={styles.tabs}>
        <button type="button" className={`${styles.tab} ${styles.tabActive}`}>
          History
        </button>
        <button type="button" className={styles.tab}>
          Posted videos · {POSTED_VIDEOS.length}
        </button>
      </div>

      <div className={styles.grid}>
        <WatchHistory items={WATCH_HISTORY} />
        <PostedVideos videos={POSTED_VIDEOS} />
      </div>
    </div>
  );
}
