import { CURRENT_USER, MOCK_CONVERSATIONS } from '../../../mocks/conversations.js';
import ConversationList from '../components/ConversationList';
import MessageThread from '../components/MessageThread';
import MessageComposer from '../components/MessageComposer';
import styles from './MessagesPage.module.css';

export default function MessagesPage() {
  const activeConversation = MOCK_CONVERSATIONS[0];
  const firstName = activeConversation.user.name.split(' ')[0];

  return (
    <div className={styles.page}>
      <div className="d-flex align-items-end justify-content-between mb-4">
        <div>
          <p className={`mb-1 small ${styles.mutedText}`}>Your world / Messages</p>
          <h1 className="h3 mb-1 fw-bold">Keep the conversation going.</h1>
          <p className={`mb-0 small ${styles.secondaryText}`}>
            Your creators, your friends, your next collaboration.
          </p>
        </div>

        <button type="button" className={`btn btn-sm fw-semibold px-3 py-2 ${styles.newMsgBtn}`}>
          ✎ New message
        </button>
      </div>

      <div className={styles.shell}>
        <aside className={styles.sidebarCol}>
          <ConversationList
            conversations={MOCK_CONVERSATIONS}
            selectedId={activeConversation.id}
          />
        </aside>

        <section className={styles.threadCol}>
          <MessageThread
            conversation={activeConversation}
            currentUser={CURRENT_USER}
          >
            <MessageComposer recipientName={firstName} />
          </MessageThread>
        </section>
      </div>
    </div>
  );
}