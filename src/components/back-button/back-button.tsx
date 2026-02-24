"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  text: string;
};

export const BackButton: FC<Props> = ({ text }) => {
  const router = useRouter();

  return (
    <a className={styles.link} onClick={() => router.back()}>
      {text}
    </a>
  );
};
