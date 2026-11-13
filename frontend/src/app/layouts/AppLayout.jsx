import { Outlet } from "react-router";
import Header from "../../shared/layouts/Header";
import Sidebar from "../../shared/layouts/Sidebar";

function AppLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="AppLayout">
        <Sidebar />
        <div className="ViewPort">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
