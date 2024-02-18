import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  number: string;
}

const NumberBage: FC<Props> = ({ number }) => {
  return <Badge>{number}</Badge>;
};

const Badge = styled("div")({
  width: "20px",
  height: "20px",
  backgroundColor: "#FF5630",
  color: "#FFFFFF",
  fontSize: "12px",
  fontWeight: "700",
  alignItems: "center",
  borderRadius: "10px",
});

export default NumberBage;
