import React from "react";
import type { FC } from "react";
import styled from "styled-components";

type Variant = "Free" | "PRO" | "ENTERPRISE";

export interface LabelProps {
  variant?: Variant;
}

const UserCardLabel: FC<LabelProps> = ({ variant = "Free", ...props }) => {
  return (
    <Label variant={variant} {...props}>
      {variant}
    </Label>
  );
};

const Label = styled("span")<{ variant: Variant }>(({ variant }) => ({
  display: "block",
  position: "absolute",
  alignItems: "self-start",
  top: "-6px",
  left: '40px',
  height: "20px",
  lineHeight: "20px",
  fontSize: "12px",
  fontWeight: "700",
  padding: "0px 4px",
  borderRadius: "6px 6px 6px 2px",

  ...getLabelVariant()[variant],
}));

const getLabelVariant = () => ({
  Free: {
    background: "#22C55E",
    color: "#FFFFFF",
  },
  PRO: {
    background: "#FF5630",
    color: "#FFFFFF",
  },
  ENTERPRISE: {
    background: "#FFAB00",
    color: "#FFFFFF",
  },
});

export default UserCardLabel;
