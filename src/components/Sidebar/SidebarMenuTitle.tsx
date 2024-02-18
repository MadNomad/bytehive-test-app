import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const SidebarMenuTitle: FC<Props> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled("div")({
  textTransform: "uppercase",
  color: "#919EAB",
  fontSize: "11px",
  fontWeight: "700",
  paddingTop: "16px",
  paddingLeft: "12px",
  paddingBottom: "8px",
});

export default SidebarMenuTitle;
