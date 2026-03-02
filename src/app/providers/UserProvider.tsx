"use client";

import { IUser } from "@/types/user";
import { createContext, FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  user: IUser | undefined;
}

export const UserContext = createContext<IUser | undefined>(undefined);

export const UserProvider: FC<Props> = ({ user, children }) => {
  return <UserContext value={user}>{children}</UserContext>;
};
