import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { TotalIcon } from "../Icons/Widgets/TotalIcon";
import { SoldIcon } from "../Icons/Widgets/SoldIcon";
import { CanceledIcon } from "../Icons/Widgets/CanceledIcon";

type Variant = "Total" | "Sold" | "Canceled";

export interface BookingWidgetProps {
  variant: Variant;
  title: string;
  value: string;
}

const BookingWidget: FC<BookingWidgetProps> = ({ variant, title, value, ...props }) => {
  return (
    <Widget {...props}>
      <InfoWrapper>
        <WidgetValue>{value}</WidgetValue>
        <WidgetTitle>{title}</WidgetTitle>
      </InfoWrapper>
      <WidgetIcon>{getIconVariant(variant)}</WidgetIcon>
    </Widget>
  );
};

const Widget = styled("div")({
  width: "344px",
  height: "152px",
  display: "flex",
  padding: "16px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "16px",
  boxShadow: "0px 0px 2px 0px rgba(145, 158, 171, 0.20), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
});

const InfoWrapper = styled("div")({
  flexDirection: "row",
  gap: "8px",
});

const WidgetValue = styled("p")({
  color: "#212B36",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.5",
});

const WidgetTitle = styled("p")({
  color: "#637381",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
});

const WidgetIcon = styled("div")({});

const getIconVariant = (variant: Variant): ReactNode => {
  switch (variant) {
    case "Total":
      return <TotalIcon />;
    case "Sold":
      return <SoldIcon />;
    case "Canceled":
      return <CanceledIcon />;
    default:
      return "";
  }
};
export default BookingWidget;
