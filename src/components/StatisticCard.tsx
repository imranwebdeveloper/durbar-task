import React from "react";

interface Props {
  children?: React.ReactNode;
  value: number | string;
  title: string;
  titleColor: string;
}

const StatisticCard: React.FC<Props> = ({
  children,
  title,
  titleColor,
  value,
}) => {
  return (
    <div className="flex gap-4 bg-[#32363f] rounded items-center px-4 py-8">
      <div>{children}</div>
      <div>
        <p className={`text-orange text-3xl font-bold ${titleColor}`}>
          {value}
        </p>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
