const FILTERS = [
    { id: "all", label: "All records" },
    { id: "active", label: "Active" },
    { id: "past", label: "Past bans" },
];
import styles from "../pages/ModerationPage.module.css";

function FilterBar({ search, onSearch, filter, onFilter, counts }) {
    return (
        <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
            <div className={`${styles["mod-field"]} ${styles["mod-search"]}`}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    className={`form-control ${styles["mod-input"]}`}
                    placeholder="Search user, ID, or ban reason..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            {FILTERS.map((f) => (
                <button
                    key={f.id}
                    className={`${styles["mod-pill"]} ${filter === f.id ? styles["mod-pill-active"] : ""}`}
                    onClick={() => onFilter(f.id)}
                >
                    {f.label} · {counts[f.id]}
                </button>
            ))}
            <small className={`${styles["mod-muted"]} ms-auto`}>All dates shown in CEST</small>
        </div>
    );
}
export default FilterBar;