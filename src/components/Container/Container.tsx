import React from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled("div")({
  position: "absolute",
  width: "1442px",
  maxWidth: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export default Container;
