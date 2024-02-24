import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type Variant = "Total" | "Sold" | "Canceled";

export interface BookingWidgetProps {
  variant: Variant;
  title: string;
  value: string;
  icon: ReactNode;
}

const BookingWidget: FC<BookingWidgetProps> = ({ variant, title, value, icon, ...props }) => {
  return (
    <Widget {...props}>
      <InfoWrapper>
        <WidgetValue>{value}</WidgetValue>
        <WidgetTitle>{title}</WidgetTitle>
      </InfoWrapper>
      {icon}
    </Widget>
  );
};

const Widget = styled("div")({
  width: "100%",
  display: "flex",
  padding: "16px",
  paddingLeft: "24px",
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

export default BookingWidget;
