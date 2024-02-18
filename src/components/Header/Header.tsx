import React from "react";
import type { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='header__panel'>
          <div className='header__page-title'>{title}</div>
          <div className='header__notification'>
            <div className='header__notification-badge'></div>
          </div>
          <div className='header__user-logo'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
