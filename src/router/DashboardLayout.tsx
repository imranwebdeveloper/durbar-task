import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/LeftSidebar";
import DashboardHeader from "../components/Header";

const DashboardLayout = () => {
  return (
    <>
      <div className="grid h-screen md:grid-cols-[320px_1fr]">
        <AdminSidebar />
        <section className="h-screen">
          <DashboardHeader />
          <main>
            <Outlet />
          </main>
        </section>
      </div>

      <footer></footer>
    </>
  );
};

export default DashboardLayout;
