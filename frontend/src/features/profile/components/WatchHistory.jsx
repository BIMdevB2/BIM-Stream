import styles from "./WatchHistory.module.css";

const PROGRESS_WIDTHS = ["100%", "38%", "74%", "100%"];

export function WatchHistory({ items }) {
  return (
    <section className={styles.card}>
      <div>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>History</h3>
            <p className={styles.subtitle}>
              Recently watched · Continue where you left off
            </p>
          </div>
          <button type="button" className={styles.viewAll}>
            View all →
          </button>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <article key={item.id} className={styles.item}>
              <div className={styles.thumbWrapper}>
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className={styles.thumbnail}
                />
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width: PROGRESS_WIDTHS[index] || "50%",
                    }}
                  />
                </div>
              </div>

              <div className={styles.info}>
                <h4 className={styles.videoTitle}>{item.title}</h4>
                <p className={styles.meta}>
                  {item.creator.username} · {item.watchedAt}
                </p>
                <span className={styles.status}>{item.statusText}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className={styles.footerNote}>
        Only you can see this list. Your place is saved automatically.
      </p>
    </section>
  );
}
