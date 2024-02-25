import { formatToursData } from "@/lib/formatToursData";
import React, { FC } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

export interface RoomAvailableDataItem {
  name: string;
  value: number;
  fill: string;
}

interface Props {
  title: string;
  chartData: RoomAvailableDataItem[];
}

const RoomAvailable: FC<Props> = ({ title, chartData, ...props }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <RadialBarWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            startAngle={450}
            endAngle={90}
            innerRadius="95%"
            outerRadius="95%"
            barSize={20}
            data={formatToursData(chartData)}
          >
            <RadialBar cornerRadius="50%" dataKey="value" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Label>
          <Name>Tours</Name>
          <Value>{chartData[0].value}</Value>
        </Label>
      </RadialBarWrapper>
      <Legend>
        {chartData.map(({ name, value, fill }) => (
          <LegendItem key={name}>
            <LegendItemColor color={fill} />
            <LegendName>{name}</LegendName>
            <LegendValue>{value} Tours</LegendValue>
          </LegendItem>
        ))}
      </Legend>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  gridArea: "2 / 3 / 4 / 4",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  borderRadius: "16px",
  boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

const Title = styled("p")({
  padding: "24px 24px 0",
  color: "#212B36",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "28px",
  width: "100%",
});

const RadialBarWrapper = styled("div")({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
});

const Label = styled("div")({
  position: "absolute",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  color: "#212B36",
});

const Name = styled("p")({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  color: "#637381",
});

const Value = styled("p")({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "48px",
  color: "#212B36",
});

const Legend = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0 40px 40px",
  width: "100%",
  gap: "16px",
});

const LegendItem = styled("div")({
  display: "flex",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
});

const LegendItemColor = styled("div")<{ color: string }>(({ color }) => ({
  width: "20px",
  height: "20px",
  borderRadius: "6px",
  backgroundColor: `${color}`,
}));

const LegendName = styled("p")({
  color: "#637381",
  paddingLeft: "8px",
});

const LegendValue = styled("p")({
  marginLeft: "auto",
  color: "#212B36",
});

export default RoomAvailable;
