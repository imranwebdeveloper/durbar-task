import { Menu } from "lucide-react";
import logo from "../assets/Logo.png";

import { LayoutDashboard } from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="w-[320px] flex flex-col   ">
      <div className="h-[80px] mb-4 bg-[#32363f] flex items-center justify-between px-6 border-r border-slate-600 ">
        <a href="/" className="flex gap-2">
          <img src={logo} className="h-6 sm:h-9 " alt="Logo" />
        </a>
        <Menu />
      </div>
      <div className="flex-grow bg-[#32363f] h-full flex-1 py-4">
        <p className="px-5 text-orange uppercase font-bold text-xs py-2 ">
          Menu
        </p>
        <ul className="flex flex-col [text-15px] px-[10px]">
          <li className="bg-[#2B2E36] py-5 border-l-2  border-l-[#F75757] ">
            <a
              href="/main-layout"
              className="flex items-center gap-2  font-bold"
            >
              <span className="inline-flex w-5 h-5 justify-center items-center ml-4">
                <LayoutDashboard className="w-5 h-5" />
              </span>
              <span className="ml-2 text-sm tracking-wide truncate text-orange">
                Dashboard
              </span>
            </a>
          </li>

          <li className="py-5 ">
            <a href="/" className="flex items-center gap-2 ">
              <span className="inline-flex w-5 h-5 justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide font-semibold ">
                Main layout
              </span>
            </a>
          </li>
          <li className="py-5 ">
            <a href="/" className="flex items-center gap-2 ">
              <span className="inline-flex w-5 h-5 justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide font-semibold ">
                Order List
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
