import styles from "./ProfileHeader.module.css";

export function ProfileHeader({ user }) {
  return (
    <section className={styles.card}>
      {/* Bannière supérieure + Badge date d'inscription */}
      <div className={styles.banner}>
        <img
          src={user.bannerUrl}
          alt="Profile cover"
          className={styles.bannerImage}
        />
        <span className={styles.memberBadge}>
          MEMBER SINCE {user.memberSince}
        </span>
      </div>

      {/* Informations principales & Boutons d'action */}
      <div className={styles.mainRow}>
        <div className={styles.identity}>
          <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />
          <div className={styles.userInfo}>
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.handle}>@{user.username}</p>
            <div className={styles.meta}>
              <span>{user.email}</span>
              <span>User ID · {user.id}</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnSecondary}>
            Edit profile
          </button>
          <div className={styles.bottomActions}>
            <button type="button" className={styles.btnSecondary}>
              Log out
            </button>
            <button type="button" className={styles.btnDanger}>
              Delete account
            </button>
          </div>
        </div>
      </div>

      {/* Barre de statistiques en bas de carte */}
      <div className={styles.statsBar}>
        <span>{user.stats.channelsFollowed} channels followed</span>
        <span>{user.stats.videosWatched} videos watched</span>
        <span>{user.stats.videosPosted} videos posted</span>
        {user.isHistoryPrivate && (
          <span className={styles.privateNote}>
            Your viewing history is private.
          </span>
        )}
      </div>
    </section>
  );
}
