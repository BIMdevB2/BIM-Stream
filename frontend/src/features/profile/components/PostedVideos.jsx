import styles from "./PostedVideos.module.css";

export function PostedVideos({ videos }) {
  const featuredVideos = videos.filter((video) => video.featured);
  const regularVideos = videos.filter((video) => !video.featured);

  return (
    <section className={styles.card}>
      <div>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Posted videos</h3>
            <p className={styles.subtitle}>
              Your stories, shared with the community.
            </p>
          </div>
          <button type="button" className={styles.uploadBtn}>
            + Upload video
          </button>
        </div>

        <div className={styles.featuredGrid}>
          {featuredVideos.map((video) => (
            <article key={video.id} className={styles.featuredCard}>
              <div className={styles.featuredThumbWrapper}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <span className={styles.duration}>{video.duration}</span>
              </div>

              <h4 className={styles.videoTitle}>{video.title}</h4>
              <p className={styles.creator}>{video.creator.username} ✓</p>
              <p className={styles.meta}>
                {video.views} views · {video.publishedAt}
              </p>

              <div className={styles.cardActions}>
                <span className={styles.statusBadge}>{video.status}</span>
                <button type="button" className={styles.deleteBtn}>
                  Delete video
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.regularList}>
          {regularVideos.map((video) => (
            <article key={video.id} className={styles.regularItem}>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className={styles.regularThumb}
              />
              <div className={styles.regularInfo}>
                <h4 className={styles.videoTitle}>{video.title}</h4>
                <p className={styles.meta}>
                  {video.views} views · {video.publishedAt} · {video.duration}
                </p>
              </div>
              <button type="button" className={styles.deleteBtn}>
                Delete video
              </button>
            </article>
          ))}
        </div>
      </div>

      <p className={styles.footerNote}>
        Deleting a video or your account requires confirmation. No changes have
        been made.
      </p>
    </section>
  );
}
