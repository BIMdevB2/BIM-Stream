import styles from "./MessageComposer.module.css";

export default function MessageComposer({ recipientName = "Sadie" }) {
  return (
    <div className="d-flex flex-column gap-2">
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
          readOnly
        />
        <button
          type="button"
          className={`btn btn-sm fw-semibold px-3 ${styles.sendBtn}`}
        >
          ➤ Send
        </button>
      </div>
      <p className={`mb-0 ms-4 ${styles.hint}`}>
        Enter to send · Shift + Enter for a new line · Private conversation
      </p>
    </div>
  );
}
