import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  number: string;
}

const NumberBadge: FC<Props> = ({ number }) => {
  return <Badge>{number}</Badge>;
};

const Badge = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  backgroundColor: "#FF5630",
  color: "#FFFFFF",
  fontSize: "12px",
  fontWeight: "700",
  borderRadius: "50%",
});

export default NumberBadge;
