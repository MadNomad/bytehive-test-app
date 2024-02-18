import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import UserCardLabel from "./UserCardLabel";
import UserCardBadge, { Badges } from "@/components/Sidebar/components/UserCardBadge";

const SidebarUserCard = () => {
  return (
    <UserCard>
      <ImageWrapper>
        <UserAvatar src="/images/Avatar.1.png" alt="User photo" width="48" height="48" />
        <UserCardBadge variant={Badges.Busy} />
        <UserCardLabel variant="Free" />
      </ImageWrapper>

      <UserInfo>
        <UserName>Hudson Alvarez</UserName>
        <UserMail>hudson.alvarez@gmail.com</UserMail>
      </UserInfo>
      <Button variant="contained">Upgrade to Pro</Button>
    </UserCard>
  );
};

const ImageWrapper = styled("div")({
  position: "relative",
});

const UserCard = styled("div")({
  position: "relative",
  marginTop: "auto",
  marginBottom: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const UserAvatar = styled(Image)({
  borderRadius: "50%",
});

const UserInfo = styled("div")({
  padding: "12px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const UserName = styled("p")({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  color: "#212B36",
});

const UserMail = styled("p")({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  color: "#919EAB",
});

export default SidebarUserCard;
