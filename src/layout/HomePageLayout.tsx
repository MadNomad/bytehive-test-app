import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: ReactNode;
}

const HomePageLayout: FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <ContentWrapper>
          <Header title={title} />
          {children}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const ContentWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export default HomePageLayout;
