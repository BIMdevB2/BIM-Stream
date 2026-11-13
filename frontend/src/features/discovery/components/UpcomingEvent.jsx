import { useState } from "react";

function UpcomingEvent() {
    const [reminderSet, setReminderSet] = useState(false);

    return (
        <section className="discovery-event" aria-label="Upcoming event">
            <div className="discovery-event-time">
                <span>TONIGHT</span>
                <strong>21:00</strong>
            </div>
            <div className="discovery-event-copy">
                <h2>Cinema told by two.</h2>
                <p>
                    Sadie Adler × Dutch van der Linde · A duo live, your questions, their
                    behind-the-scenes.
                </p>
            </div>
            <button
                className="discovery-button discovery-button-quiet"
                type="button"
                aria-pressed={reminderSet}
                onClick={() => setReminderSet((isSet) => !isSet)}
            >
                <i
                    className={`fa-${reminderSet ? "solid" : "regular"} fa-bell`}
                    aria-hidden="true"
                />
                {reminderSet ? "Reminder set" : "Remind me"}
            </button>
        </section>
    );
}

export default UpcomingEvent;
