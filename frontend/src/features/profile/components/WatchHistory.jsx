import { useNavigate } from "react-router";
import styles from "./WatchHistory.module.css";

const PROGRESS_WIDTHS = ["100%", "38%", "74%", "100%"];

export function WatchHistory({ items, isExpanded = false, onViewAll }) {
  const navigate = useNavigate();
  const displayedItems = isExpanded ? items : items.slice(0, 3);

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
          {!isExpanded && items.length > 0 && (
            <button
              type="button"
              className={styles.viewAll}
              onClick={onViewAll}
            >
              View all →
            </button>
          )}
        </div>

        {displayedItems.length === 0 ? (
          <p className={styles.subtitle}>
            No videos watched yet. Start exploring to build your history.
          </p>
        ) : (
          <div className={styles.list}>
            {displayedItems.map((item, index) => (
              <article
                key={item.id}
                className={styles.item}
                onClick={() => navigate("/VideoPage")}
                style={{ cursor: "pointer" }}
              >
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
        )}
      </div>

      <p className={styles.footerNote}>
        Only you can see this list. Your place is saved automatically.
      </p>
    </section>
  );
}
