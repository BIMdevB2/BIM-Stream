import { Outlet } from "react-router";
import Header from "../../shared/layouts/Header";
import Sidebar from "../../shared/layouts/Sidebar";

function AppLayout() {
    return(
        <div>
            <header>
                <Header /> 
                <Sidebar />
            </header>
            
            <main><Outlet /></main>
        </div>
    );
}

export default AppLayout;