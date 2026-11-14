import { useState } from "react";
import {
  CURRENT_USER,
  MOCK_CONVERSATIONS,
} from "../../../mocks/conversations.js";
import ConversationList from "../components/ConversationList";
import MessageThread from "../components/MessageThread";
import MessageComposer from "../components/MessageComposer";
import styles from "./MessagesPage.module.css";

export default function MessagesPage() {
  const [conversations, setConversations] = useState(MOCK_CONVERSATIONS);
  const [selectedId, setSelectedId] = useState(null);

  const activeConversation =
    conversations.find((c) => c.id === selectedId) || null;

  const firstName = activeConversation
    ? activeConversation.user.name.split(" ")[0]
    : "";

  function handleSelectConversation(id) {
    setSelectedId(id);
    setConversations((prev) =>
      prev.map((conv) => (conv.id === id ? { ...conv, unreadCount: 0 } : conv)),
    );
  }

  function handleAcceptRequest(id) {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id ? { ...conv, status: "accepted" } : conv,
      ),
    );
    setSelectedId(id);
  }

  function handleDeclineRequest(id) {
    setConversations((prev) => prev.filter((conv) => conv.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
    }
  }

  return (
    <div className={styles.page}>
      <div className="d-flex align-items-end justify-content-between mb-4">
        <div>
          <p className={`mb-1 small ${styles.mutedText}`}>
            Your world / Messages
          </p>
          <h1 className="h3 mb-1 fw-bold">Keep the conversation going.</h1>
          <p className={`mb-0 small ${styles.secondaryText}`}>
            Your creators, your friends, your next collaboration.
          </p>
        </div>

        <button
          type="button"
          className={`btn btn-sm fw-semibold px-3 py-2 ${styles.newMsgBtn}`}
        >
          ✎ New message
        </button>
      </div>

      <div className={styles.shell}>
        <aside className={styles.sidebarCol}>
          <ConversationList
            conversations={conversations}
            selectedId={selectedId}
            onSelectConversation={handleSelectConversation}
            onAcceptRequest={handleAcceptRequest}
            onDeclineRequest={handleDeclineRequest}
          />
        </aside>

        <section className={styles.threadCol}>
          {activeConversation ? (
            <MessageThread
              conversation={activeConversation}
              currentUser={CURRENT_USER}
            >
              <MessageComposer recipientName={firstName} />
            </MessageThread>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center p-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "72px",
                  height: "72px",
                  border: "2px solid var(--color-border, #282e38)",
                  fontSize: "28px",
                }}
              >
                ✉
              </div>
              <h2 className="h5 fw-bold mb-1">Your messages</h2>
              <p
                className={`small mb-3 ${styles.secondaryText}`}
                style={{ maxWidth: "320px" }}
              >
                Send private photos, live invites, and messages to a friend or
                creator.
              </p>
              <button
                type="button"
                className={`btn btn-sm fw-semibold px-3 py-2 ${styles.newMsgBtn}`}
              >
                Send message
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
