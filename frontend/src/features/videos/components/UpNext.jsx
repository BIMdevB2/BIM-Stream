import { Link } from "react-router";
import styles from "./VideoPage.module.css";

function UpNext({ videos, isAutoplayEnabled, onToggleAutoplay }) {
    return (
        <aside className={styles.upNext} aria-labelledby="up-next-title">
            <div className={styles.upNextHeading}>
                <h2 id="up-next-title">Up next</h2>
                <label className={styles.autoplayToggle}>
                    <span>Autoplay</span>
                    <input
                        type="checkbox"
                        checked={isAutoplayEnabled}
                        onChange={onToggleAutoplay}
                    />
                    <span className={styles.toggleTrack} aria-hidden="true" />
                </label>
            </div>

            <div className={styles.recommendations}>
                {videos.map((video) => (
                    <article className={styles.recommendation} key={video.id}>
                        <div className={styles.thumbnailWrap}>
                            <img src={video.thumbnail} alt="" />
                            <span className={styles.duration}>{video.duration}</span>
                        </div>
                        <h3>{video.title}</h3>
                        <p className={styles.recommendationCreator}>{video.creator}</p>
                        <p className={styles.recommendationMeta}>
                            {video.views} views · {video.publishedAt}
                        </p>
                    </article>
                ))}
            </div>

            <section className={styles.discoverCard}>
                <h3>Keep your curiosity going.</h3>
                <p>
                    More ideas, tutorials, and behind-the-scenes from creators you follow.
                </p>
                <Link className={styles.exploreButton} to="/">
                    Explore videos <span aria-hidden="true">→</span>
                </Link>
            </section>
        </aside>
    );
}

export default UpNext;
