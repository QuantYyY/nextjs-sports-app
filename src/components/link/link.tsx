"use client";

import { default as NextLink } from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  href: string;
  children?: React.ReactNode | undefined;
};

export const Link: FC<Props> = (props) => {
  const { href, children, ...otherProps } = props;

  const pathname = usePathname();

  const checkIsActive = (name: string) => {
    return pathname === name;
  };

  return (
    <NextLink
      href={href}
      className={checkIsActive(href) ? styles.active : ""}
      {...otherProps}
    >
      {children}
    </NextLink>
  );
};
