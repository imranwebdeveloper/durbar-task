import { LayoutGrid, TableProperties, Plus, Table } from "lucide-react";
import { foodItems } from "../db/menuList";
import MainLayoutPopUp from "../components/MainlayoutPopup";

const MainLayoutOne = () => {
  return (
    <div className="px-4 flex flex-col  ">
      <div className=" bg-[#32363f] flex items-center justify-between  p-6 font-bold text-sm  shadow-gray-800">
        <p className="uppercase text-orange">Main layout 01</p>
        <p className="flex gap-2">
          <span>Home</span>/<span className="text-orange">Main layout 01</span>
        </p>
      </div>
      <div className=" mx-4 bg-[#32363f] mt-8 flex items-center justify-between  p-6 font-bold text-sm  shadow-gray-800">
        <p className="uppercase text-orange">Main layout 01</p>
        <div className="flex gap-4">
          <TableProperties className="w-5 h-5" />
          <LayoutGrid className="w-5 h-5" />
          <Table className="w-5 h-5" />
          <div className="relative mx-2 w-12">
            <MainLayoutPopUp>
              <button className="rounded-full absolute -top-12 bg-[#F75757] p-3 ">
                <Plus className="text-white " />
              </button>
            </MainLayoutPopUp>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2 px-4 mb-16">
        {foodItems.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center bg-[#32363f] p-4"
            >
              <div className=" bg-[#2B2E36]  w-[140px] h-[140px] p-6 rounded-full overflow-hidden">
                <img src={item.img} alt="" className="w-full rounded-full " />
              </div>
              <p className="font-semibold text-lg text-white">{item.name}</p>
              <p>${item.price}.00</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainLayoutOne;
