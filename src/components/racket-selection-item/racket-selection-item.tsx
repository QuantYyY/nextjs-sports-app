"use client";

import { IRacket } from "@/types/racket";
import { FC } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

type Props = {
  racket: IRacket;
};

export const RacketSelectionItem: FC<Props> = ({ racket }) => {
  const { id, imageUrl, name } = racket;
  const router = useRouter();

  return (
    <>
      <div
        key={id}
        className={styles.card}
        onClick={() => router.push(`/rackets/${id}`)}
      >
        <img src={imageUrl} alt={name} />
        <div>{name}</div>
      </div>
    </>
  );
};
