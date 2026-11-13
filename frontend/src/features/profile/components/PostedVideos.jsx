import styles from "./PostedVideos.module.css";

export function PostedVideos({ videos }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Posted videos</h3>
          <p className={styles.subtitle}>
            Public uploads · Visible on your channel
          </p>
        </div>
        <button type="button" className={styles.uploadBtn}>
          + Upload video
        </button>
      </div>

      <div className={styles.list}>
        {videos.map((video) => (
          <article key={video.id} className={styles.item}>
            <div className={styles.thumbnailWrapper}>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className={styles.thumbnail}
              />
              <span className={styles.duration}>{video.duration}</span>
            </div>

            <div className={styles.info}>
              <h4 className={styles.videoTitle}>{video.title}</h4>
              <p className={styles.meta}>
                {video.views} views · {video.publishedAt}
              </p>
              <div className={styles.badges}>
                <span className={styles.statusBadge}>{video.status}</span>
                {video.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>
            </div>

            <button
              type="button"
              className={styles.deleteBtn}
              aria-label={`Delete ${video.title}`}
            >
              Delete
            </button>
          </article>
        ))}
      </div>

      <p className={styles.footerNote}>
        Deleting a video or your account requires confirmation.
      </p>
    </section>
  );
}
