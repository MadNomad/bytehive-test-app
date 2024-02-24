import React, { FC } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

interface Data {
  name: string;
  value: number;
  fill: string;
}

interface Props {
  data: Data[];
}

const RadialChart: FC<Props> = ({ data, ...props }) => {
  return (
    <RadialBarWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          startAngle={450}
          endAngle={90}
          innerRadius="100%"
          outerRadius="100%"
          barSize={8}
          data={data}
        >
          <RadialBar cornerRadius="50%" dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
      <Label>{data[1].value}%</Label>
    </RadialBarWrapper>
  );
};

const RadialBarWrapper = styled("div")({
  display: "flex",
  position: "relative",
  width: "80px",
  height: "80px",
  justifyContent: "center",
  alignItems: "center",
});

const Label = styled("p")({
  position: "absolute",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  color: "#212B36",
});

export default RadialChart;
