import { useState } from "react";
import FeaturedContent from "../components/FeaturedContent";
import MoodFilters from "../components/MoodFilters";
import LiveStreams from "../components/LiveStreams";
import UpcomingEvent from "../components/UpcomingEvent";
import CommunityPanel from "../components/CommunityPanel";
import { categories, liveStreams } from "../../../mocks/discovery";
import "../style/Discovery.css";

function HomePage() {
    const [activeCategory, setActiveCategory] = useState("For you");
    const visibleStreams =
        activeCategory === "For you"
            ? liveStreams
            : activeCategory === "Subscriptions"
                ? liveStreams.filter((stream) => stream.subscribed)
                : liveStreams.filter((stream) => stream.category === activeCategory);

    return (
        <div className="discovery-page">
            <FeaturedContent />
            <MoodFilters
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
            />
            <LiveStreams streams={visibleStreams} />
            <UpcomingEvent />
            <CommunityPanel />
        </div>
    );
}

export default HomePage;
