import { useState } from "react";
import LiveChat from "../components/LiveChat";
import StreamInfo from "../components/StreamInfo";
import styles from "../components/LivePage.module.css";
import { stream } from "../../../mocks/stream.js";

function LivePage() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [hasJoined, setHasJoined] = useState(true);
    const [isReminderSet, setIsReminderSet] = useState(false);

    return (
        <div className={styles.page}>
            <header className={styles.heading}>
                <p className={styles.breadcrumb}>Live / Sadie Adler / Beyond</p>
            </header>

            <div className={styles.content}>
                <section className={styles.mainColumn}>
                    <section className={styles.player} aria-label="Live stream player">
                        <img className={styles.playerImage} src={stream.image} alt="" />
                        <div className={styles.playerTop}>
                            <span className={styles.liveBadge}>
                                <span aria-hidden="true" />
                                LIVE
                            </span>
                            <span>{stream.viewers} viewers</span>
                        </div>
                        <div className={styles.playerBottom}>
                            <span className={styles.playerProgress} aria-hidden="true" />
                            <div className={styles.playerControls}>
                                <span aria-hidden="true">
                                    <i className="fa-solid fa-pause" />
                                </span>
                                <span aria-hidden="true">
                                    <i className="fa-solid fa-volume-high" />
                                </span>
                                <span className={styles.streamDuration}>Live edge · 00:42:18</span>
                                <span className={styles.playerSpacer} />
                                <span>1080p</span>
                                <span aria-hidden="true">
                                    <i className="fa-solid fa-gear" />
                                </span>
                                <span aria-hidden="true">
                                    <i className="fa-solid fa-expand" />
                                </span>
                            </div>
                        </div>
                    </section>

                    <StreamInfo
                        stream={stream}
                        isFollowing={isFollowing}
                        hasJoined={hasJoined}
                        onToggleFollow={() => setIsFollowing((value) => !value)}
                        onJoin={() => setHasJoined(true)}
                        onLeave={() => setHasJoined(false)}
                    />
                </section>

                <LiveChat />

                <section className={styles.upcoming} aria-label="Upcoming live event">
                    <div className={styles.eventTime}>
                        <span>TONIGHT</span>
                        <strong>21:00</strong>
                    </div>
                    <div className={styles.eventCopy}>
                        <h2>Cinema told by two.</h2>
                        <p>
                            Sadie Adler × Dutch van der Linde · A duo live, your questions,
                            their behind-the-scenes.
                        </p>
                    </div>
                    <button
                        type="button"
                        className={styles.reminderButton}
                        aria-pressed={isReminderSet}
                        onClick={() => setIsReminderSet((value) => !value)}
                    >
                        <i
                            className={`fa-solid ${isReminderSet ? "fa-check" : "fa-bell"}`}
                            aria-hidden="true"
                        />
                        {isReminderSet ? "Reminder set" : "Remind me"}
                    </button>
                </section>
            </div>
        </div>
    );
}

export default LivePage;
