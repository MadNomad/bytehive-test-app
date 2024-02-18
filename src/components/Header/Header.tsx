import React from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BellIcon } from "../Icons/BellIcon";
import NumberBadge from "../Icons/Badges/NumberBadge";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <HeaderWrapper>
      <PageTitle>{title}</PageTitle>
      <UserNotify>
        <NotityBadge>
          <NumberBadge number="5" />
        </NotityBadge>
        <NotifyIcon>
          <BellIcon />
        </NotifyIcon>
      </UserNotify>
      <UserAcount src="/images/Avatar.1.png" alt="User photo" width="36" height="36" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled("div")({
  height: "80px",
  padding: "22px 42px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const PageTitle = styled("h1")({
  marginRight: "auto",
  color: "#212B36",
  fontSize: "32px",
  fontWeight: "700",
  paddingRight: "42px",
});

const UserNotify = styled("div")({
  position: "relative",
  width: "40px",
  height: "40px",
  marginRight: "23px",
});

const NotityBadge = styled("div")({
  position: "absolute",
  top: "-2px",
  left: "22px",
});

const NotifyIcon = styled("div")({
  position: "absolute",
  top: "8px",
  right: "8px",
});

const UserAcount = styled(Image)({
  position: "relative",
  borderRadius: "50%",
  WebkitBorderRadius: "50%",
  width: "36px",
  height: "36px",
});

export default Header;
