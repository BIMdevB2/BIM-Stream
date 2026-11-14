import { useState } from "react";
import { useVideoInteractions } from "../hooks/useVideoInteractions.js";
import CommentSection from "../components/CommentSection.jsx";
import UpNext from "../components/UpNext.jsx";
import VideoInfo from "../components/VideoInfo.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import { UP_NEXT_VIDEOS } from "../../../mocks/videos.js";
import styles from "../components/VideoPage.module.css";

function VideoPage() {
    const [shareStatus, setShareStatus] = useState("");
    const {
        addComment,
        commentCount,
        commentVotes,
        comments,
        isAutoplayEnabled,
        isFollowing,
        rating,
        toggleAutoplay,
        toggleCommentVote,
        toggleFollow,
        toggleRating,
        video,
        viewer,
    } = useVideoInteractions();

    async function shareVideo() {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: video.title,
                    url: window.location.href,
                });
                setShareStatus("Video shared.");
                return;
            }

            if (!navigator.clipboard?.writeText) {
                setShareStatus("Sharing is not supported in this browser.");
                return;
            }

            await navigator.clipboard.writeText(window.location.href);
            setShareStatus("Link copied to clipboard.");
        } catch (error) {
            setShareStatus(
                error instanceof Error
                    ? `Unable to share: ${error.message}`
                    : "Unable to share this video.",
            );
        }
    }

    return (
        <div className={styles.page}>
            <header className={styles.pageHeader}>
                <p className={styles.breadcrumb}>
                    Videos <span aria-hidden="true">/</span> {video.creator.name}{" "}
                    <span aria-hidden="true">/</span> Education
                </p>
            </header>

            <div className={styles.videoLayout}>
                <section className={styles.mainColumn} aria-label="Video and comments">
                    <VideoPlayer video={video} />
                    <VideoInfo
                        video={video}
                        rating={rating}
                        isFollowing={isFollowing}
                        onRate={toggleRating}
                        onToggleFollow={toggleFollow}
                        onShare={shareVideo}
                    />
                    <CommentSection
                        comments={comments}
                        commentCount={commentCount}
                        commentVotes={commentVotes}
                        viewer={viewer}
                        onAddComment={addComment}
                        onVote={toggleCommentVote}
                    />
                    <p className={styles.shareStatus} aria-live="polite">
                        {shareStatus}
                    </p>
                </section>
                <UpNext
                    videos={UP_NEXT_VIDEOS}
                    isAutoplayEnabled={isAutoplayEnabled}
                    onToggleAutoplay={toggleAutoplay}
                />
            </div>
        </div>
    );
}

export default VideoPage;
