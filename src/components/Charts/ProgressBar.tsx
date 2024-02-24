import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  percent: number;
  color: string;
}

const ProgressBar: FC<Props> = ({ percent, color, ...props }) => {
  return (
    <ProgressBarBackground>
      <ProgressVisual percent={percent} color={color} />
    </ProgressBarBackground>
  );
};

const ProgressBarBackground = styled("div")({
  height: "8px",
  width: "100%",
  borderRadius: "4px",
  backgroundColor: "rgba(145, 158, 171, 0.16)",
});

const ProgressVisual = styled("div")<Props>(({ percent, color }) => ({
  height: "100%",
  width: `${percent}%`,
  borderRadius: "4px",
  backgroundColor: `${color}`,
}));
export default ProgressBar;
