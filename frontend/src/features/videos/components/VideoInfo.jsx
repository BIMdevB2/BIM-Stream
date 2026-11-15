import styles from "./VideoPage.module.css";

function VideoInfo({
    video,
    rating,
    isFollowing,
    onRate,
    onToggleFollow,
    onShare,
}) {
    return (
        <section className={styles.videoInfo} aria-label="Video information">
            <span className={styles.category}>{video.category}</span>
            <div className={styles.videoHeading}>
                <div>
                    <h2 className={styles.videoTitle}>{video.title}</h2>
                    <p className={styles.videoMeta}>
                        {video.views} views · Published {video.publishedAt}
                    </p>
                </div>
                <div className={styles.ratingActions}>
                    <button
                        className={`${styles.actionButton} ${styles.primaryAction} ${rating === "like" ? styles.selectedAction : ""}`}
                        type="button"
                        aria-pressed={rating === "like"}
                        onClick={() => onRate("like")}
                    >
                        <span aria-hidden="true">👍</span>
                        Like · {video.likes + (rating === "like" ? 1 : 0)}
                    </button>
                    <button
                        className={`${styles.actionButton} ${rating === "dislike" ? styles.selectedAction : ""}`}
                        type="button"
                        aria-pressed={rating === "dislike"}
                        onClick={() => onRate("dislike")}
                    >
                        <span aria-hidden="true">👎</span>
                        Dislike · {video.dislikes + (rating === "dislike" ? 1 : 0)}
                    </button>
                </div>
            </div>

            <div className={styles.creatorRow}>
                <img className={styles.avatar} src={video.creator.avatar} alt="" />
                <div className={styles.creatorDetails}>
                    <strong>{video.creator.name}</strong>
                    <span>{video.creator.subtitle}</span>
                </div>
                <div className={styles.creatorActions}>
                    <button
                        className={`${styles.actionButton} ${styles.followButton}`}
                        type="button"
                        aria-pressed={isFollowing}
                        onClick={onToggleFollow}
                    >
                        <span aria-hidden="true">{isFollowing ? "✓" : "♡"}</span>
                        {isFollowing ? "Following" : "Follow channel"}
                    </button>
                    <button className={styles.actionButton} type="button" onClick={onShare}>
                        <span aria-hidden="true">↗</span>
                        Share
                    </button>
                </div>
            </div>

            <p className={styles.description}>
                {video.description}
                <span className={styles.descriptionMeta}>
                    00:00 The idea · 04:12 Building a script · 08:42 The setup · 17:30
                    Editing the story
                </span>
            </p>
        </section>
    );
}

export default VideoInfo;
