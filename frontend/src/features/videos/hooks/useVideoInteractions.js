import { useState } from "react";
import { CURRENT_VIDEO, CURRENT_VIEWER, INITIAL_COMMENTS } from "../../../mocks/videos.js";

export function useVideoInteractions() {
    const [rating, setRating] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
    const [commentVotes, setCommentVotes] = useState({});
    const [comments, setComments] = useState(INITIAL_COMMENTS);
    const [commentCount, setCommentCount] = useState(128);

    function toggleRating(nextRating) {
        setRating((currentRating) =>
            currentRating === nextRating ? null : nextRating,
        );
    }

    function toggleCommentVote(commentId, nextVote) {
        setCommentVotes((votes) => ({
            ...votes,
            [commentId]: votes[commentId] === nextVote ? null : nextVote,
        }));
    }

    function addComment(text) {
        const trimmedText = text.trim();
        if (!trimmedText) {
            return false;
        }

        setComments((currentComments) => [
            {
                id: `comment-${Date.now()}`,
                author: CURRENT_VIEWER.name,
                avatar: CURRENT_VIEWER.avatar,
                date: "Just now",
                text: trimmedText,
                likes: 0,
                dislikes: 0,
            },
            ...currentComments,
        ]);
        setCommentCount((count) => count + 1);
        return true;
    }

    return {
        comments,
        commentCount,
        commentVotes,
        isAutoplayEnabled,
        isFollowing,
        rating,
        toggleAutoplay: () => setIsAutoplayEnabled((enabled) => !enabled),
        toggleCommentVote,
        toggleFollow: () => setIsFollowing((following) => !following),
        toggleRating,
        addComment,
        video: CURRENT_VIDEO,
        viewer: CURRENT_VIEWER,
    };
}
