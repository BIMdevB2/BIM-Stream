import { useState } from "react";
import styles from "./ConversationList.module.css";

export default function ConversationList({
  conversations,
  selectedId,
  onSelectConversation,
  onAcceptRequest,
  onDeclineRequest,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const matchesSearch = (conv) => {
    if (!normalizedQuery) return true;
    return (
      conv.user.name.toLowerCase().includes(normalizedQuery) ||
      conv.user.handle.toLowerCase().includes(normalizedQuery) ||
      conv.lastMessage.text.toLowerCase().includes(normalizedQuery)
    );
  };

  const acceptedList = conversations.filter(
    (c) => c.status === "accepted" && matchesSearch(c),
  );
  const pendingList = conversations.filter(
    (c) => c.status === "pending" && matchesSearch(c),
  );

  const totalPendingCount = conversations.filter(
    (c) => c.status === "pending",
  ).length;

  const totalUnread = conversations
    .filter((c) => c.status === "accepted")
    .reduce((acc, c) => acc + (c.unreadCount || 0), 0);

  return (
    <aside className={`d-flex flex-column h-100 p-3 gap-3 ${styles.sidebar}`}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="h6 mb-0 fw-semibold">Inbox</h2>
        <span className={`badge rounded-pill px-2 py-1 ${styles.unreadBadge}`}>
          {totalUnread} unread
        </span>
      </div>

      <div
        className={`d-flex align-items-center gap-2 px-3 py-2 rounded-3 ${styles.searchBox}`}
      >
        <span className={styles.mutedText}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search messages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="btn btn-sm p-0 border-0 text-secondary"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className="d-flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`btn btn-sm fw-medium ${styles.tabBtn} ${
            activeTab === "all" ? styles.tabActive : ""
          }`}
        >
          All conversations
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("requests")}
          className={`btn btn-sm fw-medium ${styles.tabBtn} ${
            activeTab === "requests" ? styles.tabActive : ""
          }`}
        >
          Requests · {totalPendingCount}
        </button>
      </div>

      {activeTab === "all" && (
        <div className="d-flex flex-column gap-2">
          {acceptedList.length > 0 ? (
            acceptedList.map((conv) => {
              const isSelected = conv.id === selectedId;
              return (
                <div
                  key={conv.id}
                  onClick={() => onSelectConversation?.(conv.id)}
                  className={`d-flex align-items-center gap-3 p-2 rounded-3 ${
                    styles.convItem
                  } ${isSelected ? styles.convItemActive : ""}`}
                >
                  <div className="position-relative flex-shrink-0">
                    <img
                      src={conv.user.avatar}
                      alt={conv.user.name}
                      className={`rounded-circle ${styles.avatar}`}
                    />
                    {conv.user.online && (
                      <span
                        className={`position-absolute bottom-0 end-0 rounded-circle ${styles.onlineDot}`}
                      />
                    )}
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fw-semibold small text-truncate">
                        {conv.user.name}
                      </span>
                      <span className={styles.timeText}>
                        {conv.lastMessage.time}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span
                        className={`small text-truncate ${styles.secondaryText}`}
                      >
                        {conv.lastMessage.text}
                      </span>
                      {conv.unreadCount > 0 && (
                        <span className={`fw-bold ${styles.unreadCount}`}>
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className={`small mb-0 px-1 ${styles.secondaryText}`}>
              No conversations found.
            </p>
          )}
        </div>
      )}

      {pendingList.length > 0 && (
        <div
          className={`${
            activeTab === "all" ? `mt-2 pt-3 ${styles.requestSection}` : ""
          } d-flex flex-column gap-2`}
        >
          {pendingList.map((req) => (
            <div
              key={req.id}
              className={`p-3 rounded-3 d-flex flex-column gap-2 ${styles.requestCard}`}
            >
              <div className="d-flex align-items-center justify-content-between">
                <span className="small fw-semibold">Message request</span>
                <span className={`badge ${styles.pendingBadge}`}>PENDING</span>
              </div>

              <div className="d-flex align-items-center gap-2">
                <img
                  src={req.user.avatar}
                  alt={req.user.name}
                  className={`rounded-circle ${styles.requestAvatar}`}
                />
                <div>
                  <p className="mb-0 small fw-semibold">{req.user.name}</p>
                  <p className={`mb-0 ${styles.timeText}`}>{req.dateLabel}</p>
                </div>
              </div>

              <p className={`mb-0 small ${styles.secondaryText}`}>
                {req.lastMessage.text}
              </p>
              <p className={`mb-1 ${styles.hintText}`}>
                Accept to start chatting. This request is not an active
                conversation.
              </p>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`btn btn-sm px-3 fw-semibold ${styles.acceptBtn}`}
                  onClick={() => onAcceptRequest?.(req.id)}
                >
                  ✓ Accept
                </button>
                <button
                  type="button"
                  className={`btn btn-sm px-3 fw-semibold ${styles.declineBtn}`}
                  onClick={() => onDeclineRequest?.(req.id)}
                >
                  ✕ Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "requests" && pendingList.length === 0 && (
        <p className={`small mb-0 px-1 ${styles.secondaryText}`}>
          No pending message requests.
        </p>
      )}

      <p className={`mb-0 mt-auto ${styles.hintText}`}>
        Only accepted conversations can send you new private messages.
      </p>
    </aside>
  );
}
