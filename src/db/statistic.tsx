import {
  PackageCheck,
  User2,
  Car,
  CircleDollarSign,
  LineChart,
  BarChartHorizontal,
} from "lucide-react";

export const statisticData = [
  {
    title: "Order Received",
    titleColor: "text-orange",
    value: 7540,
    icon: <PackageCheck className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
  {
    title: "Today Delivered",
    titleColor: "text-[#78D25B]",
    value: 2625,
    icon: <Car className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
  {
    title: "New Customer",
    titleColor: "text-[#6257F7]",
    value: 7540,
    icon: <User2 className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
  {
    title: "Net Earning",
    titleColor: "text-[#FA9441]",
    value: 42750,
    icon: <CircleDollarSign className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
  {
    title: "Daily sales",
    titleColor: "text-[#78D25B]",
    value: "Total: 9765",
    icon: <BarChartHorizontal className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
  {
    title: "Daily Expense",
    titleColor: "text-orange",
    value: "Total: 6765",
    icon: <LineChart className="w-[44px] text-[#B0CAD1] h-[48px]" />,
  },
];
