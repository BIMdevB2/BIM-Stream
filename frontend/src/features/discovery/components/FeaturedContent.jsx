import { useState } from "react";
import { Link } from "react-router";

const featuredImage = "../../../public/images/montain.avif";

function FeaturedContent() {
    const [following, setFollowing] = useState(false);

    return (
        <section
            className="discovery-featured"
            aria-labelledby="featured-title"
            style={{
                backgroundImage: `linear-gradient(90deg, rgb(8 12 18 / 95%) 0%, rgb(8 12 18 / 72%) 48%, rgb(8 12 18 / 18%) 100%), url("${featuredImage}")`,
            }}
        >
            <div className="discovery-featured-content">
                <div className="discovery-featured-meta">
                    <span className="discovery-live-badge">
                        <span aria-hidden="true" />
                        LIVE
                    </span>
                    <span>B.I.M. Pick · 2.4K viewers</span>
                </div>
                <h2 id="featured-title">A night on the edge of the unknown.</h2>
                <p>
                    Exploration, thrills, and theories: dive into the world of “Beyond”
                    with Sadie Adler.
                </p>
                <div className="discovery-featured-creator">
                    <img
                        src="../../../public/images/sadie.jpeg"
                        alt=""
                    />
                    <span>Sadie Adler</span>
                    <span aria-hidden="true">·</span>
                    <span>Movie script · French</span>
                </div>
                <div className="discovery-featured-actions">
                    <Link className="discovery-button discovery-button-primary" to="/VideoPage">
                        <i className="fa-solid fa-play" aria-hidden="true" />
                        Join live
                    </Link>
                    <button
                        className="discovery-button discovery-button-quiet"
                        type="button"
                        aria-pressed={following}
                        onClick={() => setFollowing((isFollowing) => !isFollowing)}
                    >
                        <i
                            className={`fa-${following ? "solid" : "regular"} fa-heart`}
                            aria-hidden="true"
                        />
                        {following ? "Following" : "Follow channel"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedContent;
