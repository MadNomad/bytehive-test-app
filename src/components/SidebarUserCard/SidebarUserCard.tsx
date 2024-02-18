import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import UserCardLabel from "../UserCardLabel/UserCardLabel";

const SidebarUserCard = () => {
  return (
    <UserCard>
      <UserAvatar src='/images/Avatar.1.png' alt='User photo' width='48' height='48' />
      <UserCardLabel variant='PRO' />
      <div className='user-info__status badge-online'></div>
      <UserInfo>
        <UserName>Hudson Alvarez</UserName>
        <UserMail>hudson.alvarez@gmail.com</UserMail>
      </UserInfo>
      <Button variant='contained'>Upgrade to Pro</Button>
    </UserCard>
  );
};

const UserCard = styled("div")({
  position: "relative",
  marginTop: "auto",
  marginBottom: "40px",
  height: "162px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const UserAvatar = styled(Image)({
  borderRadius: "50%",
  WebkitBorderRadius: "50%",
});

const UserInfo = styled("div")({
  height: "78px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const UserName = styled("div")({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  color: "#212B36",
});

const UserMail = styled("div")({
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "22px",
  color: "#919EAB",
});

export default SidebarUserCard;
