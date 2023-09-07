import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: 2011, Expenses: 1200, Income: 2000 },
  { name: 2012, Expenses: 900, Income: 2200 },
  { name: 2013, Expenses: 1100, Income: 2500 },
  { name: 2014, Expenses: 950, Income: 2300 },
  { name: 2015, Expenses: 1300, Income: 2400 },
  { name: 2016, Expenses: 800, Income: 2100 },
  { name: 2017, Expenses: 1000, Income: 2000 },
];

const EarningGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} className="">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Expenses"
          stackId="1"
          stroke="#463941"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Income"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default EarningGraph;
