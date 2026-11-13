import { Link } from "react-router";

function LiveStreams({ streams }) {
    return (
        <section className="discovery-section" aria-labelledby="live-now-title">
            <div className="discovery-section-heading">
                <h2 id="live-now-title">Live now</h2>
                <Link to="/VideoPage">
                    All live streams <span aria-hidden="true">→</span>
                </Link>
            </div>

            {streams.length > 0 ? (
                <div className="discovery-stream-grid">
                    {streams.map((stream) => (
                        <article className="discovery-stream-card" key={stream.id}>
                            <Link
                                className="discovery-stream-thumbnail"
                                to="/VideoPage"
                                aria-label={`Watch ${stream.title}`}
                                style={{ backgroundImage: `url("${stream.image}")` }}
                            >
                                <span className="discovery-live-badge">
                                    <span aria-hidden="true" />
                                    LIVE
                                </span>
                                <span className="discovery-stream-viewers">
                                    {stream.viewers} viewers
                                </span>
                            </Link>
                            <div className="discovery-stream-details">
                                <img className="discovery-avatar" src={stream.avatar} alt="" />
                                <div className="discovery-stream-copy">
                                    <Link className="discovery-stream-title" to="/VideoPage">
                                        {stream.title}
                                    </Link>
                                    <p>{stream.creator}</p>
                                    <span>{stream.viewers} viewers · {stream.category}</span>
                                </div>
                                <button
                                    className="discovery-more-button"
                                    type="button"
                                    aria-label={`More options for ${stream.title}`}
                                >
                                    <i className="fa-solid fa-ellipsis-vertical" aria-hidden="true" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <p className="discovery-empty-state">
                    No live streams in this category right now. Try another filter.
                </p>
            )}
        </section>
    );
}

export default LiveStreams;
