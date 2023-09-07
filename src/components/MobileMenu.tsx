import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, LayoutDashboard } from "lucide-react";
import logo from "../assets/Logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const pathname = useLocation().pathname;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex md:hidden mr-2">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-[#32363f]">
        <div className=" flex-col flex ">
          <div className="h-[80px] mb-4 bg-[#32363f] flex items-center justify-between px-6 ">
            <Link to="/" className="flex gap-2">
              <img src={logo} className="h-6 sm:h-9 " alt="Logo" />
            </Link>
          </div>
          <div className="flex-grow bg-[#32363f] h-full flex-1 py-4">
            <p className="px-5 text-orange uppercase font-bold text-xs py-2 ">
              Menu
            </p>
            <ul className="flex flex-col [text-15px] px-[10px]">
              <li>
                <NavLink
                  to="/"
                  className={`flex items-center  ${
                    pathname === "/"
                      ? "border-l-[#F75757] border-l-2 bg-[#2B2E36]"
                      : ""
                  }  gap-2 py-5  font-bold`}
                >
                  <span className="inline-flex w-5 h-5 justify-center items-center ml-4">
                    <LayoutDashboard className="w-5 h-5" />
                  </span>
                  <span
                    className={`ml-2 text-sm tracking-wide truncate ${
                      pathname === "/" ? "text-orange" : ""
                    }`}
                  >
                    Dashboard
                  </span>
                </NavLink>
              </li>

              <li className="py-5 ">
                <NavLink
                  to="/main-layout"
                  className={`flex items-center  ${
                    pathname === "/main-layout"
                      ? "border-l-[#F75757] border-l-2 bg-[#2B2E36]"
                      : ""
                  }  gap-2 py-5  font-bold`}
                >
                  <span className="inline-flex w-5 h-5 justify-center items-center ml-4"></span>
                  <span
                    className={`ml-2 text-sm tracking-wide truncate ${
                      pathname === "/main-layout" ? "text-orange" : ""
                    }`}
                  >
                    Main layout
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
