"use client";

import { use, useEffect } from "react";
import { FavoriteContext, SetFavorite } from ".";
import { IRacket } from "@/types/racket";

export const useSetIsFavorite = () => {
  const { setFavorite } = use(FavoriteContext);
  return setFavorite;
};

export const useHydrateFavorite = ({ id, isFavorite }: SetFavorite) => {
  const setIsFavorite = useSetIsFavorite();
  useEffect(() => {
    if (typeof isFavorite === "boolean") {
      setIsFavorite({ isFavorite, id });
    }
  }, [id, isFavorite, setIsFavorite]);
};

export const useIsFavoriteById = ({
  id,
  isFavoriteInitial,
}: {
  id: IRacket["id"];
  isFavoriteInitial?: boolean;
}) => {
  const { favorites } = use(FavoriteContext);
  const isFavoriteGlobal = favorites[id];

  const isFavorite = isFavoriteGlobal ?? isFavoriteInitial;

  return Boolean(isFavorite);
};
