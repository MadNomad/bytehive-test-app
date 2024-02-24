import React, { FC } from "react";
import RadialChart from "../Charts/RadialChart";
import styled from "styled-components";

interface Data {
  name: string;
  value: string;
  percent: number;
  color: string;
}

interface Props {
  data: Data;
}

const BookingChartWidget: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <RadialChart
        data={[
          {
            name: "Background",
            value: 100,
            fill: "rgba(145, 158, 171, 0.16)",
          },
          {
            name: data.name,
            value: data.percent,
            fill: data.color,
          },
        ]}
      />
      <ChartInfo>
        <Value>{data.value}</Value>
        <Description>{data.name}</Description>
      </ChartInfo>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  alignItems: "center",
  border: "0px",
  borderRight: "1px",
  borderStyle: "dashed",
  borderColor: "rgba(145, 158, 171, 0.2)",
  "&:last-child": {
    borderRight: "0px",
  },
});

const ChartInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Value = styled("p")({
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "36px",
  color: "#212B36",
});

const Description = styled("p")({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  color: "#637381",
});

export default BookingChartWidget;
