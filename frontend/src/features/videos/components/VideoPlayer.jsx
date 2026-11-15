import styles from "./VideoPage.module.css";

function VideoPlayer({ video }) {
    return (
        <div
            className={styles.player}
            role="img"
            aria-label={`Aperçu de la vidéo : ${video.title}. Le fichier vidéo n'est pas encore disponible.`}
            style={{ backgroundImage: `url("${video.thumbnail}")` }}
        >
            <div className={styles.playerTop}>
                <span className={styles.playerBadge}>REPLAY</span>
                <span>1080p · HD</span>
            </div>
            <div className={styles.playerBottom} aria-hidden="true">
                <span className={styles.playerControls}>II</span>
                <span className={styles.playerControls}>◖</span>
                <span className={styles.playerTime}>
                    {video.currentTime} / {video.duration}
                </span>
                <span className={styles.playerSpacer} />
                <span>1080p</span>
                <span className={styles.playerControls}>⚙</span>
                <span className={styles.playerControls}>⛶</span>
            </div>
            <div className={styles.progressTrack} aria-hidden="true">
                <span />
            </div>
        </div>
    );
}

export default VideoPlayer;
