import {
    USER_PROFILE,
    WATCH_HISTORY,
    POSTED_VIDEOS,
} from '../../../mocks/profile';
import { ProfileHeader } from '../components/ProfileHeader';
import { WatchHistory } from '../components/WatchHistory';
import { PostedVideos } from '../components/PostedVideos';
import styles from './ProfilePage.module.css';

export function ProfilePage() {
    return (
        <div className={styles.page}>
            <ProfileHeader user={USER_PROFILE} />

            <div className={styles.grid}>
                <WatchHistory items={WATCH_HISTORY} />
                <PostedVideos videos={POSTED_VIDEOS} />
            </div>
        </div>
    );
}