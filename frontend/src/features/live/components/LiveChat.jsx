import { useState } from "react";
import styles from "./LiveChat.module.css";
import { initialMessages } from "../../../mocks/initialMessages.js";
import { reactions } from "../../../mocks/reactions.js";

function LiveChat() {
  const [activeTab, setActiveTab] = useState("live");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [reactionCounts, setReactionCounts] = useState([12, 8, 24]);

  function handleSend(event) {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        author: "Arthur Morgan (Me)",
        avatar: "images/arthur.jpeg",
        text,
        time: new Intl.DateTimeFormat("en", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      },
    ]);
    setMessage("");
  }

  function handleReaction(index) {
    setReactionCounts((counts) =>
      counts.map((count, itemIndex) =>
        itemIndex === index ? count + 1 : count,
      ),
    );
  }

  return (
    <aside className={styles.panel} aria-label="Live chat">
      <header className={styles.header}>
        <h2>Live chat</h2>
        <span className={styles.moreButton} aria-hidden="true">
          <i className="fa-solid fa-ellipsis" aria-hidden="true" />
        </span>
      </header>

      <div className={styles.tabs} role="tablist" aria-label="Chat channel">
        <button
          id="live-chat-tab"
          className={`${styles.tab} ${activeTab === "live" ? styles.activeTab : ""}`}
          type="button"
          role="tab"
          aria-selected={activeTab === "live"}
          aria-controls="live-chat-panel"
          onClick={() => setActiveTab("live")}
        >
          <span className={styles.connectedDot} aria-hidden="true" />
          Live chat
        </button>
        <button
          id="community-chat-tab"
          className={`${styles.tab} ${activeTab === "community" ? styles.activeTab : ""}`}
          type="button"
          role="tab"
          aria-selected={activeTab === "community"}
          aria-controls="live-chat-panel"
          onClick={() => setActiveTab("community")}
        >
          Community chat
        </button>
      </div>

      <div
        className={styles.messages}
        id="live-chat-panel"
        role="tabpanel"
        aria-labelledby={activeTab === "live" ? "live-chat-tab" : "community-chat-tab"}
      >
        {activeTab === "live" ? (
          messages.map((chatMessage, index) => (
            <article className={styles.message} key={`${chatMessage.time}-${index}`}>
              <img src={chatMessage.avatar} alt="" />
              <div className={styles.messageBody}>
                <div className={styles.messageHeading}>
                  <strong className={chatMessage.isHost ? styles.hostName : ""}>
                    {chatMessage.author}
                  </strong>
                  <time>{chatMessage.time}</time>
                </div>
                <p>{chatMessage.text}</p>
              </div>
            </article>
          ))
        ) : (
          <p className={styles.emptyState}>
            Community chat is quiet for now. Join the live conversation!
          </p>
        )}
      </div>

      <div className={styles.reactionArea}>
        <span>React to the live</span>
        <div className={styles.reactions}>
          {reactions.map((reaction, index) => (
            <button
              type="button"
              key={reaction.emoji}
              aria-label={`${reaction.label} (${reactionCounts[index]})`}
              onClick={() => handleReaction(index)}
            >
              <span aria-hidden="true">{reaction.emoji}</span>
              <span>{reactionCounts[index]}</span>
            </button>
          ))}
        </div>
      </div>

      <form className={styles.composer} onSubmit={handleSend}>
        <label className={styles.srOnly} htmlFor="live-chat-message">
          Send a message
        </label>
        <input
          id="live-chat-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Send a message..."
          maxLength={300}
        />
        <div className={styles.composerActions}>
          <button
            type="button"
            className={styles.emojiButton}
            aria-label="Add a smile emoji"
            onClick={() => setMessage((currentMessage) => `${currentMessage}🙂`)}
          >
            <i className="fa-regular fa-face-smile" aria-hidden="true" />
          </button>
          <button className={styles.sendButton} type="submit" disabled={!message.trim()}>
            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            Send
          </button>
        </div>
        <p>Keep it kind. No spoilers without a warning.</p>
      </form>
    </aside>
  );
}

export default LiveChat;
