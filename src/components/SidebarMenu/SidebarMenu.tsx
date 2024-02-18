import React, { FC } from "react";

import Link from "next/link";
import styled from "styled-components";

interface Props {
  menuItems: [];
}

const SidebarMenu: FC<Props> = ({ menuItems }) => {
  return (
    <StyledMenu>
      {menuItems.map(({ url, label, icon }) => (
        <StyledLink key={url} href={url}>
          {icon}
          <StyledLabel>{label}</StyledLabel>{" "}
        </StyledLink>
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const StyledLink = styled(Link)({
  display: "flex",
  height: "44px",
  padding: "12px 10px",
  borderRadius: "8px",
  color: "#637381",
  alignItems: "center",

  "&:hover": {
    color: "#00A76F",
    backgroundColor: "rgba(0, 167, 111, 0.08)",
  },

  "&:hover svg path": {
    fill: "rgba(0, 167, 111, 1)",
  },
});

const StyledLabel = styled("span")({
  display: "block",
  padding: "11px 16px",
  fontSize: "14px",
  fontWeight: "600",
});

export default SidebarMenu;
