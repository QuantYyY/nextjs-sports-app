"use client";

import { IRacket } from "@/types/racket";
import { FC } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FavoriteButton } from "../favorite-button/favorite-button";
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/app/providers/favorite/hooks";

type Props = {
  racket: IRacket;
};

export const RacketSelectionItem: FC<Props> = ({ racket }) => {
  const { id, imageUrl, name, userData } = racket;

  useHydrateFavorite({
    id: id,
    isFavorite: userData?.isFavorite,
  });

  const isFavorite = useIsFavoriteById({
    id,
    isFavoriteInitial: userData?.isFavorite,
  });

  return (
    <div className={styles.card}>
      {isFavorite && (
        <img
          src="http://localhost:4000/bookmark.png"
          alt="bookmark"
          className={styles.favoriteIcon}
        />
      )}
      <Link href={`/rackets/${id}`}>
        <div key={id}>
          <img src={imageUrl} alt={name} />
          <div>{name}</div>
        </div>
      </Link>
      {userData && <FavoriteButton racketId={id} isFavorite={isFavorite} />}
    </div>
  );
};
