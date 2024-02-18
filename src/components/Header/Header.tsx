import React from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BellIcon } from "../Icons/BellIcon";
import NumberBage from "../Icons/Badges/NumberBage";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <HeaderWrapper>
      <PageTitle>{title}</PageTitle>
      <UserNotify>
        <NumberBage number='5' />
        <BellIcon />
      </UserNotify>
      <UserAcount src='/images/Avatar.1.png' alt='User photo' width='36' height='36' />
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

const PageTitle = styled("div")({
  marginRight: "auto",
});

const UserNotify = styled("div")({
  width: "40px",
  height: "40px",
  position: "relative",
});

const UserAcount = styled(Image)({
  borderRadius: "50%",
  WebkitBorderRadius: "50%",
  width: "36px",
  height: "36px",
});

export default Header;
