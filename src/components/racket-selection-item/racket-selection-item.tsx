import { IRacket } from "@/types/racket";
import { FC } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

type Props = {
  racket: IRacket;
};

export const RacketSelectionItem: FC<Props> = ({ racket }) => {
  const { id, imageUrl, name } = racket;

  return (
    <Link href={`/rackets/${id}`}>
      <div key={id} className={styles.card}>
        <img src={imageUrl} alt={name} />
        <div>{name}</div>
      </div>
    </Link>
  );
};
