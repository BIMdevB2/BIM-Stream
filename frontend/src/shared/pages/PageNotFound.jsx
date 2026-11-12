import { NavLink, Link } from "react-router";
import { useNavigate } from "react-router";

function PageNotFound() { 
    const navigate = useNavigate();

    return (
        <>
            <h1>Error 404</h1>
            <p>Sorry, the page your are searching does not exist</p>
            <Link to="/" end className="btn-outline theme-inverse">Accueil</Link>
            <button onClick={()=>navigate(-1)} className="btn-outline theme-inverse">Back</button>
        </>
    );
}

export default PageNotFound;