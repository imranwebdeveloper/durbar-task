import trophyImg from "../assets/tropy.png";
import CustomerFeed from "../components/CustomerFeed";
import EarningGraph from "../components/EarningGraph";
import OrderList from "../components/OrderList";
import StatisticCard from "../components/StatisticCard";
import { hotMenu } from "../db/HotMenu";
import { statisticData } from "../db/statistic";
import { GripHorizontal } from "lucide-react";

const Home = () => {
  return (
    <section className="px-4 flex flex-col gap-8  ">
      <div className=" bg-[#32363f] flex items-center justify-between  p-6 font-bold text-sm  shadow-gray-800">
        <p className="uppercase text-orange">Food</p>
        <p className="flex gap-2">
          <span>Home</span>/<span className="text-orange">Food</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 md:gap-4 px-4 text-white">
        <div className="md:col-span-4 col-span-9  ">
          <div className=" bg-[#32363f] text-center  rounded flex flex-col gap-1 justify-center items-center px-8 py-16 ">
            <img src={trophyImg} alt="Trophy" />
            <h1 className="font-bold text-4xl">
              15<small className="text-xl">th</small> Years
            </h1>
            <p className=" text-lg font-bold">
              This Year Winner to Tomatus.
              <span className="text-orange"> Congratulation!</span>
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>

          <div className="mt-4">
            <p className="text-lg mb-2 font-bold">Statistic</p>
            <div className="grid grid-cols-2 gap-2">
              {statisticData.map((statistic, i) => {
                return (
                  <StatisticCard
                    key={i}
                    title={statistic.title}
                    titleColor={statistic.titleColor}
                    value={statistic.value}
                  >
                    {statistic.icon}
                  </StatisticCard>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-5 mt-4 md:mt-0 ">
          <div className="bg-[#32363f] rounded p-4">
            <div className="flex gap-4 justify-between items-center font-bold ">
              <p className="text-lg mb-4">Earning Graph</p>
              <p className="text-sm flex gap-4">
                <span>Income</span> <span>Expanse</span>
              </p>
            </div>
            <EarningGraph />
          </div>

          <div className="rounded mt-4">
            <div className="flex gap-4  justify-between items-center font-bold ">
              <p className="text-lg mb-2">Customer Feed</p>
              <p className="text-sm flex gap-4">View all</p>
            </div>
            <CustomerFeed />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 lg:gap-4 text-white px-4 mb-20">
        <div className="col-span-6">
          <div className="flex gap-4  justify-between items-center font-bold ">
            <p className="text-lg mb-2">Receive Order Lists</p>
            <p className="text-sm px-4">
              <GripHorizontal />
            </p>
          </div>
          <OrderList />
        </div>
        <div className="col-span-3">
          <div className="flex gap-4 mb-2 justify-between items-center font-bold ">
            <p className="text-lg mb-2">Hot Food Menu</p>
            <p className="text-sm flex gap-4">
              <GripHorizontal />
            </p>
          </div>

          <div className="divide-y divide-slate-600 rounded-lg overflow-hidden">
            {hotMenu.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex px-4  bg-[#32363f] font-semibold justify-between items-center py-6 "
                >
                  <p className="ml-8">{item.name}</p>
                  <button
                    className={` w-[120px] rounded-full text-sm py-2   ${
                      item.status === "Paid"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-[#FA9441]"
                        : "bg-[#F75757]"
                    }`}
                  >
                    {item.status}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
