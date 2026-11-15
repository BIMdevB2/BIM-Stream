function StatCard({ label, value, hint }) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <p className="mb-1">{label}</p>
                <h2>{value}</h2>
                <small>{hint}</small>
            </div>
        </div>
    );
}
export default StatCard;