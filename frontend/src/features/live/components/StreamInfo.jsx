import styles from "./StreamInfo.module.css";

function StreamInfo({
  stream,
  isFollowing,
  hasJoined,
  onToggleFollow,
  onJoin,
  onLeave,
}) {
  return (
    <section className={styles.info} aria-label="Stream information">
      <div className={styles.streamHeading}>
        <div>
          <span className={styles.category}>{stream.category}</span>
          <h2>{stream.title}</h2>
        </div>
        <span className={styles.startedAt}>Started Oct 10, 2026 at 18:00 · CEST</span>
      </div>

      <p className={styles.description}>{stream.description}</p>

      <div className={styles.stats} aria-label="Stream statistics">
        <span>
          <i className="fa-solid fa-user-group" aria-hidden="true" />
          {stream.viewers} watching
        </span>
        <span>{stream.totalViews}</span>
        <span>French · 1080p</span>
      </div>

      <div className={styles.creator}>
        <img src={stream.avatar} alt="" />
        <div className={styles.creatorCopy}>
          <strong>
            {stream.creator}
            <i className="fa-solid fa-circle-check" aria-label="Verified creator" />
          </strong>
          <span>Creation & cinema · 42.8K followers</span>
        </div>
        <button
          type="button"
          className={`${styles.followButton} ${isFollowing ? styles.isFollowing : ""}`}
          aria-pressed={isFollowing}
          onClick={onToggleFollow}
        >
          <i className={`fa-solid ${isFollowing ? "fa-check" : "fa-heart"}`} aria-hidden="true" />
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div className={styles.joinPanel}>
        <div className={styles.joinCopy}>
          <strong>
            <i
              className={`fa-regular ${hasJoined ? "fa-circle-check" : "fa-circle"}`}
              aria-hidden="true"
            />
            {hasJoined ? "You’re in the live" : "You’re watching the live"}
          </strong>
          <span>
            {hasJoined
              ? "You’re connected. Enjoy the stream and join the conversation."
              : "Join the live to send messages and reactions."}
          </span>
        </div>
        {hasJoined ? (
          <button type="button" className={styles.secondaryButton} disabled>
            <i className="fa-solid fa-check" aria-hidden="true" />
            Joined
          </button>
        ) : (
          <button type="button" className={styles.secondaryButton} onClick={onJoin}>
            <i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true" />
            Join live
          </button>
        )}
        <button type="button" className={styles.leaveButton} onClick={onLeave}>
          <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true" />
          Leave live
        </button>
      </div>

    </section>
  );
}

export default StreamInfo;
