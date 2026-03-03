"use client";

import { IRacket } from "@/types/racket";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

export type SetFavorite = { id: IRacket["id"]; isFavorite?: boolean };

type FavoriteContextType = {
  favorites: Record<IRacket["id"], boolean>;
  setFavorite: (params: SetFavorite) => void;
};

export const FavoriteContext = createContext<FavoriteContextType>();

export const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState({});

  const setFavorite = useCallback(({ id, isFavorite }: SetFavorite) => {
    setFavorites((prev) => {
      if (prev[id] === isFavorite) {
        return prev;
      }

      return {
        ...prev,
        [id]: isFavorite,
      };
    });
  }, []);

  return (
    <FavoriteContext value={{ favorites, setFavorite }}>
      {children}
    </FavoriteContext>
  );
};
