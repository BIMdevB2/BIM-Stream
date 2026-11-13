import { useState } from "react";
import styles from "./MessageThread.module.css";

export default function MessageThread({ conversation, currentUser, children }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { user, status, dateLabel, messages } = conversation;

  return (
    <div className={`d-flex flex-column h-100 ${styles.thread}`}>
      {/* Header */}
      <div
        className={`d-flex align-items-center justify-content-between px-4 py-3 ${styles.header}`}
      >
        <div className="d-flex align-items-center gap-3">
          <div className={styles.avatarWrap}>
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
            {user.online && <span className={styles.onlineDot} />}
          </div>
          <div>
            <div className="d-flex align-items-center gap-1 fw-semibold">
              <span>{user.name}</span>
              {user.verified && <span className={styles.verified}>✓</span>}
            </div>
            <div className={styles.subline}>
              {user.category || "Creation & cinema"} ·{" "}
              {user.online ? "Online now" : "Offline"}
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          {status === "accepted" && (
            <span className={styles.acceptedBadge}>Accepted</span>
          )}
          <button
            type="button"
            onClick={() => setShowDeleteModal(true)}
            className={`btn btn-sm ${styles.deleteBtn}`}
          >
            🗑 Delete conversation
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div
        className={`flex-grow-1 px-4 py-3 d-flex flex-column gap-3 ${styles.body}`}
      >
        <div className="text-center my-1">
          <span className={styles.datePill}>{dateLabel}</span>
        </div>

        {messages.map((msg) => {
          const isMe = msg.senderId === currentUser.id;
          const isInvite =
            msg.type === "live-invite" ||
            msg.type === "invite" ||
            Boolean(msg.invite) ||
            Boolean(msg.liveInvite);

          if (isInvite) {
            const invite = msg.invite || msg.liveInvite || msg;
            return (
              <div
                key={msg.id}
                className={`p-3 rounded-3 ${styles.inviteCard}`}
              >
                <span className={styles.inviteTag}>
                  {invite.tag || "LIVE INVITATION"}
                </span>
                <h3 className="h6 fw-bold mt-2 mb-1">
                  {invite.title || "Cinema told by two."}
                </h3>
                <p className={`small mb-3 ${styles.inviteMeta}`}>
                  {invite.subtitle ||
                    "Sadie Adler × Dutch van der Linde · Tonight at 21:00"}
                </p>
                <button
                  type="button"
                  className={`btn btn-sm fw-semibold px-3 ${styles.viewLiveBtn}`}
                >
                  ((•)) View live
                </button>
              </div>
            );
          }

          return (
            <div
              key={msg.id}
              className={`d-flex flex-column ${
                isMe ? "align-items-end" : "align-items-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-3 ${
                  isMe ? styles.bubbleMe : styles.bubbleThem
                }`}
              >
                <div>{msg.text}</div>
                <div
                  className={`mt-1 ${isMe ? styles.metaMe : styles.metaThem}`}
                >
                  {msg.time}
                  {isMe && msg.read ? " · Read ✓✓" : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Composer slot */}
      <div className={`px-4 py-3 ${styles.footer}`}>{children}</div>

      {/* Delete warning modal */}
      {showDeleteModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1050,
          }}
        >
          <div
            className="p-4 rounded-3"
            style={{
              backgroundColor: "var(--color-surface, #14181f)",
              border: "1px solid var(--color-border, #282e38)",
              color: "var(--color-text, #f5f6f8)",
              maxWidth: "400px",
              width: "90%",
            }}
          >
            <h3 className="h6 fw-bold mb-2">Attention</h3>
            <p className="small mb-4 text-secondary">
              Attention, vous allez supprimer votre compte.
            </p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="btn btn-sm fw-semibold px-4"
                style={{
                  backgroundColor: "var(--color-primary, #ff8a24)",
                  color: "#0b0d10",
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
