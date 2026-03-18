"use client";

import { FC, useCallback, useOptimistic, useTransition } from "react";
import { handleFavorite } from "./handle-favorite";
import { useSetIsFavorite } from "@/app/providers/favorite/hooks";

type Props = {
  racketId: number;
  isFavorite: boolean;
};

export const FavoriteButton: FC<Props> = ({ racketId, isFavorite }) => {
  const setIsFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ racketId, isFavorite }: Props) => {
      setIsFavorite({ isFavorite: !isFavorite, id: racketId });
      await handleFavorite({ racketId, isFavorite });
    },
    [setIsFavorite],
  );

  return (
    <button onClick={() => handleClick({ racketId, isFavorite })}>
      {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
    </button>
  );
};
