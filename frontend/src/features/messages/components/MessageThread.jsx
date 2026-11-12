import { Link } from 'react-router';
import styles from './MessageThread.module.css';

export default function MessageThread({
  conversation,
  currentUser,
  onDeleteConversation,
  children,
}) {
  if (!conversation) {
    return (
      <section className={`d-flex align-items-center justify-content-center h-100 ${styles.panel}`}>
        <p className={`mb-0 ${styles.mutedText}`}>Select a conversation to start messaging.</p>
      </section>
    );
  }

  const { user, messages, status, dateLabel } = conversation;

  return (
    <section className={`d-flex flex-column h-100 ${styles.panel}`}>
      <header className={`d-flex align-items-center justify-content-between px-3 py-2 ${styles.header}`}>
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <img
              src={user.avatar}
              alt={user.name}
              className={`rounded-circle ${styles.avatar}`}
            />
            {user.isOnline && (
              <span className={`position-absolute bottom-0 end-0 rounded-circle ${styles.onlineDot}`} />
            )}
          </div>
          <div>
            <div className="d-flex align-items-center gap-1">
              <h2 className="h6 mb-0 fw-semibold">{user.name}</h2>
              {user.isVerified && <span className={styles.verified}>✓</span>}
            </div>
            <p className={`mb-0 small ${styles.secondaryText}`}>
              {user.username} · {user.statusText}
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`btn btn-sm ${styles.deleteBtn}`}
          onClick={() => onDeleteConversation(conversation.id)}
        >
          Delete conversation
        </button>
      </header>

      <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">
        {dateLabel && (
          <span className={`align-self-center badge rounded-pill px-3 py-2 fw-normal ${styles.dateBadge}`}>
            {dateLabel}
          </span>
        )}

        {messages.map((msg) => {
          const isOwn = msg.senderId === currentUser.id;

          if (msg.type === 'live_invitation') {
            return (
              <div
                key={msg.id}
                className={`d-flex flex-column ${isOwn ? 'align-self-end' : 'align-self-start'} ${styles.msgRow}`}
              >
                <div className={`p-3 rounded-3 d-flex flex-column gap-1 ${styles.liveCard}`}>
                  <span className={`fw-bold ${styles.liveBadge}`}>{msg.badge}</span>
                  <h3 className="h6 mb-0 fw-semibold">{msg.liveTitle}</h3>
                  <p className={`mb-2 small ${styles.secondaryText}`}>{msg.liveSubtitle}</p>
                  <Link to="/live" className={`btn btn-sm fw-semibold ${styles.liveBtn}`}>
                    {msg.buttonLabel}
                  </Link>
                </div>
              </div>
            );
          }

          return (
            <div
              key={msg.id}
              className={`d-flex flex-column gap-1 ${isOwn ? 'align-self-end' : 'align-self-start'} ${styles.msgRow}`}
            >
              <div className={`px-3 py-2 rounded-3 ${isOwn ? styles.bubbleOwn : styles.bubbleOther}`}>
                <p className="mb-0">{msg.text}</p>
              </div>
              <span className={`${isOwn ? 'align-self-end' : ''} ${styles.timestamp}`}>
                {msg.time}
              </span>
            </div>
          );
        })}
      </div>

      <div className={`p-3 ${styles.footer}`}>
        {status === 'pending' ? (
          <p className={`mb-0 text-center small ${styles.secondaryText}`}>
            Accept this message request in the inbox to enable replies.
          </p>
        ) : (
          children
        )}
      </div>
    </section>
  );
}