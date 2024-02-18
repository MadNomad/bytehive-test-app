import React from "react";
import type { FC, ReactNode } from "react";
import styled from "styled-components";

type Variant = "outlined" | "contained";

export interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
}

const Button: FC<ButtonProps> = ({ children, variant = "outlined", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")<{ variant: Variant }>(({ variant }) => ({
  height: "36px",
  fontSize: "14px",
  fontWeight: "700",
  padding: "6px 12px",
  borderRadius: "8px",
  ...getButtonVariant()[variant],
}));

const getButtonVariant = () => ({
  outlined: {
    border: "1px solid rgba(145, 158, 171, 0.24)",
    background: "transparent",
    color: "#212B36",

    "&:hover": {
      border: "1px solid #212B36",
    },
  },
  contained: {
    border: "1px solid #919EAB",
    background: "#212B36",
    color: "#FFFFFF",

    "&:hover": {
      border: "1px solid #212B36",
      background: "#454F5B",
    },
  },
});

export default Button;
