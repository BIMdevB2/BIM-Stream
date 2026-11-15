function ModerationPage() {
    return (
        <>
        <p>Administration / Moderation</p>
            <h4>Review community activity and manage access with care</h4>
            <h1><i>StatCard</i></h1>

            <h4>Banned Users</h4>
            <h1><i>FilterBar</i></h1>
            
            <h1><i>BannedUserRow</i></h1>
            <div className="d-flex">
                <p className="m-5">Showing 5 of 5 records</p>
                <p className="m-5">Expired and lifted bans remain in the moderation history</p>
            </div>

            <div className="d-flex">
                <h1 className="m-5"><i>BanForm</i></h1>
                <h1 className="m-5"><i>ActivityItem</i></h1>
            </div>

            <p>You're acting as B.I.M Admin • ADM-001, not as a community profile.</p>

        </>
    );
}
export default ModerationPage;