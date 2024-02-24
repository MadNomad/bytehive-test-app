import React, { FC } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { TrendingUpIcon } from "../Icons/Widgets/TrendingUpIcon";
import { formatPercentageValue } from "@/lib/formatUtils";

interface LineDataItem {
  pv: number;
}

interface Data {
  percent: number;
  value: number;
  graphData: LineDataItem[];
}

interface Props {
  title: string;
  data: Data;
}

const TotalIncomeWidget: FC<Props> = ({ title, data }) => {
  return (
    <Wrapper>
      <WidgetHeader>
        <LeftColumn>
          <Title>{title}</Title>
          <TotalValue>${data.value}</TotalValue>
        </LeftColumn>
        <RightColumn>
          <PercentWrapper>
            <TrendingUpIcon />
            <PercentValue>{formatPercentageValue(data.percent)}</PercentValue>
          </PercentWrapper>
          <PercentLabel>than last week</PercentLabel>
        </RightColumn>
      </WidgetHeader>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart width={300} height={100} data={data.graphData}>
          <Line type="monotone" dot={false} dataKey="pv" stroke="#00956C" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px",
  borderRadius: "16px",
  backgroundColor: "#CFEFE4",
  color: "#004B50",
});

const WidgetHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const LeftColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const PercentValue = styled("p")({
  display: "flex",
  width: "22px",
  fontSize: "14px",
  fontWeight: "600",
  alignItems: "flex-end",
});

const PercentLabel = styled("p")({
  fontSize: "14px",
  fontWeight: "400",
});

const RightColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  lineHeight: "22px",
  alignItems: "center",
  gap: "4px",
});

const PercentWrapper = styled("div")({
  display: "flex",
  gap: "4px",
});

const Title = styled("p")({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
});

const TotalValue = styled("p")({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.5",
});

export default TotalIncomeWidget;
