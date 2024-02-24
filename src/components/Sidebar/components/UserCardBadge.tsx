import React, { ReactNode } from "react";
import type { FC } from "react";
import styled from "styled-components";
import { AwayBadge } from "../../Icons/Badges/AwayBadge";
import { BusyBadge } from "../../Icons/Badges/BusyBadge";
import { OnlineBadge } from "../../Icons/Badges/OnlineBadge";
import { OfflineBadge } from "../../Icons/Badges/OfflineBadge";

export enum Badges {
  Online = "Online",
  Busy = "Busy",
  Offline = "Offline",
  Away = "Away",
}

export interface BadgeProps {
  variant?: Badges;
}

const getBadgeVariant = (variant: Badges): ReactNode => {
  switch (variant) {
    case Badges.Online:
      return <OnlineBadge />;
    case Badges.Busy:
      return <BusyBadge />;
    case Badges.Away:
      return <AwayBadge />;
    default:
      return <OfflineBadge />;
  }
};

const UserCardBadge: FC<BadgeProps> = ({ variant = Badges.Offline, ...props }) => {
  return <Badge {...props}>{getBadgeVariant(variant)}</Badge>;
};

const Badge = styled("div")({
  position: "absolute",
  right: "0px",
  bottom: "0px",

  svg: {
    border: "1px solid white",
    height: "fit-content",
    borderRadius: "50%",
  },
});

export default UserCardBadge;
