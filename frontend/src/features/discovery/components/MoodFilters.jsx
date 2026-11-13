function MoodFilters({ categories, activeCategory, onChange }) {
    return (
        <nav className="discovery-filters" aria-label="Filter live streams">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`discovery-filter${activeCategory === category ? " is-active" : ""}`}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => onChange(category)}
                >
                    {category}
                </button>
            ))}
        </nav>
    );
}

export default MoodFilters
