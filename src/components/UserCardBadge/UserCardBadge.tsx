import React from "react";
import type { FC } from "react";
import styled from "styled-components";
import { AlwayBadge } from "../Icons/Badges/AlwayBadge";
import { BusyBadge } from "../Icons/Badges/BusyBadge";
import { OnlineBadge } from "../Icons/Badges/OnlineBadge";
import { OfflineBadge } from "../Icons/Badges/OfflineBadge";

enum Bagdges {
  Online = "Online",
  Busy = "Busy",
  Offline = "Offline",
  Alway = "Alway",
}

export interface BadgeProps {
  variant?: Bagdges;
}

const UserCardBadge: FC<BadgeProps> = ({ variant = Bagdges.Offline, ...props }) => {
  return <Badge {...props}>{getBadgeVariant(variant)}</Badge>;
};

const Badge = styled("div")({});

const getBadgeVariant = (variant: Bagdges): React.JSX.Element => (
  switch (variant) {
    case Bagdges.Online:
      return <OnlineBadge />;
    case Bagdges.Busy:
      return <BusyBadge />;

    case Bagdges.Alway:
      return <AlwayBadge />;
    default:
      return <OfflineBadge />;
  }
);

export default UserCardBadge;
