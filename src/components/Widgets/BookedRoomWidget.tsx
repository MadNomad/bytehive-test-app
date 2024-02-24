import React, { FC } from "react";
import styled from "styled-components";
import ProgressBar from "../Charts/ProgressBar";

interface Data {
  name: string;
  value: string;
  percent: number;
  color: string;
}

interface Props {
  title: string;
  data: Data[];
}

const BookedRoomWidget: FC<Props> = ({ title, data, ...props }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {data.map((item: Data, index: number) => (
        <ItemWrapper key={index}>
          <TextInfoWrapper>
            <ProgressItemName>{item.name}</ProgressItemName>
            <ProgressItemValue>{item.value}</ProgressItemValue>
          </TextInfoWrapper>
          <ProgressBar percent={item.percent} color={item.color} />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "24px",
  color: "#212B36",
  borderRadius: "16px",
  boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

const ItemWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TextInfoWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
});

const ProgressItemName = styled("p")({
  display: "block",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "1.5",
  textTransform: "uppercase",
});

const ProgressItemValue = styled("p")({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "1.5",
});

const Title = styled("p")({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "28px",
});

export default BookedRoomWidget;
