import { Link } from "react-router";
import { directMessages, liveInvitations } from "../../../mocks/discovery";

function CommunityPanel() {
    return (
        <section className="discovery-community" aria-labelledby="community-title">
            <div className="discovery-section-heading">
                <div>
                    <h2 id="community-title">DM & invitations</h2>
                    <p>Reply to private messages and join invited streams.</p>
                </div>
                <Link className="discovery-small-button" to="/MessagesPage">
                    View all
                </Link>
            </div>

            <div className="discovery-community-grid">
                <section className="discovery-community-card" aria-labelledby="messages-title">
                    <div className="discovery-community-card-heading">
                        <h3 id="messages-title">Direct messages</h3>
                        <span>3 new</span>
                    </div>
                    <ul className="discovery-message-list">
                        {directMessages.map((message) => (
                            <li key={message.name}>
                                <img className="discovery-avatar" src={message.avatar} alt="" />
                                <div>
                                    <strong>{message.name}</strong>
                                    <p>{message.message}</p>
                                </div>
                                <span>{message.time}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="discovery-community-card" aria-labelledby="invitations-title">
                    <div className="discovery-community-card-heading">
                        <h3 id="invitations-title">Live invitations</h3>
                        <span>2 pending</span>
                    </div>
                    <ul className="discovery-invitation-list">
                        {liveInvitations.map((invitation) => (
                            <li key={invitation.name}>
                                <img className="discovery-avatar" src={invitation.avatar} alt="" />
                                <div>
                                    <strong>{invitation.name}</strong>
                                    <p>{invitation.details}</p>
                                </div>
                                <time>{invitation.time}</time>
                                <Link className="discovery-small-button" to="/VideoPage">
                                    Join
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default CommunityPanel;
