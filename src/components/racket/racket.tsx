"use client";

import { FC } from "react";
import styles from "./styles.module.scss";
import { BackButton } from "@/components/back-button/back-button";
import { IRacket } from "@/types/racket";
import { FavoriteButton } from "../favorite-button/favorite-button";
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/app/providers/favorite/hooks";

type Props = {
  racket: IRacket;
};

export const Racket: FC<Props> = ({ racket }) => {
  const { id, userData } = racket;

  useHydrateFavorite({
    id: id,
    isFavorite: userData?.isFavorite,
  });

  const isFavorite = useIsFavoriteById({
    id,
    isFavoriteInitial: userData?.isFavorite,
  });

  return (
    <div className={styles.racket}>
      <div className={styles.description}>
        <div className={styles.backButton}>
          <BackButton text="Назад" />
          {racket.userData && (
            <FavoriteButton racketId={racket.id} isFavorite={isFavorite} />
          )}
        </div>
        <div className={styles.brand}>{racket.brand.name}</div>
        <div className={styles.name}>{racket.name}</div>
        <div className={styles.descriptionText}>{racket.description}</div>
      </div>

      <div className={styles.card}>
        <img src={racket.imageUrl} alt={racket.name} />
      </div>

      <div className={styles.price}>{racket.price} €</div>
    </div>
  );
};
