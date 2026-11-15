const FILTERS = [
    { id: "all", label: "All records" },
    { id: "active", label: "Active" },
    { id: "past", label: "Past bans" },
];

function FilterBar({ search, onSearch, filter, onFilter, counts }) {
    return (
        <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <input
                className="form-control w-auto"
                placeholder="Search user, ID, or ban reason..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
            {FILTERS.map((f) => (
                <button
                    key={f.id}
                    className={`btn btn-sm ${filter === f.id ? "btn-warning" : "btn-outline-secondary"}`}
                    onClick={() => onFilter(f.id)}
                >
                    {f.label} · {counts[f.id]}
                </button>
            ))}
        </div>
    );
}
export default FilterBar;