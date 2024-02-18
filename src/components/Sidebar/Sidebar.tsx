import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";
import SidebarMenuTitle from "./components/SidebarMenuTitle";
import SidebarUserCard from "./components/SidebarUserCard";
import { OverviewIcon } from "../Icons/OverviewIcon";
import { CommerceIcon } from "../Icons/CommerceIcon";
import { AnalyticsIcon } from "../Icons/AnalyticsIcon";
import { BankingIcon } from "../Icons/BankingIcon";
import { BookingIcon } from "../Icons/BookingIcon";
import { MailIcon } from "../Icons/MailIcon";
import SidebarMenu from "./components/SidebarMenu";

export interface SidebarItem {
  url: string;
  label: string;
  icon: ReactNode;
}

const menuOverviewItems: SidebarItem[] = [
  {
    url: "/overview",
    label: "Overview",
    icon: <OverviewIcon />,
  },
  {
    url: "/ecommerce",
    label: "E-commerce",
    icon: <CommerceIcon />,
  },
  {
    url: "/analytics",
    label: "Analytics",
    icon: <AnalyticsIcon />,
  },
  {
    url: "/banking",
    label: "Banking",
    icon: <BankingIcon />,
  },
  {
    url: "/booking",
    label: "Booking",
    icon: <BookingIcon />,
  },
];

const menuManagementItems: SidebarItem[] = [
  {
    url: "/mail",
    label: "Mail",
    icon: <MailIcon />,
  },
];

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarWrapper>
        <StyledLogo>
          <Link href="/">
            <Image src="./images/logo.svg" alt="Logo" width="40" height="40"></Image>
          </Link>
        </StyledLogo>
        <MenuWrapper>
          <SidebarMenuTitle title="Overview" />
          <SidebarMenu menuItems={menuOverviewItems} />
          <SidebarMenuTitle title="Management" />
          <SidebarMenu menuItems={menuManagementItems} />
        </MenuWrapper>
        <SidebarUserCard />
      </SidebarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  position: "relative",
  width: "280px",
  height: "100vh",
  border: "0px",
  borderRight: "1px",
  borderStyle: "dashed",
  borderColor: "rgba(145, 158, 171, 0.2)",
});

const SidebarWrapper = styled("div")({
  width: "248px",
  height: "100vh",
  padding: "0 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledLogo = styled("div")({
  height: "72px",
  paddingLeft: "16px",
  paddingBottom: "8px",
  paddingTop: "20px",
});

const MenuWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export default Sidebar;
