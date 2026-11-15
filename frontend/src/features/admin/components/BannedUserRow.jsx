import { formatDate, formatTime, isActiveBan } from "../../../mocks/moderation.js";

const STATUS_LABELS = {
    active: "Active",
    permanent: "Permanent",
    expired: "Expired",
    unbanned: "Unbanned",
};

function BannedUserRow({ ban, onUnban }) {
    const { id, user, start, end, reason, status } = ban;

    return (
        <tr>
            <td>
                {user.name}
                <br />
                <small>{user.handle} · {user.userId}</small>
            </td>
            <td>{id}</td>
            <td>
                {formatDate(start)}
                <br />
                <small>{formatTime(start)} CEST</small>
            </td>
            <td>
                {end === null ? (
                    <>
                        No expiry
                        <br />
                        <small>Permanent ban</small>
                    </>
                ) : (
                    <>
                        {formatDate(end)}
                        <br />
                        <small>
                            {formatTime(end)} CEST{status === "unbanned" && " · Lifted"}
                        </small>
                    </>
                )}
            </td>
            <td>{reason}</td>
            <td>{STATUS_LABELS[status]}</td>
            <td>
                <button
                    className="btn btn-outline-light btn-sm"
                    disabled={!isActiveBan(ban)}
                    onClick={() => onUnban(id)}
                >
                    Unban
                </button>
            </td>
        </tr>
    );
}
export default BannedUserRow;