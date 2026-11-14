import { useState } from "react";
import styles from "./MessageComposer.module.css";

export default function MessageComposer({ recipientName = "Sadie" }) {
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!text.trim()) return;
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center gap-2">
        <button
          type="button"
          className={`btn btn-sm ${styles.attachBtn}`}
          aria-label="Attach file"
        >
          📎
        </button>
        <input
          type="text"
          className={`form-control form-control-sm ${styles.input}`}
          placeholder={`Write a message to ${recipientName}...`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className={`btn btn-sm fw-semibold px-3 ${styles.sendBtn}`}
        >
          ➤ Send
        </button>
      </div>
      <p className={`mb-0 ms-4 ${styles.hint}`}>
        Enter to send · Shift + Enter for a new line · Private conversation
      </p>
    </form>
  );
}
