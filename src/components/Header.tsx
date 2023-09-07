import { Search } from "lucide-react";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const DashboardHeader = () => {
  return (
    <header className="h-[80px] mb-4 bg-[#32363f] flex justify-between items-center px-4 ">
      <div className="bg-[#2B2E36] rounded-full w-[296px] flex items-center justify-between gap-2 h-[39px] px-4">
        <input
          type="text"
          name="search"
          className="bg-transparent"
          placeholder="Search..."
        />
        <Search className="w-5 h-5" />
      </div>

      <div className="flex items-center gap-8">
        <Bell className="w-5 h-5 text-orange" />
        <div className="flex gap-3 items-center text-sm text-white">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="flex gap-1 items-center">
            Hermann P. Schnitzel <ChevronDown className="w-5 h-5" />
          </p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
