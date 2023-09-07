import { Home, Smartphone } from "lucide-react";
import { Menu } from "lucide-react";
import logo from "../assets/Logo.png";

const AdminSidebar = () => {
  return (
    <div className="w-[320px] flex flex-col ">
      <div className="h-[80px] mb-4 bg-[#32363f] flex items-center justify-between px-4 border-r border-slate-600 ">
        <a href="/" className="flex gap-2">
          <img src={logo} className="h-6 sm:h-9 " alt="Logo" />
        </a>
        <Menu />
      </div>
      <div className="flex-grow bg-[#32363f] flex-1">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 text-orange uppercase ">Menu</li>
          <li>
            <a
              href="/dashboard"
              //   className={`dashboard_link ${
              //     path === "/dashboard" ? "bg-orange-50 text-orange-600" : ""
              //   }`}
            >
              <span className="inline-flex w-5 h-5 justify-center items-center ml-4">
                <Home />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/mobile"
              //   className={`dashboard_link ${
              //     path === "/dashboard/mobile"
              //       ? "bg-orange-50 text-orange-600"
              //       : ""
              //   }`}
            >
              <span className="inline-flex justify-center items-center w-5 h-5 ml-4">
                <Smartphone />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Mobile
              </span>
            </a>
          </li>
          <li>
            <a
              href="/dashboard/mobile/all"
              //   className={`dashboard_link ${
              //     path === "/dashboard/mobile/all"
              //       ? "bg-orange-50 text-orange-600"
              //       : ""
              //   }`}
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">All</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
