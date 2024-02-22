import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Cell, Label, Pie } from "recharts";

const PieChart = dynamic(() => import("recharts").then((recharts) => recharts.PieChart), { ssr: false });

export interface RoomAvailableDataItem {
  name: string;
  value: number;
}

interface Props {
  title: string;
  chartData: RoomAvailableDataItem[];
}

const RoomAvailable: FC<Props> = ({ title, chartData, ...props }) => {
  return (
    <div>
      <p>{title}</p>
      <PieChart width={344} height={452}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          dataKey="value"
          startAngle={450}
          endAngle={90}
          innerRadius={60}
          outerRadius={80}
        >
          {chartData.map((entry, index) => {
            if (index === 1) {
              return <Cell key={`cell-${index}`} fill="rgba(145, 158, 171, 0.16)" />;
            }
            return <Cell key={`cell-${index}`} fill="#5BE49B" />;
          })}
          <Label
            value={chartData[0].value}
            position="center"
            fill="grey"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
};

export default RoomAvailable;
