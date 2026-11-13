import styles from "./ProfileHeader.module.css";

export function ProfileHeader({ user }) {
  return (
    <section className={styles.card}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${user.bannerUrl})` }}
      >
        <span className={styles.memberBadge}>
          MEMBER SINCE {user.memberSince}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.identity}>
          <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />
          <div>
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.handle}>@{user.username}</p>
            <div className={styles.metaRow}>
              <span>{user.email}</span>
              <span>User ID · {user.id}</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnSecondary}>
            Edit profile
          </button>
          <div className={styles.actionRow}>
            <button type="button" className={styles.btnSecondary}>
              Log out
            </button>
            <button type="button" className={styles.btnDanger}>
              Delete account
            </button>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <span>
          <strong>{user.stats.channelsFollowed}</strong> channels followed
        </span>
        <span>
          <strong>{user.stats.videosWatched}</strong> videos watched
        </span>
        <span>
          <strong>{user.stats.videosPosted}</strong> videos posted
        </span>
        {user.isHistoryPrivate && (
          <span className={styles.privateNote}>
            Your viewing history is private.
          </span>
        )}
      </div>
    </section>
  );
}
