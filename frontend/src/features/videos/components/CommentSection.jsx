import { useState } from "react";
import styles from "./VideoPage.module.css";

function CommentSection({
    comments,
    commentCount,
    commentVotes,
    viewer,
    onAddComment,
    onVote,
}) {
    const [draft, setDraft] = useState("");
    const [showAllComments, setShowAllComments] = useState(false);
    const [sortNewestFirst, setSortNewestFirst] = useState(true);
    const visibleComments = showAllComments ? comments : comments.slice(0, 2);
    const orderedComments = sortNewestFirst
        ? visibleComments
        : [...visibleComments].reverse();

    function handleSubmit(event) {
        event.preventDefault();
        if (onAddComment(draft)) {
            setDraft("");
        }
    }

    function replyTo(author) {
        setDraft((currentDraft) =>
            currentDraft ? `${currentDraft} @${author} ` : `@${author} `,
        );
        document.getElementById("comment-input")?.focus();
    }

    return (
        <section className={styles.comments} aria-labelledby="comments-title">
            <div className={styles.commentsHeading}>
                <h2 id="comments-title">Comments · {commentCount}</h2>
                <button
                    className={styles.sortButton}
                    type="button"
                    onClick={() => setSortNewestFirst((newestFirst) => !newestFirst)}
                >
                    {sortNewestFirst ? "Newest first" : "Oldest first"}{" "}
                    <span aria-hidden="true">⌄</span>
                </button>
            </div>

            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <img className={styles.avatar} src={viewer.avatar} alt="" />
                <div className={styles.commentFormBody}>
                    <label className={styles.visuallyHidden} htmlFor="comment-input">
                        Share your thoughts on this video
                    </label>
                    <input
                        id="comment-input"
                        value={draft}
                        onChange={(event) => setDraft(event.target.value)}
                        placeholder="Share your thoughts on this video..."
                    />
                    <button
                        className={styles.postButton}
                        type="submit"
                        disabled={!draft.trim()}
                    >
                        <span aria-hidden="true">➤</span> Post comment
                    </button>
                </div>
            </form>

            <div className={styles.commentList}>
                {orderedComments.map((comment) => {
                    const vote = commentVotes[comment.id];
                    return (
                        <article className={styles.comment} key={comment.id}>
                            <img className={styles.avatar} src={comment.avatar} alt="" />
                            <div className={styles.commentBody}>
                                <p className={styles.commentAuthor}>
                                    <strong>{comment.author}</strong>
                                    <span>{comment.date}</span>
                                </p>
                                <p className={styles.commentText}>{comment.text}</p>
                                <div className={styles.commentActions}>
                                    <button
                                        className={vote === "like" ? styles.commentVoteActive : ""}
                                        type="button"
                                        aria-pressed={vote === "like"}
                                        onClick={() => onVote(comment.id, "like")}
                                    >
                                        <span aria-hidden="true">👍</span>
                                        Like · {comment.likes + (vote === "like" ? 1 : 0)}
                                    </button>
                                    <button
                                        className={vote === "dislike" ? styles.commentVoteActive : ""}
                                        type="button"
                                        aria-pressed={vote === "dislike"}
                                        onClick={() => onVote(comment.id, "dislike")}
                                    >
                                        <span aria-hidden="true">👎</span>
                                        Dislike · {comment.dislikes + (vote === "dislike" ? 1 : 0)}
                                    </button>
                                    <button type="button" onClick={() => replyTo(comment.author)}>
                                        Reply
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            {comments.length > 2 && (
                <button
                    className={styles.showMore}
                    type="button"
                    aria-expanded={showAllComments}
                    onClick={() => setShowAllComments((showAll) => !showAll)}
                >
                    {showAllComments ? "Show fewer comments" : "Show more comments"}{" "}
                    <span aria-hidden="true">{showAllComments ? "⌃" : "⌄"}</span>
                </button>
            )}
        </section>
    );
}

export default CommentSection;
